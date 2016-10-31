/**
 * Created by qingyun2 on 16/10/26.
 */
angular.module('tab', ['myFactory', 'ui.router', 'myFactory'])
    .controller('tabBarController', ['$scope', 'httpSet','$timeout',function ($scope, httpSet,$timeout) {
        $scope.tabList = {
            listArr: [
                {demo: '推荐', Durl: ".recommend", idStr: ''},
                {demo: '新闻', Durl: ".news", idStr: 'BBM54PGAwangning'},
                {demo: '娱乐', Durl: ".amusement", idStr: 'BA10TA81wangning'},
                {demo: '体育', Durl: ".physical", idStr: 'BA8E6OEOwangning'},
                {demo: '财经', Durl: ".money", idStr: 'BA8EE5GMwangning'},
                {demo: '汽车', Durl: ".car", idStr: 'BA8DOPCSwangning'},
                {demo: '军事', Durl: ".war", idStr: 'BAI67OGGwangning'},
                {demo: '时尚', Durl: ".vogue", idStr: 'BA8F6ICNwangning'},
                {demo: '网易号', Durl: ".wy", idStr: 'BBM50AKDwangning'},
                {demo: '游戏', Durl: ".game", idStr: 'BAI6RHDKwangning'}
            ]
        };
        $scope.newsObj = {
            newList: [],
            goToNewsDetail: function () {
                $state.go('tab.news_detail')
            }
        };


        httpSet.setUrl('BA10TA81wangning', function (data) {

            $scope.newsObj.newList = data;

        });

        $scope.setUrlTab = function (idStr) {
            httpSet.setUrl(idStr, function (data) {


                console.log("---");
                $scope.newsObj.newList = data;
                console.log($scope.newsObj.newList);


            })
        }
    }]);