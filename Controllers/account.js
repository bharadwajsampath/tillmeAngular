app.controller('accountCtrl', function ($scope) {

    $scope.Customers = ['Bajju', 'Shanthi'];
    $scope.CustomerAccounts = ['BajjuAcc', 'ShanthiAcc'];
    $scope.Account = { Details: [{ Name: '', AccountName: '', Amount: '', Litres: '' }] };
    $scope.Save = function () {
        alert('Saved');
    };
});