/**
 * Created by qingyun2 on 16/10/31.
 */
angular.module('myFactory', [])
    .factory('httpSet', ['$http', function ($http) {

        function setUrl(idStr, fn) {
            var url = 'http://localhost:5555?myUrl=' + 'http://3g.163.com/touch/reconstruct/article/list/' + idStr + '/20-10.html' + '&callback=JSON_CALLBACK';

            $http({
                method: 'jsonp',
                url: url
            }).then(function success(result) {
                result = result.data;
                var a = /^(artiList\()(.*)\)$/g;
                result = a.exec(result)[2];
                result = JSON.parse(result)[idStr];
                // return result;
                fn(result);
                // $scope.newsObj.newList = result;

            }, function error(e) {
                console.log(e)
            });
        }

        return {
            setUrl: setUrl
        }

    }])