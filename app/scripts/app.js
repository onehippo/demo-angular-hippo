angular.module('app', [])
	
	/**
	* Application configuration
	*/
	.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider)
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

		// prevent preflight request for cross-domain Ajax calls
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}])

	.constant('apiPrefix', 'http://www.demo.onehippo.com/restapi')

	.run(['$location', '$rootScope', 'MenuService', function ($location, $rootScope, MenuService)
	{
		// menu
		$rootScope.menuitems = MenuService.items;
	}]);
