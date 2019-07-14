<?php

// Require the composer autoload for getting conflict-free access to enqueue
require_once __DIR__ . '/vendor/autoload.php';

add_action( 'wp_enqueue_scripts', 'theme_add_scripts');

function theme_add_scripts() {
    $enqueue = new \WPackio\Enqueue( 'reactTest', 'dist', '1.0.0', 'theme', false );
    $enqueue->enqueue( 'app', 'main', [] );
}
