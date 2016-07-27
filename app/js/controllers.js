angular.module('IXnetOld.controllers', []).

  /* Drivers controller */
  controller('driversController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    ergastAPIservice.getDrivers().success(function (response) {
        //Digging into the response to get the relevant data
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  }).

  /* Driver controller */
  controller('driverController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getDriverDetails($scope.id).success(function (response) {
        $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });

    ergastAPIservice.getDriverRaces($scope.id).success(function (response) {
        $scope.races = response.MRData.RaceTable.Races; 
    }); 
  });



angular.module('IXnet.controllers', []).

  /* Marcas controller */
  controller('marcasController', function($scope, $http, IXnetservice) {
    $scope.nameFilter = null;
    $scope.marcasList = [];
    $scope.modelossList = [];
    $scope.selected = "";

    IXnetservice.getMarcas().success(function (response) {
        $scope.marcasList = response;
        console.log($scope.marcasList)
    });

    IXnetservice.getModelos().success(function (response) {
        $scope.modelosList = response;
        console.log($scope.modelosList)
    });

    $scope.refresh = function() {

        IXnetservice.getModelos().success(function (response) {
            $scope.modelosList = response;
        });
    }
  });