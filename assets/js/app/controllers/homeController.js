define([
	'./module',
	'../../helpers/say'
], function (module, say) {

	log('controllers/homeController');

	module.controller('homeController', 
		
		function ($scope) {
		
			$scope.title = 'Home';

			// not that we would be example of using an external js file
			say('hello from homeController');

		}
	);

});