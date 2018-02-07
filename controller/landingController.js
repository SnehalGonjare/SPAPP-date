myApp.controller("landingCtrl", function ($scope) {
   $scope.myJson = {
        type: 'line',
        title: {
            text: "Line Graph Time Vs Temprature",
            fontSize: 16,
            fontColor: "#000"
        },
        tooltip: {
            text: "Time Vs Temprature"
        },
        series: [
            { values: [5, 23] },
       ]
    };
     $scope.myJson1 = {
        type: 'line',
        title: {
            text: "Line Graph Time Vs Pressure",
            fontSize: 16,
            fontColor: "#000"
        },
        tooltip: {
            text: "Time Vs Pressure"
        },
        series: [
            { values: [10, 15] },
        ]
    };
     $scope.myJson2 = {
        type: 'line',
        title: {
            text: "Line Graph Time Vs Volumn",
            fontSize: 16,
            fontColor: "#000"
        },
        tooltip: {
            text: "Time Vs Volumn"
        },
        series: [
            { values: [15, 29] },
        ]
    };
     $scope.myJson3 = {
        type: 'line',
        title: {
            text: "Line Graph Time Vs Speed",
            fontSize: 16,
            fontColor: "#000"
        },
        tooltip: {
            text: "Time Vs Speed"
        },
        series: [
           { values: [20, 45] },
        ]
    };
     $scope.myJson4 = {
        type: 'line',
        title: {
            text: "Line Graph Time Vs Productivity",
            fontSize: 16,
            fontColor: "#000"
        },
        tooltip: {
            text: "Time Vs Productivity"
        },
        series: [
            { values: [25, 14] }
        ]
    };
});


