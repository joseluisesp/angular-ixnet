angular.module('IXnet.services', [])

  .factory('IXnetservice', function($http) {

    var IXnetMarcas = {};

    IXnetMarcas.getMarcas = function() {
      return $http({
        method: 'GET', 
        url: 'http://83.36.59.69:5050/api/marcas'
      });
    }

    IXnetMarcas.getModelos = function(marca) {
      return $http({
        method: 'GET', 
        url: 'http://83.36.59.69:5050/api/modelos'
      });
    }

    return IXnetMarcas;
  });

