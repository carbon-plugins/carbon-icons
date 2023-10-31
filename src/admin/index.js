import './style.scss';

import apiFetch 																				from "@wordpress/api-fetch";
import { __ } 																					from '@wordpress/i18n';
import { HashRouter, Route, Routes, useLocation } 			from 'react-router-dom';
import { useState, useEffect, useCallback, StrictMode } from 'react';
import { ToastContainer, toast } 												from 'react-toastify';
import { useImmerReducer } 															from "use-immer";
import { driver } 																			from "driver.js";
import { createRoot } 																	from 'react-dom/client';

import { reducer } 					from "./helpers/reducers";
import Footer 							from './components/Footer';
import { config, links } 		 from './helpers/config';

import License 		from "./pages/License";
import Dashboard 	from "./pages/Dashboard";

import { ToggleTheme, SaveButton, Menu, Loader, Indicator, Link } from '@carbon/components';

function Router() {
  const [ data, setData ]             = useImmerReducer( reducer, {} );

  const [ startState, setStartState ] = useState( {} );
  const [ isLoading, setLoading ] 		= useState( false );
  const [ canSave, setCanSave ] 			= useState( false );
  const [ isErrored, setIsErrored ] 	= useState( false );
  const location = useLocation();
	const driverObj = driver({
		showProgress: true,
		onDestroyStarted: () => {
			if(!data.options.tourIsFinished) {
				apiFetch({
					path: config.apiPath,
					method: 'POST',
					data: {
						...data,
						options: {
							...data.options,
							tourIsFinished: true
						}
					},
				})
			}
			driverObj.destroy();
		},
		steps: [
			{ element: '#carbon-icons nav li:first-of-type a', popover: { title: __( 'Your dashboard', "carbon-icons" ), description: __( 'You will find every setting and useful links on this page.', "carbon-icons" ), side: "right", align: 'end' } },
			{ element: '#carbon-icons nav li:last-of-type a', popover: { title: __( 'License settings', "carbon-icons" ), description: __( 'Here, you will be able to manage your license (only in pro version).', "carbon-icons" ), side: "right", align: 'end' } },
			{ element: '#carbon-icons main > .bg-green-100', popover: { title: __( 'Icon bloc activation', "carbon-icons" ), description: __( 'Easily toggle the bloc visibility on the editor. Be careful tho, if you have already created some blocks and deactivate the icons, they won\'t work anymore.', "carbon-icons" ), side: "bottom", align: 'center' } },
			{ element: '#theme-toggle', popover: { title: __( 'Dark mode' ), description: __( 'Toggle the light/dark theme and choose the colors that suit you best.', "carbon-icons" ), side: "bottom", align: 'end' } },
			{ element: '#carbon-icons nav >section button:last-of-type', popover: { title: __( 'Save your changes', "carbon-icons" ), description: __( 'Don\'t forget to save data after every change on this page !', "carbon-icons" ), side: "bottom", align: 'end' } },
			{ popover: { title: __( "Congrats !", "carbon-icons" ), description: __( "You are now ready to get started with Carbon Icons, have fun !", "carbon-icons" ) } }
		]
	});

	useEffect(() => checkDirtiness(), [data]);

  useEffect(() => window.scrollTo(0, 0), [location]);

  useEffect(() => {
		apiFetch({ path: config.apiPath })
		.then((data) => {
			setStartState(data);
      setData({ type: 'set', data: data });
			if(!data.options.tourIsFinished) {
				driverObj.drive();
			}
		})
		.catch(error => {
			setIsErrored(error)
		});
  }, []);

  const handleSubmit = useCallback(( e, callback ) => {
		e && e.preventDefault();
    setLoading( true );
    const save = apiFetch({
      path: config.apiPath,
      method: 'POST',
      data: { ...data },
    }).then(() => {
			setStartState({ ...data });
      setData({ ...data });
      setLoading( false );
      setCanSave( false );
			callback && callback();
    });
		toast.promise(save, {
			pending: {
				render(){
					return __('Saving...', "carbon-icons")
				}
			},
			success: {
				render({data}){
					return __('Successfully saved !', "carbon-icons");
				}
			},
			error: {
				render({data}){
					return __('Error while saving', "carbon-icons");
				}
			}
		} );
  }, [data])

  function checkDirtiness() {
    if( JSON.stringify(startState) !== JSON.stringify(data) ) {
      setCanSave( true );
    } else {
      setCanSave( false );
    }
	}

	const replayAnimationTour = () => driverObj.drive();

  return  (
    <section class="flex flex-col bg-white dark:bg-black relative" style={{ minHeight: "calc(100vh - 32px)" }}>
			<Loader
				isErrored={isErrored}
				data={data}
				infoLabel={ __( "Info", "carbon-icons" ) }
				messageLabel={ __( "Oh snapp ! Something went wrong", "carbon-icons" ) }
				reloadLabel={ __( "Reload the page", "carbon-icons" ) }
				contactLabel={ __( "Contact us" ) }
			>
				<form class={`${isLoading && "opacity-50 pointer-events-none"} relative`} onSubmit={ handleSubmit }>
					<nav class="z-50 shadow-md border-b border-gray-200 dark:border-gray-700 dark:bg-blue-900 flex max-sm:flex-col gap-4 items-center max-md:flex-wrap justify-between sticky bg-white w-full top-8 z-10">
						<Menu links={links} currentPath={location}/>
						<section className="flex flex-wrap gap-2 max-md:mb-4 pl-2 md:justify-end">
							<Indicator
								validLabel={ __('Icons are active', "carbon-icons") }
								invalidLabel={ __('Icons are not active', "carbon-icons") }
								status={data?.options?.pluginActive}
							/>
							<Link className="flex gap-2 items-center" href="https://carbon-plugins.com/plugins/carbon-icons/" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 -ml-1"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
								{ __( "Unlock full experience with Carbon Icon Pro", "carbon-icons" ) }
							</Link>
							<ToggleTheme />
							<SaveButton
								canSave={canSave}
								isLoading={isLoading}
								saveLabel={ __( "Save", "carbon-icons" ) }
								savingLabel={ __( "Saving", "carbon-icons" ) }
							/>
						</section>
					</nav>
					<main class="p-4">
						<Routes>
							<Route exact path='/' element={
								<Dashboard
									data={data}
									setData={setData}
									replayAnimationTour={replayAnimationTour}
								/>
							} />
							<Route exact path='/license' element={
								<License
									data={ data }
									setData={ setData }
								/>
							} />
						</Routes>
					</main>
				</form>
			</Loader>

			<ToastContainer
				position="top-right"
				autoClose={10000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

      <Footer />
    </section>
  )
}

document.addEventListener( 'DOMContentLoaded', function() {
  const element = document.getElementById( config.appId );
  if( typeof element !== 'undefined' && element !== null ) {
		const root = createRoot(element);
    root.render(
			<StrictMode>
				<HashRouter basename="/">
					<Router/>
				</HashRouter>
			</StrictMode>,
			document.getElementById( config.appId )
		);
  }
} );
