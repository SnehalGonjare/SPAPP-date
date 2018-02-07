myApp.controller("landingCtrl", function ($scope) {

    // array for date filter options
    $scope.dateFilterHelperList = ['Today', 'Yesterday', 'This Week', 'Last Week'];

    // Search Data Array
    // $scope.schemeNameList = ['Lolrem', 'ipsum', 'amet', 'dummy', 'infancy'];
    // $scope.schemeValueList = ['12', '56', '78', '89', '75'];
    $scope.searchList = [{ schemeName: 'Lolrem', value: '12' },
                         { schemeName: 'ipsum', value: '12' },
                         { schemeName: 'amet', value: '58' },
                         { schemeName: 'dummy', value: '89' },
                         { schemeName: 'infancy', value: '96' }];


    // hide Search Data table
    $scope.showData = true;

    // disable search button
    $scope.searchData = true;

    // Get start date and End date on change date filter helper option
    $scope.getDates = function (dateFilterHelper) {
        $scope.date = new Date(); // get current date
        $scope.first = $scope.date.getDate() - $scope.date.getDay(); // First day is the day of the month - the day of the week
        $scope.last = $scope.first + 6; // last day is the first day + 6
        $scope.todayTimeStamp = +new Date; // Unix timestamp in milliseconds
        $scope.oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
        switch (dateFilterHelper) {
            case 'Today':
                $scope.startDate = $scope.date;
                $scope.endDate = $scope.date;
                break;
            case 'Yesterday':
                $scope.diff = $scope.todayTimeStamp - $scope.oneDayTimeStamp;
                $scope.yesterdayDate = new Date($scope.diff);
                $scope.startDate = $scope.yesterdayDate;
                $scope.endDate = $scope.yesterdayDate;
                break;
            case 'This Week':
                $scope.startDate = new Date($scope.date.setDate($scope.first));
                $scope.endDate = new Date($scope.date.setDate($scope.last));
                break;
            case 'Last Week':
                $scope.startDate = new Date($scope.date.setDate($scope.first - 7));
                $scope.endDate = new Date($scope.date.setDate($scope.last - 7));
                break;
            default:
                alert("Invalid Date filter helper");
        }
    }

    // Show Search Data onclick of Search biutton
    $scope.searchResult = function () {
        $scope.showData = false;
    }
});


