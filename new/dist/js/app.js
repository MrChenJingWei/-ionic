/**
 * Created by qingyun2 on 16/10/24.
 */
angular.module('myApp',['ui.router','tab','news','ngRoute'])
    .config(['$stateProvider', '$urlRouterProvider', function ($state, $urlRouter) {
        $state
            .state('tab', {
                url: '/tab',
                // abstract: true,
                templateUrl: 'tab.html'
            })
            .state('tab.news',{
                url:'/news',
                templateUrl:'news.html',
                controller:"tabBarController"
            });

        $urlRouter.otherwise('tab')
    }]);
