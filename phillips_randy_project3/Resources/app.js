
Titanium.UI.setBackgroundColor('#000');


// Main Window


var mainWin = Titanium.UI.createWindow({  
    title: "Main Application",
    backgroundColor:"#fff"
    
});

var mainLabel = Titanium.UI.createLabel({
	color:"black",
	text:"Open Gallery",
	font:{fontSize:20,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto"
});

var topName = Ti.UI.createView ({
	backgroundColor: "ADADAD",
	border: 1,
	borderRadius: 110,
	height: 220,
	width: 220,
	zIndex: 3,
});

var mainView = Ti.UI.createView ({
	backgroundColor: "4A4A4A",
	borderColor: "black",
	border: 1,
	borderRadius: 120,
	height: 240,
	width: 240,
	zIndex: 2,
});

var backView = Ti.UI.createView ({
	backgroundColor: "8A8A8A",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: 1,
});


var loadFile = require('content');



topName.add(mainLabel);
mainWin.add(mainView,topName,backView);




