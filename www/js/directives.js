/**
 * Created by Luan on 13/11/2016.
 */
angular.module('directive', [])
.directive('sourceinfo', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      source: '='
    },
    template:
    '<div class="list card"> ' +
      '<div class="item item-body">' +
        '<img class="full-image" src="{{source.urlsToLogos.small}}">' +
        '<h2>{{source.name}}</h2> ' +
        '<p>{{source.description}}</p> ' +
      '</div>'+
    '</div>',
    link: function($scope) {
    }
  }
})
  .directive('articleinfo', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        article: '='
      },
      template:
        '<div class="list card"> ' +
          '<div class="item item-body">' +
            '<img class="full-image" src="{{article.urlToImage}}">' +
            '<a href="{{article.url}}" ><h2>{{article.title}}</h2></a> ' +
            '<p>{{article.description}}</p> ' +
            '<h4>Author: {{article.author}}</h4>' +
            '<h5>Published at: {{article.publishedAt}}</h5>' +
          '</div>'+
        '</div>',
      link: function($scope) {
      }
    }
  });
