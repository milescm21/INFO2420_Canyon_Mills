	PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "../../image_and_rez/print1.png"
	PrintButton2.src = "../../image_and_rez/print2.png"
	logo1.src = "../../image_and_rez/logo1.new.png"
	logo2.src = "../../image_and_rez/newlogo1.png"
}


	var imgArray = new Array(
		'CoupleBike3lg.jpg',
		'CoupleHikingLg.jpg',
		'CoupleEveningLg.jpg',
		'CoupleSnowBoardLg.jpg'
	);


	var titleArray = new Array(
		'Couple Biking',
		'Couple Hiking',
		'Cute Sunset',
		'Couple Snowboarding'
	);
			
	var imgPath = "../../image_and_rez/large/";
		
	function swapImage(imgID) {

		var theImage = document.getElementById('theImage');
		var textDiv = document.getElementById('bottomText');

		var newImg;
		var textTitle;

		newImg = imgArray[imgID];
		theImage.src = imgPath + newImg;

		textTitle=titleArray[imgID];

		textDiv.innerHTML = textTitle;
	}
			
	function preloadImages() {		
		for(var i = 0; i < imgArray.length; i++) {
			var tmpImg = new Image;
			tmpImg.src = imgPath + imgArray[i];
		}
	}
    
    function moveimage(img_name,img_src) {
        document[img_name].src=img_src
    }