/**
 * Created by kitchiong on 5/15/16.
 */
(function() {

  angular.module('app.controllers').controller('studyCtrl',
    ['$scope', 'dataServices', function($scope, DataServices) {

      $scope.studyQuestions = [];

      $scope.studyQuestions = DataServices.getTData();

      $scope.autoSelect = function(correct, answers, $index) {

        console.log(answers);

        return true;

      }




    }]);

}());
