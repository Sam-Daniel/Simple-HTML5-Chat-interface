var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(function($routeProvider, $locationProvider) {
    
    // $locationProvider.html5Mode(true);
    
    $routeProvider
        
    .when('/', {
        templateUrl: 'view/profile-view.html',
        controller: 'profiles'
     })
        
     .when('/chat/:userId', {
        templateUrl: 'view/chat-view.html',
        controller:'chat'
     })
    
})

.directive('ngScrollBottom', ['$timeout', function ($timeout) {
  return {
    scope: {
      ngScrollBottom: "="
    },
    link: function ($scope, $element) {
      $scope.$watchCollection('ngScrollBottom', function (newValue) {
        if (newValue) {
          $timeout(function(){
            $element[0].scrollTop = $element[0].scrollHeight;
          }, 0);
        }
      });
    }
  }
}])

.directive('focusOn', function() {
   return function(scope, elem, attr) {
      scope.$on(attr.focusOn, function(e) {
          elem[0].focus();
      });
   };
});

/*
.service('chatMessages', function() {
    
    // var messages = [ {"userId":5, "message": "Hi, this is Nail, how are you?", "class":"stranger"} ];
        
    var messages = ['hola'];
    
    this.sendMessages = function (getMessageValue) {
        messages.push(getMessageValue);
        return alert(messages);
    }
    
});
*/