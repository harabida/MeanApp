angular.module('myApp').controller('mainCtrl', ['$scope',function($scope){
    $scope.medicaments = [
        {
            "id":0,
            "nom":"Algantil",
            "principeActif":"Ibuprofène",
            "classeTherapeutique":"Antalgiques",
            "formes":[{"forme":"comprimé","concentration":"200mg"},{"forme":"effervescent","concentration":"200mg"}],
            "prescription":["Maux de tete","Migraine","Fièvre","douleurs"],
            "contreIndications":["femmes enceintes"],
            "effetsIndesirables":["nausées"],
            "laboratoire":"Laprofane",
            "prix":19.0,
            "exciprients":[],
            "image" :"http://a397.idata.over-blog.com/300x255/0/60/08/22/PERLES-DE-cOMPTOIR/Algantil-2.jpg",
            "dateAjout" :"2016-04-22",
            "nbVisites":5
        },
        {
            "id":1,
            "nom":"Doliprane",
            "principeActif":"Paracetamol",
            "classeTherapeutique":"Antalgiques",
            "formes":[{"forme":"comprimé","concentration":"500mg"},{"forme":"effervescent","concentration":"500mg"}],
            "prescription":["Maux de tete","Migraine"],
            "contreIndications":["femmes enceintes"],
            "effetsIndesirables":["nausées"],
            "laboratoire":"Sanofi",
            "prix":29.0,
            "exciprients":[],
            "image" :"http://www.allochomage.com/wp-content/uploads/2014/12/doliprane-1000mg.jpg",
            "dateAjout" :"2016-04-23",
            "nbVisites":30

        },
        {
            "id":2,
            "nom":"Brufen",
            "principeActif":"Ibuprofène",
            "classeTherapeutique":"Antalgiques",
            "formes":[{"forme":"comprimé","concentration":"400mg"}],
            "prescription":["Maux de tete","Migraine"],
            "contreIndications":["femmes enceintes"],
            "effetsIndesirables":["nausées"],
            "laboratoire":"Abbott",
            "prix":30.0,
            "exciprients":[],
            "image" :"http://www.docsimon.co.uk/article_images.php?action=sendtype&type=3&id=6251",
            "dateAjout" :"2016-04-21",
            "nbVisites":2

        }];
}]);