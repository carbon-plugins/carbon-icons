import { __ } from '@wordpress/i18n';
import { Column, Row, Card, Container, PageTitle, Header, Link } from '@carbon/components';

export default function License() {

	return <>
		<PageTitle>{ __('Licence', "carbon-icons" ) }</PageTitle>
		<Container>
			<Column>
				<article className="w-full overflow-hidden flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-blue-900 dark:border-gray-700">
					<Header>
						{ __( 'Manage license', "carbon-icons" ) }
					</Header>
					<p className='text-gray-500 dark:text-gray-400'>{__("You are currently using the free version of Carbon Icons. You can choose a plan below to start taking advantage of thousands new icons, premium support and much more !", "carbon-icons") }</p>
				</article>
				<Row className="items-stretch">
					<Card title={ __( 'Why not buy a yearly license ...', "carbon-icons" ) } desc={ __( 'Unlock the full Carbon Plugins experience: thousands of icons, multiple libraries, all futur updates and premium support.', "carbon-icons" ) }>
						<section className="flex flex-1 flex-wrap p-4 gap-4">
							<section className="flex flex-wrap gap-4 sm:w-8/12" style={{ minWidth: "200px" }}>
								<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to WordPress icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Dashicon library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Classic Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to 7300+ Advanced Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Animated library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Logo library", "carbon-icons" ) }</span>
									</li>
								</ul>
								<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Flag library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__("License for 1 website", "carbon-icons")}</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Futur updates for', "carbon-icons")} <span className="font-bold">{ __('12 months', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Premium support for', "carbon-icons")} <span className="font-bold">{ __('12 months', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
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
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to WordPress icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Dashicon library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Classic Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to 7300+ Advanced Icons library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Animated library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Logo library", "carbon-icons" ) }</span>
									</li>
								</ul>
								<ul role="list" className="mb-8 space-y-4 text-left dark:text-gray-400">
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{ __( "Access to Flag library", "carbon-icons" ) }</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__("License for 1 website", "carbon-icons")}</span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Futur updates for', "carbon-icons")} <span className="font-bold">{ __('ever', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
										<svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
										<span>{__('Premium support for', "carbon-icons")} <span className="font-bold">{ __('ever', "carbon-icons") }</span></span>
									</li>
									<li className="flex items-center space-x-3 dark:text-white">
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
