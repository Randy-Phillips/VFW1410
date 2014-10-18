
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var itemCount = 25;
var rowCount = 3;
var margin = 10;
var truecanvasWidth = pWidth - (margin * rowCount) - margin;
var size = truecanvasWidth / rowCount ;


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

for(var i=0; i < itemCount; i++ ) {
	var view = Ti.UI.createView({
		backgroundColor: "#33ccff",
		top: margin,
		left: margin,
		width: size,
		height: size
	});
	var text = Ti.UI.createLabel({
		text: i+1, 
		color: "#fff"
		});
	view.add(text);
	viewContainer.add(view);
		
};

galleryWin.add(border, viewContainer);




var newWindow = function(){
	myNav.openWindow(galleryWin);
};

topName.addEventListener("click", newWindow);