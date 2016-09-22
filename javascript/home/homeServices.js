nahuopuSer.service('homeServices',["global","$http",function(global,$http){
	this.getHomeListData = function(successCallBack,errorCallBack){
		$http.get(global.getGlobalPath() + "/data/home/homeBanner.json")
		.success(function(data){
			console.log(data)
		})
		.error(function(error){
			console.log(error)
		})
	}
}])
