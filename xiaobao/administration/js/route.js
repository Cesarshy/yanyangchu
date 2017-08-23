var app=angular.module('myApp',['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/analysis', {
        templateUrl: 'main/analysis.html'
    }).when('/application_list', {
        templateUrl: 'main/application_list.html'
    }).when('/list', {
        templateUrl: 'main/list.html'
    }).when('/administrator_list', {
        templateUrl: 'main/administrator_list.html'
    }).when('/add_administrator', {
        templateUrl: 'main/add_administrator.html'
    }).when('/add_group', {
        templateUrl: 'main/add_group.html'
    }).when('/edit', {
        templateUrl: 'main/edit.html'
    }).when('/edit_manage', {
        templateUrl: 'main/edit_manage.html'
    }).when('/myself', {
        templateUrl: 'main/myself.html'
    }).otherwise({
        templateUrl: 'main/index.html'
    })
}])