var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
var getCats = function() {
	// TODO: Your code here
	$http({
		method:'GET',
		url:'/cats'
	}).then(function (response){
			$scope.jsondata = response.data;
			console.log("status:" + response.status);
		})

};
getCats();

$scope.addCats=function() {
// TODO: Your code here


}

});
