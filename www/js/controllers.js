(function(){

  'use strict';

  angular.module('app.controllers', []);

  angular.module('app.controllers').controller('mainCtrl', ['$scope','$rootScope', function($scope, $rootScope){

    $rootScope.gWrittenCounter = 0;
    $rootScope.gSignCounter = 0;
    $scope.intro = "I am intro";

  }]);




}());
