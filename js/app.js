var myApp = angular.module('myApp', []);

myApp.controller('dateController', function($scope) {
    $scope.dateAtual = moment(new Date()).format('DD-MMM-YYYY');

    $scope.before = function() {
        $scope.dateAtual = moment($scope.dateAtual, "DD-MMM-YYYY").subtract(1, 'day').format('DD-MMM-YYYY');
    };

    $scope.after = function() {
        $scope.dateAtual = moment($scope.dateAtual, "DD-MMM-YYYY").add(1, 'day').format('DD-MMM-YYYY');
    };

});


