// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('multiView', ['ionic', 'LocalStorageModule'])

.run(function($ionicPlatform) { 
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
  
app.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
        .state('tabs', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })
        .state('tabs.list1', {
            url: '/list1',
            views: {
                'list1-tab' : {
                    templateUrl: 'templates/list.html',
                    controller: 'ListController1'
                }
            }
        })
        .state('tabs.list2', {
                url: '/list2',
                views: {
                    'list2-tab' : {
                        templateUrl: 'templates/list.html',
                        controller: 'ListController2'
                    }
                }
        })
        .state('tabs.list3', {
                    url: '/list3',
                    views: {
                        'list3-tab' : {
                            templateUrl: 'templates/list.html',
                            controller: 'ListController3'
                        }
                    }
            })
    $urlRouterProvider.otherwise('/tab/list1');
});

app.config(function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('multiListStorage')});

//define the controller
app.controller('ListController1', function($scope, localStorageService, $ionicPopup){
        
        //initialize some variables
        $scope.toDos = [];
        $scope.text = '';
        
 
        //check to see if the local storage module is supported and if it exists
        if (localStorageService.isSupported && localStorageService.get('toDoStorage') !== null){
                //fetch the stored To DO List
                $scope.toDos = localStorageService.get('toDoStorage');
            
        }else{
            //create 3 initial To Do's
            $scope.toDos.push({text:"Do Homework",isDone:false});
            $scope.toDos.push({text:"Clean Room",isDone:false});
            $scope.toDos.push({text:"Pay Bills",isDone:false});
            
        }
        
        //add a new item to list function
        $scope.submit = function() {
            if ($scope.text) {

                $scope.toDos.push({
                    text:this.text,
                    isDone:false});

                localStorageService.set('toDoStorage', $scope.toDos);
                $scope.text = '';
                
            }
        };
    
        
      $scope.moveItem = function(item, fromIndex, toIndex) {
        //Move the item in the array
        $scope.toDos.splice(fromIndex, 1);
        $scope.toDos.splice(toIndex, 0, item);
        localStorageService.remove('toDoStorage');
        localStorageService.set('toDoStorage', $scope.toDos);
      };
        
        //delete an item from list function
        $scope.delete = function(index) {
            

            $scope.toDos.splice(index, 1);
            
            localStorageService.remove('toDoStorage');
            
            if ($scope.toDos.length !== 0)
                localStorageService.set('toDoStorage', $scope.toDos);
            
            
        }
        
        $scope.clear = function(){
            
            var askUser = $ionicPopup.confirm({
            title: 'Clear List',
            template: 'Are you sure you want to clear this list?'
            });
            
          askUser.then(function(ans) {
            if (ans) {
                $scope.toDos = [];
                localStorageService.remove('toDoStorage');
            }
          });
        };

    });

app.controller('ListController2', function($scope, localStorageService, $ionicPopup){
        
        //initialize some variables
        $scope.toDos = [];
        $scope.text = '';
 
        //check to see if the local storage module is supported and if it exists
        if (localStorageService.isSupported && localStorageService.get('toDoStorage2') !== null){
                //fetch the stored To DO List
                $scope.toDos = localStorageService.get('toDoStorage2');
            
        }else{
            //create 3 initial To Do's
            $scope.toDos.push({text:"Do Homework",isDone:false});
            $scope.toDos.push({text:"Clean Room",isDone:false});
            $scope.toDos.push({text:"Pay Bills",isDone:false});
            
        }
        
        //add a new item to list function
        $scope.submit = function() {
            if ($scope.text) {

                $scope.toDos.push({
                    text:this.text,
                    isDone:false});

                localStorageService.set('toDoStorage2', $scope.toDos);
                $scope.text = '';
                
            }
        };
    
        $scope.moveItem = function(item, fromIndex, toIndex) {
            //Move the item in the array
            $scope.toDos.splice(fromIndex, 1);
            $scope.toDos.splice(toIndex, 0, item);
            localStorageService.remove('toDoStorage2');
            localStorageService.set('toDoStorage2', $scope.toDos);
          };
        
        //delete an item from list function
        $scope.delete = function(index) {
            

            $scope.toDos.splice(index, 1);
            
            localStorageService.remove('toDoStorage2');
            
            if ($scope.toDos.length !== 0)
                localStorageService.set('toDoStorage2', $scope.toDos);
            
            
        }
        
        $scope.clear = function(){
            
            var askUser = $ionicPopup.confirm({
            title: 'Clear List',
            template: 'Are you sure you want to clear this list?'
            });
            
          askUser.then(function(ans) {
            if (ans) {
                $scope.toDos = [];
                localStorageService.remove('toDoStorage2');
            }
          });
        };

    });

app.controller('ListController3', function($scope, localStorageService, $ionicPopup){
        
        //initialize some variables
        $scope.toDos = [];
        $scope.text = '';
 
        //check to see if the local storage module is supported and if it exists
        if (localStorageService.isSupported && localStorageService.get('toDoStorage3') !== null){
                //fetch the stored To DO List
                $scope.toDos = localStorageService.get('toDoStorage');
            
        }else{
            //create 3 initial To Do's
            $scope.toDos.push({text:"Do Homework",isDone:false});
            $scope.toDos.push({text:"Clean Room",isDone:false});
            $scope.toDos.push({text:"Pay Bills",isDone:false});
            
        }
        
        //add a new item to list function
        $scope.submit = function() {
            if ($scope.text) {

                $scope.toDos.push({
                    text:this.text,
                    isDone:false});

                localStorageService.set('toDoStorage3', $scope.toDos);
                $scope.text = '';
                
            }
        };
    
        $scope.moveItem = function(item, fromIndex, toIndex) {
            //Move the item in the array
            $scope.toDos.splice(fromIndex, 1);
            $scope.toDos.splice(toIndex, 0, item);
            localStorageService.remove('toDoStorage3');
            localStorageService.set('toDoStorage3', $scope.toDos);
        };
        
        //delete an item from list function
        $scope.delete = function(index) {
            

            $scope.toDos.splice(index, 1);
            
            localStorageService.remove('toDoStorage3');
            
            if ($scope.toDos.length !== 0)
                localStorageService.set('toDoStorage3', $scope.toDos);
            
            
        }
        
        $scope.clear = function(){
            
            var askUser = $ionicPopup.confirm({
            title: 'Clear List',
            template: 'Are you sure you want to clear this list?'
            });
            
          askUser.then(function(ans) {
            if (ans) {
                $scope.toDos = [];
                localStorageService.remove('toDoStorage3');
            }
          });
        };

    });


