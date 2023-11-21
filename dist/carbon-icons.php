<?php

/**
 * @package           Carbon Icons
 * @author            Carbon Plugins
 * @link              https://carbon-plugins.com/
 * @copyright         2023 Carbon Plugins
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       Carbon Icons
 * Plugin URI:    		https://carbon-plugins.com/carbon-icons/
 * Description:				Add a powerful icon picker to your Gutenberg editor
 * Version:           1.0.1
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Author:            Carbon Plugins
 * Author URI:        https://carbon-plugins.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       carbon-icons
 * Domain Path:       /languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Checks if the pro version is already activated
 *
 * @return void
 */
function cbn_icns_activate_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-carbon-icons-activator.php';
	Cbn_Icns_Activator::activate();
}
register_activation_hook( __FILE__, 'cbn_icns_activate_plugin' );

add_action( 'pre_current_active_plugins', function() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-carbon-icons-activator.php';
	Cbn_Icns_Activator::display_activation_error_message();
});

if( ! class_exists('Carbon_Icons') ) {

	class Carbon_Icons {

		protected $loader;
		public $plugin_name  	= 'carbon_icons';
		public $plugin_slug 	= 'carbon-icons';
		public $version 			= '1.0.0';
		public $settings 			= array();

		function __construct() {
			// Do nothing.
		}

		function init() {

			$this->define( 'CBN_ICNS_NAME', 	  $this->plugin_name );
			$this->define( 'CBN_ICNS_SLUG', 		$this->plugin_slug );
			$this->define( 'CBN_ICNS_VERSION', 	$this->version );
			$this->define( 'CBN_ICNS_BASENAME', plugin_basename( __FILE__ ) );
			$this->define( 'CBN_ICNS_PATH',			plugin_dir_path( __FILE__ ) );
			$this->define( 'CBN_ICNS_URL', 			plugin_dir_url( __FILE__ ) );

			$this->settings = array(
				"plugin_name" 		=> CBN_ICNS_NAME,
				"plugin_basename" => CBN_ICNS_BASENAME,
				"plugin_slug" 		=> CBN_ICNS_SLUG,
				"plugin_version"	=> CBN_ICNS_VERSION
			);

			include_once( CBN_ICNS_PATH . 'includes/carbon-icons-helpers.php');

			cbn_icns_include( 'includes/class-carbon-icons-activator.php' );
			cbn_icns_include( 'includes/class-carbon-icons-loader.php' );
			cbn_icns_include( 'includes/class-carbon-icons-i18n.php' );
			cbn_icns_include( 'includes/class-carbon-icons-register.php' );
			cbn_icns_include( 'includes/class-carbon-icons-rest-route.php' );
			cbn_icns_include( 'includes/class-carbon-icons-admin.php' );

			$this->loader = new Cbn_Icns_Loader();

			$this->register_rest_route();
			$this->register_admin_hooks();
			$this->register_block_hooks();
			$this->translate();

			$this->loader->run();

		}

		/**
		 * Get a setting from the Cbn_Icns class
		 *
		 * @since  1.0.0
		 * @param  string $setting
		 * @return mixed
		 */
		public function get( $setting ) {
			if ( !$this->settings[$setting] ) return;
			return $this->settings[$setting];
		}

		/**
		 * Define a global variable
		 *
		 * @since  1.0.0
		 * @param  string $name
		 * @param  mixed $value
		 * @return void
		 */
		public function define( $name, $value = true ) {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		/**
		 * Register rest routes for data handling
		 *
		 * @since  1.0.0
		 * @return void
		 */
		private function register_rest_route() {
			$rest_api 		= new Cbn_Icns_Rest_Route( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'rest_api_init', $rest_api, 'create_rest_routes' );
		}

		/**
		 * Creates and sets up various hooks for the admin menu, admin
		 * scripts, translations, and REST API routes.
		*
		* @since 1.0.0
		* @return void
		*/
		private function register_admin_hooks() {
			$plugin_admin = new Cbn_Icns_Admin( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'admin_menu', 						$plugin_admin, 'create_admin_menu' );
			$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_resources' );
		}


		/**
		 * Creates and sets up various hooks for the admin menu, admin
		 * scripts, translations, and REST API routes.
		*
		* @since 1.0.0
		* @return void
		*/
		private function translate() {
			$i18n = new Cbn_Icns_i18n( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'init', 									$i18n, 'set_locale' );
			$this->loader->add_action( 'admin_enqueue_scripts', $i18n, 'set_tranlsations', 100 );
		}

		/**
		 * initializes the Cbn_Icns_Register class and adds two actions to load
		 * blocks and plugins.

		* @since 1.0.0
		* @return void
		*/
		private function register_block_hooks() {
			$this->plugin_register = new Cbn_Icns_Register( $this->get('plugin_slug'), $this->get('plugin_name'), $this->get('plugin_version') );

			$this->loader->add_action( 'init', 										$this->plugin_register, 'load_blocks' );
			$this->loader->add_action( 'admin_enqueue_scripts', 	$this->plugin_register, 'load_plugins' );
			$this->loader->add_action( 'block_categories_all', 		$this->plugin_register, 'define_blocks_categorie' );
		}

	}

	/**
	 * Deletes the Carbon Icons plugin data when the plugin is removed
	 *
	 * @since  1.0.0
	 * @return void
	 */
	function cbn_icns_uninstall_plugin() {
		require_once CBN_ICNS_PATH . 'includes/class-carbon-icons-uninstaller.php';
		Cbn_Icns_Uninstaller::uninstall();
	}
	register_uninstall_hook( __FILE__, 'cbn_icns_uninstall_plugin' );

	/**
	 * Begins execution of the plugin.
	 *
	 * Since everything within the plugin is registered via hooks,
	 * then kicking off the plugin from this point in the file does
	 * not affect the page life cycle.
	 *
	 * @since   1.0.0
	 * @param		void
	 * @return	Carbon_Icons
	 */
	function cbn_icns_run() {
		global $cbn_icns;

		// Instantiate only once.
		if ( ! isset( $cbn_icns ) ) {
			$cbn_icns = new Carbon_Icons();
			$cbn_icns->init();
		}
	}

	cbn_icns_run(); // Run the plugin

}
