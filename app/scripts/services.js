angular.module('app')

	.service('Products', ['$http', '$q', 'apiPrefix', function($http, $q, apiPrefix)
	{
		return {
			items: [],
			sortOptions:
			[{
				name: 'Rating',
				command: 'hippogogreen:rating',
				property: 'rating'
			},
			{
				name: 'Price',
				command: 'hippogogreen:price',
				property: 'price'
			}],
			orderOptions:
			[{
				name: 'asc',
				command: 'ascending',
				reverse: true
			},
			{
				name: 'desc',
				command: 'descending',
				reverse: false
			}],

			/**
			* Fetch all products
			*/
			fetchAll: function (sortOption, orderOption)
			{
				// TODO: remove the use of futures
				var deferred = $q.defer();
				var url = apiPrefix + '/topproducts?_type=json&sortby=' + encodeURIComponent(sortOption.command) + '&sortdir=' + orderOption.command + '&max=9999999';//&FORCE_CLIENT_HOST=true';

	            $http.get( url ).success(function (data) {
	                deferred.resolve(data);
	            }).error(function (error) {
	                deferred.reject('An error occured while fetching all products');
	            });

            	return deferred.promise;
			},

			/**
			* Fetch details for one product
			*/
			fetchOne: function(productLink)
			{
				var deferred = $q.defer();
				var url = productLink + '?_type=json';
				$http.get(url).success(function(data)
				{
					deferred.resolve(data);
				});

				return deferred.promise;
			}
		}

	}])

	.service('MenuService', [function () {
		var menuService = {};

		menuService.items = [{
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

		return menuService;
	}]);
