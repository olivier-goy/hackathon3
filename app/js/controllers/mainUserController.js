angular.module('app')
    .controller('MainUserController', function($scope, $state) {

      $scope.webcam = function(){
        $state.go('user.webcam');
      };

    });
