var app = angular.module('myapp', []);



app.controller('paymentCtrl', function ($scope) {
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

app.controller('driveoffCtrl', function ($scope) {

    $scope.DriveOff = { details: [{ rego: '', carmake: '', color: '', amount: '', litres: '' }] };


    $scope.Save = function () {
        alert('Drive off ' + angular.toJson($scope.DriveOff));
    };



});



app.controller('accountCtrl', function ($scope) {

    $scope.Customers = ['Bajju', 'Shanthi'];
    $scope.CustomerAccounts = ['BajjuAcc', 'ShanthiAcc'];
    $scope.Account = { Details: [{ Name: '', AccountName: '', Amount: '', Litres: '' }] };
    $scope.Save = function () {
        alert('Saved');
    };
});


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

app.controller('invoiceCtrl', function($scope) {
    $scope.Suppliers = ['sup1', 'sup2', 'sup3'];
    $scope.PaymentStatus = ['Paid', 'Not Paid'];
    $scope.Date = new Date();
    $scope.Invoices = { Details: [{ SupplierName: '', Date: '', Amount: '', InvoiceNo: '', GST: '', PaymentStatus: '', ChequeNo: '', ImgUrl: '' }] };


});