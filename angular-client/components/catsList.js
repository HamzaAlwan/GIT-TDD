var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
var getCats = function() {
	// console.log("here:",$scope)
	// TODO: Your code here
	// $http({
	// 	method:'GET',
	// 	url:'/cats'
	// }).then(function (response){
	// 		$scope.jsondata = response.data;
	// 		console.log("status:" + response.status);
	// 	})
};
getCats();

$scope.addCats=function(data,url) {
	let catName = $scope.$$watchers[0].last;
	let ownerEmail = $scope.$$watchers[1].last;
	let image = $scope.$$watchers[2].last;
	let message = $scope.$$watchers[3].last;

	var data = {
 			catName: $scope.catName, 
			 ownerEmail: $scope.ownerEmail, 
			 image: $scope.image,
			 message: $scope.message

 		};
 		var requestData = {
			method: 'POST',
			url: '/cats',
			data: data
		};
      console.log("lolo",requestData)
      $http(requestData).then(function () {
			console.log('success')
		},function () {
			console.log('error')
		});	
 		//$http.post('/cats',data);

 		//$window.location.reload();

	// $http({
	// 		method: 'POST',
	// 		url: '/cats',
	// 		data:$scope,
	// 		headers:{'Content-Type': 'application/x-www-form-urlencoded'}
	// 		//console.log(data)

	// 	}).then(function(data){
 //             catName=$scope.catName; 
	// 		 ownerEmail=$scope.ownerEmail; 
	// 		 image=$scope.image; 
	// 		 message=$scope.message;
	// 	})

	// $http.post('/cats', $scope.catName ,$scope.message).then(
 //  function(response) {
 //    console.log("Success!");
 //  },

		// var requestData = {
		// 	method: 'POST',
		// 	url: '/cats',
		// 	data: data
		// };
		// $http(requestData).then(function () {
		// 	console.log('success')
		// },function () {
		// 	console.log('error')
		// });	


}

});
