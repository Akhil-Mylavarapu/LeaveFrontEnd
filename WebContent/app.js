var app = angular.module("myApp", ["ngRoute","ngCookies","blogapp"])
.run(run);
app.config(function($routeProvider,$locationProvider) {
	 $routeProvider
	    .when("/", {
	        templateUrl : "index.html",
	    
	    })
	     
	    .when("/home", {
	        templateUrl : "home/Home.html",
	        controller:'UserController'
	  
	    })
	    .when("/applyleave", {
	        templateUrl : "Blog/blog.html",
	        controller :'blogctrl'
	       
	    });
