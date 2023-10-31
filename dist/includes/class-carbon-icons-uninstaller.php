<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Cbn_Icns_Uninstaller' ) ) :

	class Cbn_Icns_Uninstaller {

		/**
		 * Delete all the data when the plugin is removed from WordPress
		 *
		 * @since  1.0.0
	 	 * @return void
		 */
		public static function uninstall() {
			if( !get_option( CBN_ICNS_NAME . '_options' ) ) return;
			if( !get_option( CBN_ICNS_NAME . '_options' )["deleteAllOnRemove"] ) return;

			if(get_option( CBN_ICNS_NAME . '_options' )){
				delete_option( CBN_ICNS_NAME . '_options' );
			}
		}

	}

endif;
