angular.module('app')

	/**
	* Products controller
	*/
	.controller('ProductsController', ['$scope', '$http', 'Products', function ($scope, $http, Products)
	{
		// initial data
		$scope.pagename = 'products';
		$scope.sortOptions = Products.sortOptions;
		$scope.sortOption = Products.sortOptions[0];

		$scope.orderOptions = Products.orderOptions;
		$scope.orderOption = Products.orderOptions[0];

		// fetch products
		fetchAllProducts($scope.sortOption, $scope.orderOption);
		
		$scope.showProduct = function (product)
		{
			if (product['links']) {
				Products.fetchOne(product['links'][0]['Link'].href).then(function (response) {
                    if (response && (!response.images || response.images.length < 1)) {
                        response.images = ['dummy.png'];
                    }
					$scope.activeProduct = response;
				});
			}
		}
		
		$scope.orderToggle = function ()
		{
			$scope.orderOption = ($scope.orderOption == $scope.orderOptions[0]) ? $scope.orderOptions[1] : $scope.orderOptions[0];
		}
		
		$scope.$watch('sortOption', function (option)
		{
			fetchAllProducts($scope.sortOption, $scope.orderOption);
		});

		$scope.$watch('orderOption', function (option)
		{
			fetchAllProducts($scope.sortOption, $scope.orderOption);
		});

		function fetchAllProducts(sortOption, orderOption) {
			Products.fetchAll(sortOption, orderOption).then(function (response) {
				$scope.products = response;
			});
		}
	}]);
