'use strict';

angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }

  });
