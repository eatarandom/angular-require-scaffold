define([

  './app'

], function (app) {

  log('routes.js');

  // app is the angular application object
  return app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

      .when('/home',

        {

          templateUrl: '/js/app/partials/home.html',

          controller: 'homeController'

        })

      .otherwise(

        {

          redirectTo: '/home'

        });
    
  }]);

});