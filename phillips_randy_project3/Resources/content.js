

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 25;
var rowCount = 3;
var margin = 10;
var truecanvasWidth = pWidth - (margin * rowCount) - margin;
var size = truecanvasWidth / rowCount ;

var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();



var image = Ti.UI.createImageView ({
	image: "",
});

// Navigation Window Created

var myNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

myNav.open();


// Gallery Window Created

var galleryWin = Titanium.UI.createWindow({  
    title: "Gallery",
    backgroundColor:"#fff",
    //layout: "horizontal"
    
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20,
});

var viewContainer = Ti.UI.createScrollView({
	width: pWidth,
	backgroundColor: "#fef",
	layout: "horizontal",
	contentWidth: pWidth,
	top: 0
});


// For Loop to add Gallery Boxes

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
		width: imageBox.width + 7,
		top: 0
	});
	
	
	imageBox.add(thumb);
	viewContainer.add(imageBox);
		
};

galleryWin.add(border, viewContainer);




var newWindow = function(){
	myNav.openWindow(galleryWin);
};

topName.addEventListener("click", newWindow);