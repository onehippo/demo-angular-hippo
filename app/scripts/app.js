/**
* Application
*/
// TODO: remove global variable app
var app = angular.module('app', []);

// configuration
app.config(['$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider)
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
}]);

.constant('apiPrefix', 'http://www.demo.test.onehippo.com/restapi')

app.run(['$location', '$rootScope', function ($location, $rootScope)
{
	// menu
	$rootScope.location = $location;

	// TODO: move these to a menu service
	$rootScope.menuitems = [{
			text: 'Home',
			url: 'home'
		},{
			text: 'Products',
			url: 'products',
		},{
			text: 'News & Events',
			url: 'news-and-events'
		},{
			text: 'Contacts',
			url: 'contacts'
		}
	];
}]);
