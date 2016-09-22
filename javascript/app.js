var app = angular.module('nahuopu',['ionic','nahuopu-services']);

app.config(["$stateProvider","$urlRouterProvider","$ionicConfigProvider","globalProvider",
function($stateProvider,$urlRouterProvider,$ionicConfigProvider,globalProvider){
	$stateProvider
	.state('tabs',{
		url:'/tabs',
		templateUrl:'views/tabs.html'
	})
	.state('tabs.home',{
		url:'/home',
		views:{
			'home':{
				templateUrl:'views/home/home.html',
				controller:'homeCtrl'
			}
		}
	})
	.state('tabs.sort',{
		url:'/sort',
		views:{
			'sort':{
				templateUrl:'views/sort/sort.html',
				controller:'sortCtrl'
			}
		}
	})
	.state('tabs.market',{
		url:'/market',
		views:{
			'market':{
				templateUrl:'views/market/market.html',
				controller:'marketCtrl'
			}
		}
	})
	.state('tabs.me',{
		url:'/me',
		views:{
			'me':{
				templateUrl:'views/me/me.html',
				controller:'meCtrl'
			}
		}
	});
	$urlRouterProvider.otherwise('/tabs/home');
	
	//配置全局风格
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.position('bottom');
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	$ionicConfigProvider.platform.ios.backButton.previousTitleText('');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('');
	
	//路径
	globalProvider.globalPath = '/html5/github/nahuobu'
	
}])


var nahuopuSer = angular.module('nahuopu-services',[]);

nahuopuSer.provider('global',function(){
	this.globalPath = '';
	this.$get = function(){
		var that = this;
		var obj = {
			getGlobalPath:function(){
			 	return that.globalPath
			}
		}
		return obj
	}
})







