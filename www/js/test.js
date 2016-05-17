/**
 * Created by kitchiong on 5/15/16.
 */
(function() {

  angular.module('app.controllers').controller('testCtrl',
    ["$scope", "dataServices", "$ionicPopup", "$window", '$ionicLoading', '$rootScope', function($scope, DataServices, $ionicPopup, $window, $ionicLoading, $rootScope) {

      $scope.writtenCounter = 0;
      $scope.signCounter = 0;

      $scope.cannotGoNext = true;

      $scope.disableSelect = false;

      $scope.disableCheckAns = true;

      $scope.isCorrect = 0;

      var tdata = pickQuestions();
      var curAns;
      $scope.currentQuestion = tdata[$scope.writtenCounter];

      function pickQuestions() {

        $scope.isCorrect = 0;

        var questionsIndex = [];
        var tempIndex;
        var tempData = DataServices.getTData();
        var questions = [];
        while(questionsIndex.length < 15) {

          tempIndex = Math.floor((Math.random() * 34));
          if(questionsIndex.indexOf(tempIndex) === -1) {
            questionsIndex.push(tempIndex);
          }

          console.log(questionsIndex.length);
        }

        for(var i = 0; i < questionsIndex.length; i++) {
          var answerSet = tempData[questionsIndex[i]].answers;
          for(var j = 0; j < 3; j++) {
            answerSet[j].check = false;
          }

           questions.push(tempData[questionsIndex[i]]);
        }

        return questions;
      }

      /*
       * function that gets next question
       */
      $scope.nextQuestion = function() {

        var globalCount = $scope.writtenCounter;
        globalCount++;

        if(globalCount < 15) {
          $scope.currentQuestion = tdata[globalCount];

          $scope.writtenCounter = globalCount;
          $rootScope.gWrittenCounter = globalCount;
        }

        $scope.disableSelect = false;
        $scope.cannotGoNext = true;
        $scope.isCorrect = 0;
      };

      $scope.setCurAnswer = function(curAnswer) {

        curAns = curAnswer;
        $scope.disableCheckAns = false;
      };

      $scope.checkAnswer = function() {

        $scope.cannotGoNext = false;
        $scope.disableSelect = true;

        $scope.isCorrect = $scope.currentQuestion.correct;
        $scope.disableCheckAns = true;

      };


      /*
       * pop up confirm function
       */
      $scope.getNewTest = function() {
        var confirmPopup = $ionicPopup.confirm({
          title: 'New Test',
          template: 'Are you sure you want to do a new test?'
        });

        confirmPopup.then(function(res) {
          if(res) {
            $rootScope.gWrittenCounter = 0;
            $rootScope.gSignCounter = 0;
            $window.location.reload();
          }
        });
      };

    }]);

}());
