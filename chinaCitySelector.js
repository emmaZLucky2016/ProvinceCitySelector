(function(){
    var app = angular.module('myApp', []);
    app.directive('chinaprovinceandcitySelector',function(){
        return{
            restrict:'E',
            templateUrl:'ChinaProvinceAndCity-Selector.html',
            controller: ['$http','$scope',function($http,$scope){
                $scope.provinceAndCities= [];
                $http.get('./provinceAndCities.json').success(function(data){
                    $scope.provinceAndCities=data;
                    var provinceAndCities=$scope.provinceAndCities;
                    var provinceCategory = {
                        area: {
                            eastProvince: [provinceAndCities[9],provinceAndCities[10],provinceAndCities[11],provinceAndCities[12]],
                            southProvince: [provinceAndCities[13],provinceAndCities[19],provinceAndCities[21],provinceAndCities[32],provinceAndCities[33],provinceAndCities[34]],
                            middleProvince: [provinceAndCities[4],provinceAndCities[18],provinceAndCities[14],provinceAndCities[16],provinceAndCities[17],provinceAndCities[5]],
                            northProvince: [provinceAndCities[1],provinceAndCities[2],provinceAndCities[3],provinceAndCities[15]],
                            westNorthProvince: [provinceAndCities[27],provinceAndCities[28],provinceAndCities[29],provinceAndCities[30],provinceAndCities[31]],
                            westSouthProvince: [provinceAndCities[20],provinceAndCities[22],provinceAndCities[23],provinceAndCities[24],provinceAndCities[25],provinceAndCities[26]],
                            eastNorthProvince: [provinceAndCities[6],provinceAndCities[7],provinceAndCities[8]]
                        },
                        letters: ['全部','A','B','C','F','G','H','J','L','N','Q','S','T','X','Y','Z'],
                        letterProvince: [
                            {"id":1,"value":[provinceAndCities[12],provinceAndCities[34]]},//A
                            {"id":2,"value":[provinceAndCities[1]]},//B
                            {"id":3,"value":[provinceAndCities[22]]},//C
                            {"id":4,"value":[provinceAndCities[13]]},//F
                            {"id":5,"value":[provinceAndCities[19],provinceAndCities[20],provinceAndCities[24],provinceAndCities[28]]},//G
                            {"id":6,"value":[provinceAndCities[3],provinceAndCities[8],provinceAndCities[16],provinceAndCities[17],provinceAndCities[18],provinceAndCities[21]]},//H
                            {"id":7,"value":[provinceAndCities[7],provinceAndCities[10],provinceAndCities[14]]},//J
                            {"id":8,"value":[provinceAndCities[6]]},//L
                            {"id":9,"value":[provinceAndCities[5],provinceAndCities[30]]},//N
                            {"id":10,"value":[provinceAndCities[29]]},//Q
                            {"id":11,"value":[provinceAndCities[4],provinceAndCities[9],provinceAndCities[15],provinceAndCities[23],provinceAndCities[27]]},//S
                            {"id":12,"value":[provinceAndCities[2],provinceAndCities[32]]},//T
                            {"id":13,"value":[provinceAndCities[26],provinceAndCities[31],provinceAndCities[33]]},//X
                            {"id":14,"value":[provinceAndCities[25]]},//Y
                            {"id":15,"value":[provinceAndCities[11]]},//Z
                        ]
                    };
                    //省，市/区 联动下拉框
                    $scope.currentProvince = provinceAndCities[0];
                    $scope.eastProvince = provinceCategory.area.eastProvince;
                    $scope.southProvince = provinceCategory.area.southProvince;
                    $scope.middleProvince = provinceCategory.area.middleProvince;
                    $scope.northProvince = provinceCategory.area.northProvince;
                    $scope.westNorthProvince = provinceCategory.area.westNorthProvince;
                    $scope.westSouthProvince = provinceCategory.area.westSouthProvince;
                    $scope.eastNorthProvince = provinceCategory.area.eastNorthProvince;
                    $scope.letters = provinceCategory.letters;
                    $scope.letterProvince = provinceCategory.letterProvince;
                    $scope.letter=0;
                    $scope.isSelectedLetter=function(item){
                        return item==$scope.letter;
                    };
                    $scope.selectLetter=function(selectedLetter){
                        $scope.letter=selectedLetter;
                    };

                    $('#hint').click(function(e){
                        e.stopPropagation();
                    });

                    $scope.selectProvince=function(province){
                        $scope.currentProvince=province;
                        $scope.currentCity=$scope.currentProvince.cities[0];
                    };

                    //  $scope.currentCity=$scope.currentProvince.cities[0];
                    $scope.selectCity=function(city){
                        $scope.currentCity=city;
                    };
                });
            }],
            controllerAs:'citySelector'
        };
    });

})();