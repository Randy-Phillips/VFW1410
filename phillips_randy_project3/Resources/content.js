

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 25;
var rowCount = 3;
var margin = 10;
var truecanvasWidth = pWidth - (margin * rowCount) - margin;
var size = truecanvasWidth / rowCount ;

var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();


// Navigation Window Created

var myNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

myNav.open();


// Gallery Window Created

var galleryWin = Titanium.UI.createWindow({  
    title: "Gallery",
    backgroundColor:"8A8A8A",
    //layout: "horizontal"
    
});

var border = Ti.UI.createView({
	backgroundColor: "#8A8A8A",
	height: 1,
	width: pWidth,
	top: 20,
});


// Big Image Function

var openImage = function(){
	
	var imageWin = Ti.UI.createWindow ({
		title:  this.title,
		backgroundColor: "8A8A8A",
	});
	
	var bigView = Ti.UI.createView ({
		backgroundColor: "transparent",
		top: 20,
		right: 5,
		left: 5,
		bottom: 90
	});
	var bigImage = Ti.UI.createImageView ({
		image: this.image,
		//title: this.imageFile[i],
	});
	
	var bigLabel = Titanium.UI.createLabel({
	color:"black",
	text:this.desc,
	font:{fontSize:20,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto",
	bottom: 0
});


var goBack = Ti.UI.createLabel({
	text: "Go Back",
	backgroundColor: "#333",
	color: "#fff",
	height: 50,
	font:{fontSize:12,fontFamily:"Arial"},
	width: "100%",
	bottom: 0,
	textAlign: "center",
	zIndex: 8
});

var closeImageWin = function() {
	imageWin.close();
};

bigView.add(bigImage,bigLabel);
imageWin.add(bigView,goBack);
myNav.openWindow(imageWin);

goBack.addEventListener("click", closeImageWin);

};

// For Loop to add Gallery Boxes


var viewContainer = Ti.UI.createScrollView({
	width: pWidth,
	backgroundColor: "8A8A8A",
	layout: "horizontal",
	contentWidth: pWidth,
	top: 0,
	height: pHeight-border.top-border.height - 91,
	showVerticalScrollIndicator: true
});

for(var i=0; i < imageFiles.length; i++ ) {
	var imageBox = Ti.UI.createView({
		backgroundColor: "#33ccff",
		top: 10,
		left: 10,
		width: size,
		height: size
	});
	
	var thumb = Ti.UI.createImageView({
		image: "images/" + imageFiles[i],
		title: imageFiles[i],
		desc: imageFiles[i],
		width: imageBox.width * 2,
		top: 0
	});
	
	//imageBox.addEventListener("click", openImage);
    thumb.addEventListener("click", openImage);
	imageBox.add(thumb);
	viewContainer.add(imageBox);
		
};

galleryWin.add(border, viewContainer);


var closeButton = Ti.UI.createLabel({
	text: "Go Back",
	backgroundColor: "#333",
	color: "#fff",
	height: 50,
	font:{fontSize:12,fontFamily:"Arial"},
	width: "100%",
	bottom: 0,
	textAlign: "center",
	zIndex: 8
});

var closeWindow = function() {
	galleryWin.close();
};


closeButton.addEventListener("click", closeWindow);

galleryWin.add(closeButton);


var newWindow = function(){
	myNav.openWindow(galleryWin);
};

topName.addEventListener("click", newWindow);





