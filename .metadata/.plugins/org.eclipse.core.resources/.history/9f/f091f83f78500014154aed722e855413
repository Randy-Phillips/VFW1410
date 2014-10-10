// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');



//
// mainWindow
//
var mainWin = Titanium.UI.createWindow({  
    title: "mainWindow",
    backgroundColor:"#fff"
    
});



var mainLabel = Titanium.UI.createLabel({
	color:"#999",
	text:"I am Window 1",
	font:{fontSize:20,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto"
});

mainWin.add(mainLabel);

//
// create controls tab and root window
//
var secondWindow = Titanium.UI.createWindow({  
    title:"secondWindow",
    backgroundColor: "#C4C4C4",
    top: 5
    
});


var label2 = Titanium.UI.createLabel({
	color:"#999",
	text:"I am Window 1",
	font:{fontSize:20,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto",
	zIndex: 4,
});

var topName = Ti.UI.createView ({
	backgroundColor: "#C4C4C4",
	top: 20,
	right:10,
	left: 10,
	height: 70,
	zIndex: 2,
});

var buttonView = Ti.UI.createView ({
	backgroundColor: "E3E6E4",
	top: 20,
	right: 10,
	left: 10,
	bottom: 10,
	zIndex: 1
});


var loadFile = require('content');


mainWin.open();
mainWin.add(mainLabel,buttonView,topName,label2);



