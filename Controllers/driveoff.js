app.controller('driveoffCtrl', function ($scope) {

    $scope.DriveOff = { details: [{ rego: '', carmake: '', color: '', amount: '', litres: '' }] };


    $scope.Save = function () {
        alert('Drive off ' + angular.toJson($scope.DriveOff));
    };



});