<?php
namespace aThemesAddons;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

?>

<div class="athemes-addons-modules-box">

	<?php
	do_action( 'athemes_addons_pro_admin_settings_before' );

	if ( defined('ATHEMES_AFE_PRO_DIR') ) {
		Admin_Settings::create( array(
			'title'  => __( 'MailChimp API Key', 'athemes-addons-for-elementor-lite' ),
			'fields' => array(
				array(
					'id'      => 'aafe_mailchimp_api_key',
					'type'    => 'text',
					'title'   => '',
					'default' => '',
				),
			),
		) );
	
		Admin_Settings::create( array(
			'title'  => __( 'Google Maps API Key', 'athemes-addons-for-elementor-lite' ),
			'fields' => array(
				array(
					'id'      => 'aafe_gmaps_api_key',
					'type'    => 'text',
					'title'   => '',
					'default' => '',
				),
			),
		) );
	}

	Admin_Settings::create( array(
		'title'     => __( 'Duplicator Post Types', 'athemes-addons-for-elementor-lite' ),
		'subtitle'  => __( 'Select the post types you want enable the duplicator for.', 'athemes-addons-for-elementor-lite' ),
		'fields'    => array(
			array(
				'id'      => 'aafe_duplicator_post_types',
				'type'    => 'multicheckbox',
				'default' => array( 'all' ),
				'options' => athemes_addons_get_post_types(),
			),
		),
	) );

	Admin_Settings::save_button();
	?>

</div>