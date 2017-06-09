angular.module('app')
    .controller('MainController', function($scope, $state) {
      $scope.btnInscri = function(){
        $state.go('anon.register');
      };
      $scope.btnLogin = function(){
        $state.go('anon.login');
      };
    });
