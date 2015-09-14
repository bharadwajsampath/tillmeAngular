'use strict';


angular
  .module('yapp', [
    'ui.router',
    'ngAnimate'
    
  ])
  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('/dashboard', '/dashboard/overview');
      $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('base', {
                abstract: true,
                url: '',
                templateUrl: 'views/base.html'
            })
            .state('login', {
                url: '/login',
                parent: 'base',
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                parent: 'base',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .state('overview', {
                url: '/overview',
                parent: 'dashboard',
                templateUrl: 'views/dashboard/overview.html'
            })
            .state('reports', {
                url: '/reports',
                parent: 'dashboard',
                templateUrl: 'views/dashboard/reports.html'
            })
            .state('payments', {
                templateUrl: 'views/Payment/Create.html',
                controller: 'paymentCtrl',
                parent: 'dashboard',
                url: '/payment'
            })
         .state('accounts', {
                templateUrl: 'views/Accounts/Create.html',
                controller: 'accountCtrl',
                parent: 'dashboard',
                url: '/acount'
            })
            .state('driveoff', {
                templateUrl: 'views/DriveOff/Create.html',
                controller: 'driveoffCtrl',
                parent: 'dashboard',
                url: '/driveoff'
            }) 
            .state('meters', {
                templateUrl: 'views/Meters/Create.html',
                controller: 'meterCtrl',
                parent: 'dashboard',
                url: '/meters'
            })
        .state('invoices', {
                templateUrl: 'views/Invoices/Create.html',
                controller: 'invoiceCtrl',
                parent: 'dashboard',
                url: '/invoices'
            })
            .state('payments.create', {
                url: '/create',
               
                templateUrl: 'views/Payment/Create.html',
                controller: 'paymentCtrl'

               
            });
        


    });
