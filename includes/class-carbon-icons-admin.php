<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Cbn_Icns_Admin' ) ) :

	class Cbn_Icns_Admin {

		/**
		 * Initialize the class and set its properties.
		 *
		 * @since    1.0.0
		 * @param    string $plugin_slug - The slug of this plugin.
		 * @param    string $plugin_name - The name of this plugin.
		 * @param    string $version - The version of this plugin.
		 */
		public function __construct( $plugin_slug, $plugin_name, $version ) {
			$this->plugin_slug = $plugin_slug;
			$this->plugin_name = $plugin_name;
			$this->version     = $version;
		}

		/**
		 * Add admin menu pages.
		 *
		 * @since    1.0.0
		 * @return void
		 */
		public function create_admin_menu() {
			if( !menu_page_url( 'carbon-plugins', false ) ) {
				add_menu_page(
					__( 'Carbon Plugins', 'carbon-icons' ),
					__( 'Carbon Plugins', 'carbon-icons' ),
					'manage_options',
					'carbon-plugins',
					array( $this, 'add_carbon_page' ),
					"none"
				);
			}

			add_submenu_page(
				'carbon-plugins',
				__( 'Carbon Icons', 'carbon-icons' ),
				__( 'Carbon Icons', 'carbon-icons' ),
				'manage_options',
				$this->plugin_slug,
				array( $this, 'add_root' )
			);
		}

		/**
		 * Add admin root div for react.
		 *
		 * @since    1.0.0
		 * @return void
		 */
		public function add_root() {
			echo '<section id="carbon-icons"></section>';
		}

		public function add_carbon_page() {
			require_once CBN_ICNS_PATH . 'admin/carbon-icons-dashboard.php';
		}

		/**
		 * Register the CSS/JavaScript Resources for the admin area.
		 *
		 * @since    1.0.0
		 * @return void
		 */
		public function enqueue_resources() {
			$deps_file = CBN_ICNS_PATH . 'src/admin/index.asset.php';
			$dependencies = ['wp-api'];
			$version = $this->version;
			if ( file_exists( $deps_file ) ) {
				$deps_file  = require( $deps_file );
				$dependencies = $deps_file['dependencies'];
				$version    = $deps_file['version'];
			}

			global $pagenow;
			if (( $pagenow === 'admin.php' ) && (sanitize_text_field($_GET['page']) === $this->plugin_slug )) {
				wp_enqueue_style( $this->plugin_slug, CBN_ICNS_URL . 'src/admin/style-index.css', array('wp-components'), $version );
				wp_enqueue_script( $this->plugin_slug, CBN_ICNS_URL . 'src/admin/index.js', $dependencies, $version, false );
			}
			if (( $pagenow === 'admin.php' ) && (sanitize_text_field($_GET['page']) === "carbon-plugins" )) {
				wp_enqueue_style( $this->plugin_slug . '-dashboard', CBN_ICNS_URL . 'admin/assets/carbon-icons-dashboard.min.css', array(), $version );
			}
			if (is_admin()) {
				wp_enqueue_style( $this->plugin_slug . '-admin', CBN_ICNS_URL . 'admin/assets/carbon-icons-admin.min.css', array(), $version );
				if( $pagenow === "plugins.php" ) {
					wp_enqueue_script( $this->plugin_slug . '-admin', CBN_ICNS_URL . 'admin/assets/carbon-icons-admin.min.js', array('jquery'), null, true);
				}
				if(cbn_icns_is_gutenberg()) {
					wp_enqueue_style( $this->plugin_slug . '-gutenberg', CBN_ICNS_URL . 'admin/assets/carbon-icons-gutenberg.min.css', array(), $version );
				}
			}


		}

	}

endif;
