var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('dateController', function($scope) {
    $scope.dateAtual = moment(new Date()).format('DD-MMM-YYYY');
    $scope.monthAtual = moment(new Date()).format('MMM-YYYY');

    $scope.before = function() {
        $scope.dateAtual = moment($scope.dateAtual, "DD-MMM-YYYY").subtract(1, 'day').format('DD-MMM-YYYY');
    };

    $scope.after = function() {
        $scope.dateAtual = moment($scope.dateAtual, "DD-MMM-YYYY").add(1, 'day').format('DD-MMM-YYYY');
    };

});

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/monthly.html',
            controller: 'monthlyController'
        })
        .when('/daily', {
            templateUrl: 'pages/daily.html',
            controller: 'dailyController'
        });
 
});

myApp.controller('dailyController', function($scope) {
    $scope.pageClass = 'page-daily';
});

myApp.controller('monthlyController', function($scope) {
    $scope.pageClass = 'page-monthly';
});