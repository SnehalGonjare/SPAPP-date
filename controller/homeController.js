myApp.controller("homeCtrl", function ($scope, $state, $rootScope) {
    $scope.verifyUserLogin = function () {
        if ($scope.username == $rootScope.userName && $scope.password == $rootScope.password) {
            $state.go('landing');
        } else {
            alert('Invalid Credentials');
        }

    }
});
