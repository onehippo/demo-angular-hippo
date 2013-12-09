/**
* Products controller
*/
app.controller('ProductsController', ['$scope', '$http', 'Products', '$location', function ($scope, $http, Products, $location)
{
	// initial data
	$scope.pagename = 'products';
	$scope.sortOptions = Products.sortOptions;
	$scope.sortOption = Products.sortOptions[0];

	$scope.orderOptions = Products.orderOptions;
	$scope.orderOption = Products.orderOptions[0];

	// fetch products
	Products.fetchAll($scope.sortOption, $scope.orderOption);
	$scope.products = Products.items;
	$scope.activeProduct = Products.items[0];

	/**
	* Set active product
	*/
	$scope.productDetail = function (product)
	{
		$scope.activeProduct = product;
	}

	/**
	* Toggle the sorting order
	*/
	$scope.orderToggle = function ()
	{
		$scope.orderOption = ($scope.orderOption == $scope.orderOptions[0]) ? $scope.orderOptions[1] : $scope.orderOptions[0];
	}
	
	$scope.$watch('sortOption', function (option)
	{
		Products.fetchAll($scope.sortOption, $scope.orderOption);
	});

	$scope.$watch('orderOption', function (option)
	{
		Products.fetchAll($scope.sortOption, $scope.orderOption);
	});
}]);
