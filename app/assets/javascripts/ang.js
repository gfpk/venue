this.appControll = function($scope) {
 $scope.entries = [
    {
      name: "Larry"
    }, {
      name: "Curly"
    }, {
      name: "Moe"
    }
  ],
  $scope.addEntry = function(){

    $scope.entries.push($scope.newEntry);
    $scope.newEntry = {}

  }
};
