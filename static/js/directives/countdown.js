app.directive('countdown', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'static/js/directives/appInfo.html' 
  }; 
});