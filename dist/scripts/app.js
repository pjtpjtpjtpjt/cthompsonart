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
            artMedium: 'Oil on canvas',
            artPurchase: ['original painting','print'],
            artOriginalCost: '$350.00'
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
            artMedium: 'Oil on canvas',
            artPurchase: ['original painting','print','tshirt'],
            artOriginalCost: '$350.00'
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
            artMedium: 'Oil on canvas',
            artPurchase: ['print','tshirt'],
            artOriginalCost: '$350.00'
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
            artMedium: 'Oil on canvas',
            artPurchase: ['original painting','print','tshirt'],
            artOriginalCost: '$350.00'
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
            artMedium: 'Oil on canvas',
            artPurchase: ['original painting','print','tshirt'],
            artOriginalCost: '$350.00'
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
            artMedium: 'Oil on canvas',
            artPurchase: ['original painting','print','tshirt'],
            artOriginalCost: '$350.00'
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
            artMedium: 'Oil on canvas',
            artPurchase: ['original painting','print','tshirt'],
            artOriginalCost: '$350.00'
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
            artMedium: 'Oil on canvas',
            artPurchase: ['original painting','print','tshirt'],
            artOriginalCost: '$250.00'
        }
    ];

    $scope.artImageClick = function(title){
        if(title === $scope.currentTitle){
            title = '';
            angular.element(document.getElementsByTagName('select')).prop('selectedIndex',0);
            $scope.payPalButton ='';
            $scope.displayCost = '';
        }
        $scope.visibleIndex = this.$index;
        $scope.currentTitle = title;                            
    };
    
    $scope.artZero = function(){
        $scope.displayCost = '';
        $scope.payPalButton = '';
    }
    
    $scope.artCost = function(value){ 
        
        if(value === 'original painting'){
            $scope.displayCost = $scope.artList[$scope.visibleIndex].artOriginalCost
            $scope.payPalButton = "/templates/pricePointOne.html"
            $scope.payPalButtonID = 'UJCFP8Y8T38EJ'
        };
        
        if(value === 'print'){
            $scope.displayCost = '$25.00'
            $scope.payPalButton = "/templates/pricePointOne.html"
            $scope.payPalButtonID = 'AEATZEN7TS7L6'
        };
        
        if(value === 'tshirt'){
            $scope.displayCost = '$35.00'
            $scope.payPalButton = "/templates/pricePointOne.html"
            $scope.payPalButtonID = '7WE9MTDRNAJ8A'
        }
        
    };
   
});




    

