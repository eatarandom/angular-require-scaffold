define([
	'./module',
	'../../helpers/say',
	'components/catalog/index'
], function (module, say, Catalog) {

	log('controllers/homeController', Catalog);

	module.controller('homeController', 
		
		function ($scope) {
		
			$scope.title = 'Home';

			// not that we would but an example of using an external js file
			say('hello from homeController');

		}
	);

});