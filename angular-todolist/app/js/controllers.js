'use strict';

/* Controllers */

angular.module('todoList.controllers', []).
  controller('missionListCtrl', function($scope) {
  	var list = [];
  	$scope.missions = list;
    $scope.text = "";

  	$scope.addMission = function  () {
     list.push({'name' : $scope.text,
     	        'time' : $scope.time,
     	        'done' : false
     	        });
     $scope.text = "";
   } 


   $scope.delete = function  (index) {
   	list.splice(index,1);
   	

   	
   }
 
   $scope.orderProp = "time";



  });
