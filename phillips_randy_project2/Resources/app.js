// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


// Main Window


var mainWin = Titanium.UI.createWindow({  
    title: "mainWindow",
    backgroundColor:"#fff"
    
});

var mainLabel = Titanium.UI.createLabel({
	color:"525252",
	text:"List of Phones",
	font:{fontSize:20,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto"
});

var topName = Ti.UI.createView ({
	backgroundColor: "#C4C4C4",
	top: 20,
	right:10,
	left: 10,
	height: 70,
	zIndex: 2,
});

var mainView = Ti.UI.createView ({
	backgroundColor: "E3E6E4",
	top: 20,
	right: 10,
	left: 10,
	bottom: 10,
	zIndex: 1
});


var loadFile = require('content');


mainWin.open();
topName.add(mainLabel);
mainWin.add(mainView,topName);




