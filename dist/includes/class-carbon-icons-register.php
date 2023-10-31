<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Cbn_Icns_Register' ) ) :

	class Cbn_Icns_Register {

		/**
		 * Checks if blocks are already registered, and load them if not
		 *
	 	 * @since  1.0.0
		 * @return void
		 */
		public function load_blocks() {
			if( !get_option( CBN_ICNS_NAME . '_options' ) ) return;
			if( !get_option( CBN_ICNS_NAME . '_options' )["pluginActive"] ) return;
			if( WP_Block_Type_Registry::get_instance()->is_registered( 'carbon-blocks/icons' ) ) return;

			$path = CBN_ICNS_PATH . 'src/blocks/';

			register_block_type( $path . 'icons' );
		}

		/**
		 * Checks if plugins are already registered, and load them if not
		 *
	 	 * @since  1.0.0
		 * @return void
		 */
		public function load_plugins() {
			if( !get_option( CBN_ICNS_NAME . '_options' ) ) return;
			if( !get_option( CBN_ICNS_NAME . '_options' )["pluginActive"] ) return;
			if( wp_script_is('carbon-auto-recovery', 'registered') ) return;

			$index_js     = 'src/plugins/auto-recovery/index.js';
			$script_asset = require( dirname(__DIR__, 1) . '/src/plugins/auto-recovery/index.asset.php' );
			wp_enqueue_script( 'carbon-auto-recovery', plugins_url( $index_js, __DIR__ ), $script_asset['dependencies'], $script_asset['version'] );

		}

		/**
		 * Checks if the block category is defined, otherwise it register and creates it.
		 *
		 * @since  1.0.0
		 * @return void
		 */
		public function define_blocks_categorie( $categories ) {
			$menuAlreadyExists = array_search("carbon-blocks", array_column($categories, 'slug'));
			if(is_bool($menuAlreadyExists) && !!$menuAlreadyExists) return $categories;

			return array_merge(
				[
					[
						'slug'  => 'carbon-blocks',
						'title' => __( 'Carbon Blocks', 'carbon-blocks' ),
					]
				],
				$categories
			);
		}

	}

endif;
