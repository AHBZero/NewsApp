angular.module('newsApp.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('SourceCtrl', function($scope, Source, $stateParams, $ionicPlatform) {

  $ionicPlatform.ready(function () {

    $scope.sources = [];

    Source.getSource($stateParams.category).success(function (result) {
      $scope.sources = result.sources
    })

  });
})
  .controller('ArticleCtrl', function($scope, Articles, $stateParams, $ionicPlatform) {
    $ionicPlatform.ready(function () {
      $scope.articles = [];

      Articles.getArticle($stateParams.source).success(function (result) {
        $scope.articles = result.articles
      })
    });
  });
