(function(){
'use strict';

angular.module('myApp',[])

.controller('myController',function($scope){
	$scope.name="";
	$scope.totalValue=0;
});

$scope.display=function(){
	var totalValue=calculateNumericForString($scope.name);
	$scope.totalValue=totalValue;
};

function calculateNumericForString(string){
	var totalSValue=0;
	for(var i=0;i<string.length;i++){
		totalValue+=string.charCodeAt(i);
	}
	return totalValue;
};

})();