var app = angular.module('dragon-directives', []);

app.directive("descriptions", function() {
  return {
    restrict: "E",
    templateUrl: "descriptions.html"
  };
});

app.directive("reviews", function() {
  return {
    restrict: "E",
    templateUrl: "reviews.html"
  };
});

app.directive("specifications", function() {
  return {
    restrict: "E",
    templateUrl: "specifications.html"
  };
});


app.directive("dragonTabs", function() {
  return {
    restrict: "E",

    templateUrl: "dragon-tabs.html",
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: "tab"
  };
});
