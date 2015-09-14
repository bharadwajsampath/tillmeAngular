app.controller('invoiceCtrl', function($scope) {
    $scope.Suppliers = ['sup1', 'sup2', 'sup3'];
    $scope.PaymentStatus = ['Paid', 'Not Paid'];
    $scope.Date = new Date();
    $scope.Invoices = { Details: [{ SupplierName: '', Date: '', Amount: '', InvoiceNo: '', GST: '', PaymentStatus: '', ChequeNo: '', ImgUrl: '' }] };


});