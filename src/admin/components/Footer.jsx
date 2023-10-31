export default function Footer() {
	return <footer className="bg-white dark:bg-blue-900 mt-auto">
		<div className="w-full p-4 md:flex md:items-center md:justify-between">
			<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Carbon Plugins</a>. All Rights Reserved.
		</span>
		<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
			<li className="mb-0">
				<a href="https://carbon-plugins.com/plugins/carbon-icons/" target="_blank" className="mr-4 hover:underline md:mr-6 hover:text-blue-500 dark:hover:text-white">Buy a license</a>
			</li>
			<li className="mb-0">
				<a href="https://carbon-plugins.com/support/" target="_blank" className="mr-4 hover:underline md:mr-6 hover:text-blue-500 dark:hover:text-white">Support</a>
			</li>
			<li className="mb-0">
				<a href="https://carbon-plugins.com/contact/" target="_blank" className="hover:underline md:mr-6 hover:text-blue-500 dark:hover:text-white">Contact us</a>
			</li>
			<li className="mb-0">
				<a href="https://wordpress.org/support/plugin/carbon-icons/reviews/#new-post" target="_blank" className="mr-4 hover:underline hover:text-blue-500 dark:hover:text-white">Review</a>
			</li>
		</ul>
		</div>
	</footer>
}
