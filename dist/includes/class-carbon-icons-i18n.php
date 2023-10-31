<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Cbn_Icns_i18n' ) ) :

	class Cbn_Icns_i18n {

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
		 * Sets the locale for the Carbon_Icons plugin
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function set_locale() {
			load_plugin_textdomain( $this->plugin_slug, false, dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages' );
		}

		/**
		 * Sets translations for the Carbon_Icons plugin js scripts
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function set_tranlsations() {
			// Admin page translation
			wp_set_script_translations( $this->plugin_slug, $this->plugin_slug, CBN_ICNS_PATH . 'languages/' );
			// Block translation
			wp_set_script_translations( "carbon-blocks-icons-editor-script", $this->plugin_slug, CBN_ICNS_PATH . 'languages/' );
		}

	}

endif;
