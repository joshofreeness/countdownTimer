angular.module('timerFilter', []).filter('isFuture', function() {
  return function(items) {
    return items.filter(function(item){
      var d = new Date();
      // Only keep items that are in the future (or have finished in the past 24 hours)
      return moment(item.datetime).isAfter(new Date(d.getTime() - 24*60*60*1000));
    })
  }
})