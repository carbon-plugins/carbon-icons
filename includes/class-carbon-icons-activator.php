<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Cbn_Icns_Activator' ) ) :

	/**
	 * Fired during plugin activation.
	 *
	 * This class defines all code necessary to run during the plugin's activation,
	 * like checking if there is other instances
	 *
	 * @since     1.0.0
	 */
	class Cbn_Icns_Activator {

		/**
		 * Triggers all functions during the plugin activation
		 *
		 *
		 * @since   1.0.0
		 * @return	void
		 */
		public static function activate() {

			$plugin_to_check = 'carbon-icons-pro/carbon-icons.php';

			if ( is_multisite() && is_network_admin() ) {
				$active_plugins = (array) get_site_option( 'active_sitewide_plugins', array() );
				$active_plugins = array_keys( $active_plugins );
			} else {
				$active_plugins = (array) get_option( 'active_plugins', array() );
			}

			foreach ( $active_plugins as $plugin_basename ) {
				if ( $plugin_basename === $plugin_to_check ) {
					set_transient( 'cbn_icns_activation_error', true, 1 * HOUR_IN_SECONDS );
					deactivate_plugins( $plugin_to_check );
					return;
				}
			}

		}

		/**
		 * Shows an error notice if the pro version is detected
		 *
		 * @since   1.0.0
		 * @return 	void
		 */
		public static function display_activation_error_message() {

			if ( !get_transient( 'cbn_icns_activation_error' ) ) return;

			$message = __( "Carbon Icons and Carbon Icons Pro can't be activated at the same time. Carbon Icons Pro have been deactivated.", 'carbon-icons' );
			?>
				<div class="error notice is-dismissible">
					<p><?php echo esc_html( $message ); ?></p>
				</div>
			<?php

			delete_transient( 'cbn_icns_activation_error' );

		}

	}

endif;
