<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('principal', 'Home::index');
$routes->get('somos', 'Home::somos');
$routes->get('productos', 'Home::productos');
$routes->get('contacto', 'Home::contacto');