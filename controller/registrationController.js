myApp.controller("registrationCtrl", function ($scope, $state, $rootScope) {
    $scope.CheckConfirmPassword = function () {
        if (!($scope.password && ($scope.password_c == $scope.password)))
            $scope.passwordNotMatched = true;
        else
            $scope.passwordNotMatched = false;
    }

    $scope.rgisterUser = function(){
        $rootScope.userName = $scope.userName;
        $rootScope.password = $scope.password;
        $state.go('home');
    }
});
