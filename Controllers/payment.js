'use strict';

var app = angular.module(['yapp']);

app.controller('paymentCtrl', function ($scope, $state) {
    $scope.$state = $state;

    $scope.user = {
        payments: [
            { type: '', amount: '' }
        ]
    };
    $scope.remove = function (index) {
        $scope.user.payments.splice(index, 1);
    };
    $scope.add = function () {
        $scope.user.payments.push({ type: '', amount: '' });
    };



    $scope.Save = function () {
        //Call Webapi
        alert('hello' + angular.toJson($scope.user));
    }
});