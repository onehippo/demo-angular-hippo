angular.module('app', [])
	
	/**
	* Application configuration
	*/
	.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider)
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
		$rootScope.location = $location;
		
		$rootScope.menuitems = MenuService.items;
	}]);
