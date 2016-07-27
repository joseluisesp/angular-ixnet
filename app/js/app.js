angular.module('IXnet', [
  'IXnet.services',
  'IXnet.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/marcas", {templateUrl: "partials/marcas.html", controller: "marcasController"}).
	otherwise({redirectTo: '/marcas'});
}]);