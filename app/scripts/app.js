angular.module('app', [])
	
	/**
	* Application configuration
	*/
	.config(['$routeProvider', function($routeProvider)
	{
		// product overview
		$routeProvider
		.when('/products', {
			templateUrl: 'views/products.html',
			controller: 'ProductsController'
		})
		
		// default
		.otherwise({
			redirectTo: '/products'
		});
	}])

	.constant('apiPrefix', 'http://www.demo.test.onehippo.com/restapi')

	.run(['$location', '$rootScope', 'MenuService', function ($location, $rootScope, MenuService)
	{
		// menu
		$rootScope.menuitems = MenuService.items;
	}]);
