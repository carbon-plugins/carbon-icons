import { useCallback } from 'react';
import { __ } from '@wordpress/i18n';

import { Activator, Column, Toggle, Row, Card, Container, PageTitle, Link, Button, Header } from '@carbon/components';

export default function Dashboard({ data, setData, replayAnimationTour }) {

	const togglePlugin = useCallback(() => {
    setData({ type: "toggle_activation" });
  }, [data]);

	const toggleDeleteAllOnRemove = useCallback(() => {
    setData({ type: "toggle_delete_all_on_remove" });
  }, [data]);

  return <>
    <PageTitle>{ __( 'Dashboard', "carbon-icons" ) }</PageTitle>

		<Activator
			togglePlugin={ togglePlugin }
			isActive={ data?.options?.pluginActive }
			activeLabel={ __( "Icons are curently visible in the block editor", "carbon-icons" ) }
			inactiveLabel={ __( "Icons are not visible in the block editor", "carbon-icons" ) }
		/>

    <Container>
			<Column>
				<Row className="items-stretch">
					<Card title={ __( "Settings", "carbon-icons" ) } className="!h-auto">
						<Toggle label={ __( "Delete all data on plugin remove", "carbon-icons" ) } isChecked={ data?.options?.deleteAllOnRemove } onChange={ toggleDeleteAllOnRemove } />
						<Button onClick={ replayAnimationTour } className="mt-4" style="outline">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 -ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
							{ __( "Replay animation tour", "carbon-icons" ) }
						</Button>
					</Card>
					<Card title={ __( 'Found a bug ? Need help ?', "carbon-icons" ) } desc={ __( 'Please contact us if you found a bug or if you have any question.', "carbon-icons" ) } className="!h-auto">
						<Link style="outline" href="https://carbon-plugins.com/support/" target="_blank" className="mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 -ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" /></svg>
							{ __( 'Help with my license key', "carbon-icons" ) }
						</Link>
						<Link style="outline" href="https://carbon-plugins.com/support/" target="_blank" className="mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 -ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" /></svg>
							{ __( 'Bug with the plugin', "carbon-icons" ) }
						</Link>
						<Link style="outline" href="https://carbon-plugins.com/contact/" target="_blank" className="mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 -ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
							{ __( 'Other question', "carbon-icons" ) }
						</Link>
					</Card>
					<Card title={ __( 'Leave us a review !', "carbon-icons" ) } desc={ __( 'Are you happy with our plugin ?', "carbon-icons" ) } className="!h-auto">
						<Link style="outline" href="https://wordpress.org/support/plugin/carbon-icons/reviews/#new-post" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 -ml-1"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
							{ __( 'Leave a review', "carbon-icons" ) }
						</Link>
						<Header className="mt-4">
							{ __( 'The community', "carbon-icons" ) }
						</Header>
						<p className='text-gray-500 dark:text-gray-400 mb-4'>{ __("Find community help with our support threads!", "carbon-icons") }</p>
						<Link style="outline" href="https://wordpress.org/support/plugin/carbon-icons/" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-2 -ml-1"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
							{ __( 'Read the threads', "carbon-icons" ) }
						</Link>
					</Card>
				</Row>
				<Row className="items-stretch">
					<Card title={ __( 'Why not buy a yearly license ...', "carbon-icons" ) } desc={ __( 'Unlock the full Carbon Plugins experience: thousands of icons, multiple libraries, all futur updates and premium support.', "carbon-icons" ) }>
						<section className="flex flex-1 flex-wrap p-4 gap-4">
							<section className="flex flex-wrap gap-4 sm:w-8/12" style={{ minWidth: "200px" }}>
								<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to WordPress icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Dashicon library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Classic Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to 7300+ Advanced Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Animated library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Logo library", "carbon-icons" ) }</span>
									</li>
								</ul>
								<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Flag library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__("License for 1 website", "carbon-icons")}</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Futur updates for', "carbon-icons")} <span className="font-bold">{ __('12 months', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Premium support for', "carbon-icons")} <span className="font-bold">{ __('12 months', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Online chat access', "carbon-icons")}</span>
									</li>
								</ul>
							</section>
							<section className="flex flex-1 flex-col items-center justify-start" style={{ minWidth: "200px" }}>
								<div className="flex justify-center items-baseline mb-4 dark:text-white">
									<span className="mr-2 text-5xl md:text-6xl font-extrabold">{ __( '$19', "carbon-icons" ) }</span>
									<span className="text-gray-500 dark:text-gray-400 dark:text-gray-400">/{ __( 'year', "carbon-icons" ) }</span>
								</div>
								<section className='flex flex-wrap gap-4 w-full'>
									<Link href='https://shop.carbon-plugins.com/?add-to-cart=103&quantity=1' target="_blank" className="flex-1">
										<svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
										{ __( 'Buy now', "carbon-icons" ) }
									</Link>
									<Link style="outline" href='https://carbon-plugins.com/plugins/carbon-icons/' target="_blank" className="flex-1">
										<svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
										{ __( 'Learn more', "carbon-icons" ) }
									</Link>
								</section>
							</section>
						</section>
					</Card>
					<Card title={ __( '... or a lifetime license ?', "carbon-icons" ) } desc={ __( 'Save more by buying a lifetime license and get full content, plugin updates and support, for ever.', "carbon-icons" ) } className="!h-auto">
					<section className="flex flex-1 flex-wrap p-4 gap-4">
							<section className="flex flex-wrap gap-4 sm:w-8/12" style={{ minWidth: "200px" }}>
								<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to WordPress icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Dashicon library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Classic Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to 7300+ Advanced Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Animated library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Logo library", "carbon-icons" ) }</span>
									</li>
								</ul>
								<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Flag library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__("License for 1 website", "carbon-icons")}</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Futur updates for', "carbon-icons")} <span className="font-bold">{ __('ever', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Premium support for', "carbon-icons")} <span className="font-bold">{ __('ever', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Online chat access', "carbon-icons")}</span>
									</li>
								</ul>
							</section>
							<section className="flex flex-1 flex-col items-center justify-start" style={{ minWidth: "200px" }}>
								<div className="flex justify-center items-baseline mb-4 dark:text-white">
									<span className="mr-2 text-5xl md:text-6xl font-extrabold">{ __( '$89', "carbon-icons" ) }</span>
									<span className="text-gray-500 dark:text-gray-400 dark:text-gray-400">{ __( 'once', "carbon-icons" ) }</span>
								</div>
								<section className='flex flex-wrap gap-4 w-full'>
									<Link href='https://shop.carbon-plugins.com/?add-to-cart=108&quantity=1' target="_blank" className="flex-1">
										<svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
										{ __( 'Buy now', "carbon-icons" ) }
									</Link>
									<Link style="outline" href='https://carbon-plugins.com/plugins/carbon-icons/' target="_blank" className="flex-1">
										<svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
										{ __( 'Learn more', "carbon-icons" ) }
									</Link>
								</section>
							</section>
						</section>
					</Card>
				</Row>
			</Column>
		</Container>
  </>
}
