
var converterApp = angular.module('converterApp',[]);

converterApp.controller('converterControler', ['$scope', function($scope) {
  console.log("Hola Convertidor");

  $scope.calcular = function(){
    console.log('click')
    const money = $scope.moneyImput
    const dollarPrice = 3837.95;
      
      //Función para calcular cosas calculables

      if(!money){
        swal("¡Atención!","No a ingresado una cifra","warning");
        }else{
          dollar = money/dollarPrice;
          $scope.dollar = dollar;
        
        }
  }
  $scope.calcular_D = function(){
    console.log('click')
    const money_D = $scope.money_D_Imput
    const dollarPrice = 3837.95;
      
      //Función para calcular cosas calculables

      if(!money_D){
      }
        else{
          peso = money_D*dollarPrice;
          $scope.peso= peso;
        }

  }




}]);