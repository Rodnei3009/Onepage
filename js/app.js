var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/daily.html',
            controller: 'dailyController'
        })
        .when('/monthly', {
            templateUrl: 'pages/monthly.html',
            controller: 'monthlyController'
        });
 
});

myApp.controller('dailyController', function($scope) {
    $scope.pageClass = 'page-daily';
    //alert('buceta gorda');
});

myApp.controller('monthlyController', function($scope) {
    $scope.pageClass = 'page-monthly';
    //alert('buceta gorda2');
});

myApp.controller('dateController', function($scope) {
    $scope.dateAtual = moment(new Date()).format('DD-MMM-YYYY');
    $scope.monthAtual = moment(new Date()).format('MMM-YYYY');

    $scope.before = function() {
        $scope.dateAtual = moment($scope.dateAtual, "DD-MMM-YYYY").subtract(1, 'day').format('DD-MMM-YYYY');
        $scope.monthAtual = moment($scope.monthAtual, "MMM-YYYY").subtract(1, 'month').format('MMM-YYYY');
    };

    $scope.after = function() {
        $scope.dateAtual = moment($scope.dateAtual, "DD-MMM-YYYY").add(1, 'day').format('DD-MMM-YYYY');
        $scope.monthAtual = moment($scope.monthAtual, "MMM-YYYY").add(1, 'month').format('MMM-YYYY');
    };

});