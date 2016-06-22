angular.module('testApp.controllers', []);


testApp.controller('profiles', function($scope) {
    
    $scope.titleView = "Neil Gaiman";
    
    $scope.addfriend = function() {
        // alert('Friend request sent!')
    };
    
    /* User info */
    $scope.userId = 10;
    $scope.nombre = 'Neil Gaiman';
    $scope.description = 'Hello there, this is Neil, I am from Portchester, and I am a writer. Please feel free to add me! I will be glad to talk to you!';
    
});




testApp.controller('chat', function($scope, $routeParams, $sce, $http) {
    
    $scope.title = 'chat';
    
    $scope.currentUser = $routeParams.userId;
    
    
    
    /* Messages */
    
    $scope.messages = [ {"userId":5, "message": "Hi, this is Neil, how are you?", "class":"stranger"} ];
        
    $scope.sendMessage = function() {
        
        if ($scope.messageText) {
            
            var newMessage = new function() {
                this.userId = $routeParams.userId;
                this.message = $scope.messageText;
                this.class = 'me';
            }

            $scope.messages.push(newMessage);
            $scope.$broadcast('newItemAdded');
            $scope.messageText = '';
            
            // $scope.sendMessage = chatMessages.sendMessages(newMessage);
            
        }
        
    }; /* /Messages */
    
    
});