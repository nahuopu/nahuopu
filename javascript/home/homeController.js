app.controller("homeCtrl",["$scope","homeServices",function($scope,homeServices){
	console.log("homeController.......");
	
	homeServices.getHomeListData(
		null,null
	)
}])
