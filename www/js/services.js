/**
 * Created by Luan on 13/11/2016.
 */
angular
  .module('servicesApi', [])

.factory('Articles', function ($http) {
  var dataSource = "https://newsapi.org/v1/";
  var apiKey = "2d1f89b4441c4bf5a2f53131ba1ebe24";

  return{
    getArticle: function(s) {
      return $http({
        url: dataSource + "articles",
        method: "GET",
        params:{
          source: s,
          apiKey: apiKey
        }
      });
    }
  }
})

.factory("Source", function ($http) {
  var dataSource = "https://newsapi.org/v1/";
  return{
    getSource: function(category) {
      return $http({
        url: dataSource + "sources",
        method: "GET",
        params:{
          category: category,
          language: "en",
          country: "us"
        }
      });
    }
  }
});
