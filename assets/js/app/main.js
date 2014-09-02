require.config({
	
	paths: {
		
		// don't think we have to include this
		'jquery': '../../components/jquery/jquery.min',

		'angular': '../../components/angular/angular',

		'ngRoute': '../../components/angular-route/angular-route.min',

		// example of a including a raw javascript file
		'log': '../helpers/log',

		'app': 'app'
	
	},

	shim: {

		'ngRoute': {
			
			deps: ['angular']
		
		},

		'app': {

			deps: ['jquery', 'angular', 'ngRoute', 'log']

		}

	}

});

define(['jquery', 'routes'], function($,routes) {

	log('app kickoff');

	angular.bootstrap(document, ['app']);

	

});