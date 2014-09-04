define([
  './controllers/index',
  './services/index',
  './directives/index',
  './filters/index'
], function (controllers, services, directives, filters) {

  log('app.js');

  // the actual angular application module, passing
  // in all other modules needed for the application
  return angular.module('app', [
    'ngRoute',
    'app.controllers',
    'Catalog'
  ]);
});