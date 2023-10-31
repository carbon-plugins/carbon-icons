<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Cbn_Icns_Rest_Route' ) ) :

	class Cbn_Icns_Rest_Route {

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
			$this->response 		= array(
				'options' => get_option( $this->plugin_name . '_options' ) ? get_option( $this->plugin_name . '_options' ) : array(
					"pluginActive"			=> true,
					"deleteAllOnRemove" => false,
					"tourIsFinished"		=> false,
				)
			);
		}

	/**
	 * The function `create_rest_routes` registers two REST routes for the `/icons` endpoint in the
	 * `carbon/v1` namespace, one for GET requests and one for POST requests.
	 */
		public function create_rest_routes() {
			register_rest_route( 'carbon/v1', '/icons', [
				'methods' => 'GET',
				'callback' => [ $this, 'get_settings' ],
				'permission_callback' => [ $this, 'get_settings_permission' ]
			] );
			register_rest_route( 'carbon/v1', '/icons', [
				'methods' => 'POST',
				'callback' => [ $this, 'save_settings' ],
				'permission_callback' => [ $this, 'save_settings_permission' ]
			] );
		}

	/**
	 * The function "get_settings" returns a response after including and returning the contents of a local
	 * file.
	 *
	 * @return the response wrapped in a rest_ensure_response() function.
	 */
		public function get_settings() {
			function cbn_icns_get_local_file_contents( $file_path ) {
				ob_start();
				include $file_path;
				$contents = ob_get_clean();
				return $contents;
			}
			return rest_ensure_response( $this->response );
		}

	/**
	 * The function "get_settings_permission" returns true.
	 *
	 * @return true
	 */
		public function get_settings_permission() {
			return true;
		}

	/**
	 * The function saves settings and license information and returns a success response.
	 *
	 * @param req The parameter `` is an array that contains the data to be saved. It is expected to
	 * have two keys: `options` and `license`. The value of `options` is the settings/options data that
	 * needs to be saved, and the value of `license` is the license data that
	 *
	 * @return a response with the value 'success'.
	 */
		public function save_settings( $req ) {
			update_option( $this->plugin_name . '_options', $req['options'] );
			return rest_ensure_response( 'success' );
		}

	/**
	 * The function "define_settings" updates the options and license values in the plugin's settings.
	 */
		public function define_settings() {
			update_option( $this->plugin_name . '_options', $this->response['options'] );
		}

	/**
	 * The function checks if the current user has the permission to publish posts.
	 *
	 * @return the result of the current_user_can() function, which is a boolean value indicating whether
	 * the current user has the 'publish_posts' capability.
	 */
		public function save_settings_permission() {
			return current_user_can( 'publish_posts' );
		}
	}

endif;
