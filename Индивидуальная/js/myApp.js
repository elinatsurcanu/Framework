var app = angular.module('myApp', []);
app.service('ageService', function () {
    this.check = function (x) {
        if (x === NaN) {
            return "";
        }

    }
});


app.directive("hhh", function() {
    return {
        template : "<h1><b>Наши услуги</b></h1>"
    };
});

app.filter('myFilterAge', ['ageService', function (ageService) {
    return function (x) {
        return ageService.check(x);
    };
}]);

