
Titanium.UI.setBackgroundColor('#000');




var pWidth = Ti.Platform.displayCaps.platformWidth;
var boxWidth = ( pWidth / 3 ) - 15;
// Main Window


var mainWin = Titanium.UI.createWindow({  
    title: "Main Application",
    backgroundColor:"#fff"
    
});

var classLabel = Titanium.UI.createLabel({
	color:"fff",
	text:"Randy Phillips    |    Visual Frameworks 1410",
	font:{fontSize:14,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto"
});

var classView = Ti.UI.createView ({
	backgroundColor: "303030",
	border: 1,
	borderRadius: 2,
	height: 50,
	bottom: 10,
	right: 10,
	zIndex: 3,
});



var mainView = Ti.UI.createView ({
	backgroundColor: "E0CAB4",
	borderColor: "black",
	border: 1,
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: 2,
});

var backView = Ti.UI.createView ({
	backgroundColor: "ffffff",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: 1,
});



//var loadFile = require('content');

var galleryView = Ti.UI.createView ({ 
	backgroundColor: "786DBD",
	borderColor: "black",
	border: 1,
	height: boxWidth,
	width: boxWidth,
	left: 10,
	top: 160,
	zIndex: 5,
	});

var galleryLabel = Titanium.UI.createLabel({
	color:"331700",
	text:"Random Image",
	font:{fontSize:16,fontFamily:"Helvetica Neue", fontWeight: "bold"},
	textAlign: "center",
	width: "auto"
});
	
var dataView = Ti.UI.createView ({ 
	backgroundColor: "E83F3F",
	borderColor: "black",
	border: 1,
	height: boxWidth,
	width: boxWidth,
	left: galleryView.left + galleryView.width + 10,
	top: 160,
	zIndex: 5,
	});

var dataLabel = Titanium.UI.createLabel({
	color:"331700",
	text:"Class Details",
	font:{fontSize:16,fontFamily:"Helvetica Neue", fontWeight: "bold"},
	textAlign: "center",
	width: "auto"
});
	
var customView = Ti.UI.createView ({ 
	backgroundColor: "E68B4E",
	borderColor: "black",
	border: 1,
	height: boxWidth,
	width: boxWidth,
	left: dataView.left + dataView.width + 10,
	top: 160,
	zIndex: 5,
	});

var customLabel = Titanium.UI.createLabel({
	color:"331700",
	text:"Image Slider",
	font:{fontSize:16,fontFamily:"Helvetica Neue", fontWeight: "bold"},
	textAlign: "center",
	width: "auto"
});


var myNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

myNav.open();


var loadFile = require('content');

galleryView.add(galleryLabel);
dataView.add(dataLabel);
customView.add(customLabel);

mainWin.add(galleryView,customView,dataView);
classView.add(classLabel);

mainWin.add(mainView,classView,backView);




