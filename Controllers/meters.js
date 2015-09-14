

app.controller('meterCtrl', function ($scope) {

    $scope.MeterType = ['Pump1', 'Pump2', 'Pump3'];
    $scope.Meter = { Details: [{ Type: '', Reading: '' }] }

    $scope.Save = function () {
        alert('Saved');
    };

    $scope.Add = function () {
        $scope.Meter.Details.push({ Type: '', Reading: '' });
    }

    $scope.Remove = function ($index) {
        $scope.Meter.Details.splice($index, 1);
    }


});
