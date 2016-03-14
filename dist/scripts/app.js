angular.module('maelsartapp',[])
    .controller('gallery-controller', function($scope) {
    
    $scope.artList = [
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            }, 
            artTitle: 'Birdheart',
            artYear:'2011',
            artTopic: 'animal',
            artImageUrl: 'assets/images/birdheart.jpg',
            emptyStatus: ''
        },
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            }, 
            artTitle: 'Battleship!',
            artYear:'2011',
            artTopic: 'military',
            artImageUrl: 'assets/images/battleship1.jpg',
            emptyStatus: ''
            
        },
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            }, 
            artTitle: 'Angry Chihuahua',
            artYear:'2011',
            artTopic: 'animal',
            artImageUrl: 'assets/images/angrychihuahua.jpg',
            emptyStatus: ''
        },
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            },
            artTitle: 'Candycane Bat',
            artYear:'2011',
            artTopic: 'animal',
            artImageUrl: 'assets/images/candycanebat copy.jpg',
            emptyStatus: ''
        },
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            }, 
            artTitle: 'Metal Months',
            artYear:'2011',
            artTopic: 'animal',
            artImageUrl: 'assets/images/metalmoths.jpg',
            emptyStatus: ''
        },
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            }, 
            artTitle: 'Santa Bird',
            artYear:'2011',
            artTopic: 'animal',
            artImageUrl: 'assets/images/santabird.jpg',
            emptyStatus: ''
        },
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            }, 
            artTitle: 'Santa Wizard',
            artYear:'2011',
            artTopic: 'person',
            artImageUrl: 'assets/images/santaskull.jpg',
            emptyStatus: ''
        },
        {
            artistUser: {
                firstName: 'Chris',
                lastName: 'Thompson'
            }, 
            artTitle: 'Bird Knife',
            artYear:'2011',
            artTopic: 'animal',
            artImageUrl: 'assets/images/birds.jpg',
            emptyStatus: ''
        }
    ];

    $scope.artImageClick = function(title){
        if(title === $scope.currentTitle){
            title = "";
        }
        $scope.currentTitle = title;
    };    
});




    

