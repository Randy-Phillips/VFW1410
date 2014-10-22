

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "303030",
	
});


var backDrop = Ti.UI.createView({
	backgroundColor:"575757",
	top: 20,
	bottom: 20
});

var textField = Ti.UI.createView({
	backgroundColor:"FFF8E3",
	top: 40,
	left: 20,
	right: 20,
	bottom: 80
});


var nextButton = Ti.UI.createView({
	backgroundColor: "FFD754",
	border: 2,
	borderColor: "black",
	width: 120,
	height: 40,
	right: 10,
	bottom: 30
	
	
});

var backButton = Ti.UI.createView({
	backgroundColor: "FFD754",
	border: 2,
	borderColor: "black",
	width: 120,
	height: 40,
	left: 10,
	bottom: 30
});

var nextText = Titanium.UI.createLabel({
	color:"black",
	text:"Next",
	font:{fontSize:16,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto"
});

var backText = Titanium.UI.createLabel({
	color:"black",
	text:"Previous",
	font:{fontSize:16,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto"
});

var loadFile = require('content');

nextButton.add(nextText);
backButton.add(backText);
mainWindow.add(backDrop,nextButton,backButton,textField);
mainWindow.open();

