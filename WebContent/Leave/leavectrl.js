app.controller('leavectrl', [ '$scope', '$http',function($scope, $http) {
	var BASE_URL = 'http://localhost:8080/LeaveController';

$scope.submit = function() {
		console.log("apply leave")
		$scope.leave = {	
			empid:$scope.empid,
			name : $scope.name,
			dept : $scope.dept,
			startdate:$scope.startdate,
			enddate:$scope.enddate,
			reason: $scope.reason,
		}
		$http({
			method : 'POST',
			url : BASE_URL + '/createevent',
			data : $scope.event
		})
		.success(function(data, status, headers, config) {
		});
};	
}]);
	