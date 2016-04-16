angular.module('maelsartapp',[])
    .controller('gallery-controller', function($scope) {
        
    $scope.artistUser = {
        firstName: 'Chris', 
        lastName: 'Thompson',
        emailAddress: 'csthompsonart@gmail.com'
        }
    
    $scope.artList = [
        {   
        artTitle: 'Battleship',
        artYear:'2011',
        artTopic: 'military',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/battleship1.jpg',
        artMedium: 'Acrylic on canvas',
        artPurchase: ['Print'],
        printSize: '11" x 14"',
        originalSize: 'x',
        artOriginalCost: 'xx'
        },
        {
        artTitle: 'Owl and Skull',
        artYear:'2010',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/owlskull.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Original painting','Print'],
        printSize: '8" x 10"',
        originalSize: '16" x 20"',
        artOriginalCost: '$650.00'
        },
        { 
        artTitle: 'Angry Chihuahua',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/angrychihuahua.jpg',
        artMedium: 'Acrylic on canvas',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        { 
        artTitle: 'Humpty',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/humptyegg.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Original painting'],
        printSize: 'x',
        originalSize: '12" x 24"',
        artOriginalCost: '$750.00'
        },
        {
        artTitle: 'Candycane Bat',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/candycanebat.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Print'],
        printSize: '11" x 14"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        { 
        artTitle: 'Metal Moths',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/metalmoths.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Print'],
        printSize: '11" x 14"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Santa Bird',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/santabird.jpg',
        artMedium: 'Acrylic on canvas',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Santa\'s Favorite',
        artYear:'2011',
        artTopic: 'person',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/santaskull.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Blades',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/birds.jpg',
        artMedium: 'Oil on board',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Zombie Dance',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/zombiedance.jpg',
        artMedium: 'Acrylic on board',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Banana Slug',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/truebanana.jpg',
        artMedium: 'Oil on board',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Swiss Death',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/swissdeath.jpg',
        artMedium: 'Acrylic on board',
        artPurchase: ['Original painting','Print'],
        printSize: '5" x 7"',
        originalSize: '5" x 7"',
        artOriginalCost: '$350.00'
        },
        {
        artTitle: 'Snail Tank',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/snailtank.jpg',
        artMedium: 'Oil on board',
        artPurchase: ['Print'],
        printSize: '8" x 10',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Tiny Wedding',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/tinywedding.jpg',
        artMedium: 'Oil on canvas board',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Zombie Cheerleader',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/zombiechearleader.jpg',
        artMedium: 'Acrylic on board',
        artPurchase: ['Original painting','Print'],
        printSize: '8" x 10"',
        originalSize: '9" x 12"',
        artOriginalCost: '$450.00'
        },
        {
        artTitle: 'Squishs',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/stuffeddinos.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Skull Warrior',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/skullwarrior.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Original painting','Print'],
        printSize: '8" x 10"',
        originalSize: '8" x 10"',
        artOriginalCost: '$950.00'
        },
        {
        artTitle: 'I\'m melting',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/armyman.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Original painting','Print'],
        printSize: '9" x 12"',
        originalSize: '18" x 24"',
        artOriginalCost: '$750.00'
        },
        {
        artTitle: 'Seal Pup',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/sealpupbat.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Bundt Satan',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/bundtsatan.jpg',
        artMedium: 'Acrylic on board',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Crow and Skull',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/crowandskull.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Original painting','Print'],
        printSize: '8" x 10"',
        originalSize: '9" x 12"',
        artOriginalCost: '$450.00'
        },
        {
        artTitle: 'Scarecrow',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/scarecrow.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Shut Your Trap',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/dentaltrap.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Dangerous Loris',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/gasmaskloris.jpg',
        artMedium: 'Acrylic on board',
        artPurchase: ['Print'],
        printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Gumballs',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/gumballs.jpg',
        artMedium: 'Watercolor & ink on paper',
        artPurchase: ['Original painting'],
        printSize: 'x',
        originalSize: '11" x 17"',
        artOriginalCost: '$350.00'
        },
        {
        artTitle: 'Death From Above',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/skullpilot.jpg',
        artMedium: 'Oil on canvas',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Krampus',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/krampus.jpg',
        artMedium: 'Acrylic on board',
        artPurchase: ['Print'],
        printSize: '9" x 12" ',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Littlest Pirate',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/littlepirate.jpg',
        artMedium: 'Oil on board',
        artPurchase: ['Original painting','Print'],
        printSize: '8" x 10"',
        originalSize: '8"x 10"',
        artOriginalCost: '$450.00'
        },
        {
        artTitle: 'Heavy Metal Warrior',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/metalwarrior.jpg',
        artMedium: 'Acrylic on board',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Noble Owl',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/owlarmor.jpg',
        artMedium: 'Oil on board',
        artPurchase: ['Print'],
         printSize: '8" x 10"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Born Anchors',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/birdheart.jpg',
        artMedium: 'Acrylic on canvas',
        artPurchase: ['None available'],
        printSize: 'x',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
        {
        artTitle: 'Santa Wizard',
        artYear:'2011',
        artTopic: 'animal',
        artImageUrl: 'http://s3.amazonaws.com/christhompsonproductions/santariding.jpg',
        artMedium: 'Oil on board',
        artPurchase: ['Print'],
        printSize: '9" x 12"',
        originalSize: 'x',
        artOriginalCost: 'x'
        },
    ];
        
    $scope.artDivide = (function(){
        $scope.columnClass = {artone:'col-md-3', arttwo:'col-md-3', artthree:'col-md-3', artfour:'col-md-3'};
        $scope.columnDriver = 4;

            $scope.columnMath = Math.ceil($scope.artList.length / $scope.columnDriver)
            var smallindex = 0
            $scope.smallArtList = Array($scope.columnDriver);
            $scope.smallArtListTemp = [];

            for(i=0;i < $scope.artList.length; i++){      
                $scope.smallArtListTemp.push($scope.artList[i]);
                var artContainerLimit = i % $scope.columnMath
                if(artContainerLimit === $scope.columnMath-1){
                    $scope.smallArtList[smallindex] = $scope.smallArtListTemp;
                    smallindex +=1;
                    $scope.smallArtListTemp = [];
                };
            };
    })();
    
    $scope.artImageClick = function(title){
        if(title === $scope.currentTitle){
            title = '';
            $scope.isLarger = '';
            $scope.currentTitle = '';
            angular.element(document.getElementsByTagName('select')).prop('selectedIndex',0);
            $scope.payPalButton ='';
            $scope.revealCost = '';
            $scope.payPalMerchantID = '';
            $scope.clickedArtTitle = '';
            $scope.clickedArtMedium = '';
            Object.keys($scope.columnClass).forEach(function(i) {
                $scope.columnClass[i] = 'col-md-3';
            });
        } else {           
            $scope.clickedArtTitle = $scope.smallArtList[this.$parent.$index][this.$index].artTitle;
            $scope.clickedArtMedium = $scope.smallArtList[this.$parent.$index][this.$index].artMedium;
            $scope.clickedArtPurchase = $scope.smallArtList[this.$parent.$index][this.$index].artPurchase;
            $scope.clickedOriginalCost = $scope.smallArtList[this.$parent.$index][this.$index].artOriginalCost;
            $scope.clickedPrintSize = $scope.smallArtList[this.$parent.$index][this.$index].printSize;
            $scope.clickedOriginalSize = $scope.smallArtList[this.$parent.$index][this.$index].originalSize;
            $scope.currentTitle = title;
            $scope.isLarger = 'larger';
            Object.keys($scope.columnClass).forEach(function(i) {
                $scope.columnClass[i] = '';
            });
            window.scrollTo(0, 100);
        };  
    }
    
    $scope.artZero = function(){
        $scope.revealCost = '';
        $scope.payPalButton = '';
    }
    
    $scope.artCost = function(purchasetype){ 
        if(purchasetype === 'Original painting'){
            $scope.revealCost = $scope.clickedArtMedium + ' ' + $scope.clickedOriginalSize + ' - ' + $scope.clickedOriginalCost
            $scope.payPalButton = '/templates/pricePointOriginal.html'
            $scope.payPalMerchantID = "V49LQU5XHP2NU"
        };
        
        if(purchasetype === 'Print'){
            $scope.revealCost = $scope.clickedPrintSize + ' - $25.00'
            $scope.payPalButton = '/templates/pricePointOne.html'
            $scope.payPalButtonID = 'AEATZEN7TS7L6'
        };
        
        if(purchasetype === 'T-Shirt'){
            $scope.revealCost = '$50.00'
            $scope.payPalButton = '/templates/pricePointOne.html'
            $scope.payPalButtonID = '7WE9MTDRNAJ8A'
        }  
    };
});

document.body.style.opacity = 0;
var intervalID = window.setTimeout(delayUntilLoaded, 2000);
function delayUntilLoaded() {
  document.body.style.opacity = 1;
}