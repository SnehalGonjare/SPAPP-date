myApp.controller("landingCtrl", function ($scope) {

    // array for date filter options
    // $scope.dateFilterHelperList = ['Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month', 'This Year', 'Last Year'];
    $scope.dateFilterHelperList = ['Today', 'Yesterday', 'This Week', 'Last Week', 'This Month', 'Last Month'];

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
        $scope.showData = true;

        $scope.date = new Date(); // get current date
        // $scope.date = new Date('2018-02-16T03:24:00'); // ForUnit testing
        // $scope.first = $scope.date.getDate() - $scope.date.getDay(); // First day is the day of the month - the day of the week
        // $scope.last = $scope.first + 6; // last day is the first day + 6
        // $scope.todayTimeStamp = +new Date; // Unix timestamp in milliseconds
        // $scope.oneDayTimeStamp = 1000 * 60 * 60 * 24; // Milliseconds in a day
        switch (dateFilterHelper) {
            case 'Today':
                $scope.startDate = $scope.date;
                $scope.endDate = $scope.date;
                break;
            case 'Yesterday':
                // $scope.diff = $scope.todayTimeStamp - $scope.oneDayTimeStamp;
                // $scope.yesterdayDate = new Date($scope.diff);
                $scope.yesterdayDate = $scope.date.setDate($scope.date.getDate() - 1);
                $scope.startDate = $scope.yesterdayDate;
                $scope.endDate = $scope.yesterdayDate;
                break;
            case 'This Week':
                // $scope.first = $scope.date.getDate() - $scope.date.getDay(); // First day is the day of the month - the day of the week
                // $scope.last = $scope.first + 6; // last day is the first day + 6
                // $scope.startDate = new Date($scope.date.setDate($scope.first));
                // $scope.endDate = new Date($scope.date.setDate($scope.last));
                // break;

                $scope.first = $scope.date.getDate() - $scope.date.getDay(); // First day is the day of the month - the day of the week
                // $scope.last = $scope.first + 6; // last day is the first day + 6
                $scope.startDate1 = new Date($scope.date.setDate($scope.first));
                $scope.startDate2 = angular.copy($scope.startDate1);
                $scope.startDate = $scope.startDate1.setDate($scope.startDate1.getDate());
                $scope.endDate = $scope.startDate2.setDate($scope.startDate2.getDate() + 6);
                break;
            case 'Last Week':
                $scope.first = $scope.date.getDate() - $scope.date.getDay(); // First day is the day of the month - the day of the week
                // $scope.last = $scope.first + 6; // last day is the first day + 6
                $scope.startDate1 = new Date($scope.date.setDate($scope.first));
                $scope.startDate2 = angular.copy($scope.startDate1);
                $scope.startDate = $scope.startDate1.setDate($scope.startDate1.getDate() - 7);
                $scope.endDate = $scope.startDate2.setDate($scope.startDate2.getDate() - 1);
                break;
            case 'This Month':
                $scope.startDate = new Date($scope.date.getFullYear(), $scope.date.getMonth(), 1);
                $scope.endDate = new Date($scope.date.getFullYear(), $scope.date.getMonth() + 1, 0);
                break;
            case 'Last Month':
                $scope.startDate = new Date($scope.date.getFullYear(), $scope.date.getMonth() - 1, 1);
                $scope.endDate = new Date($scope.date.getFullYear(), $scope.date.getMonth() - 1 + 1, 0);
                break;
            // case 'This Year':
            //     $scope.startDate = new Date($scope.date.getFullYear(), 0);
            //     $scope.endDate = new Date($scope.date.getFullYear(),);
            //     break;
            // case 'Last Year':
            //     $scope.startDate = new Date($scope.date.getFullYear(), $scope.date.getMonth(), 1);
            //     $scope.endDate = new Date($scope.date.getFullYear(), $scope.date.getMonth() + 1, 0);
            //     break;
            default:
                alert("Invalid Date filter helper");
        }
    }

    // Show Search Data onclick of Search biutton
    $scope.searchResult = function () {
        $scope.showData = false;
    }
});


