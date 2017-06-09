angular.module('app')
  .controller('AfterdatingController', function($scope) {

    $scope.ajoute = false;
    $scope.contain = true;


    $scope.validate = function() {
      $scope.contain = false;
      $scope.ajoute = true;
    };

    $scope.delete = false;
    $scope.nul = function(){
      $scope.contain = false;
      $scope. delete = true;
    };

    $scope.ajoute1 = false;
    $scope.contain1 = true;

    $scope.validate1 = function() {
      $scope.contain1 = false;
      $scope.ajoute1 = true;
    };


    $scope.ajoute2 = false;
    $scope.contain2 = true;

    $scope.validate2 = function() {
      $scope.contain2 = false;
      $scope.ajoute2 = true;
    };


    $scope.ajoute3 = false;
    $scope.contain3 = true;

    $scope.validate3 = function() {
      $scope.contain3 = false;
      $scope.ajoute3 = true;
    };


    $scope.ajoute4 = false;
    $scope.contain4 = true;

    $scope.validate4 = function() {
      $scope.contain4 = false;
      $scope.ajoute4 = true;
    };


    $scope.ajoute5 = false;
    $scope.contain5 = true;

    $scope.validate5 = function() {
      $scope.contain5 = false;
      $scope.ajoute5 = true;
    };


    $scope.ajoute6 = false;
    $scope.contain6 = true;

    $scope.validate6 = function() {
      $scope.contain6 = false;
      $scope.ajoute6 = true;
    };


    $scope.ajoute7 = false;
    $scope.contain7 = true;

    $scope.validate7 = function() {
      $scope.contain7 = false;
      $scope.ajoute7 = true;
    };


    $scope.ajoute8 = false;
    $scope.contain8 = true;

    $scope.validate8 = function() {
      $scope.contain8 = false;
      $scope.ajoute8 = true;
    };


    $scope.ajoute9 = false;
    $scope.contain9 = true;

    $scope.validate9 = function() {
      $scope.contain9 = false;
      $scope.ajoute9 = true;
    };


  });
