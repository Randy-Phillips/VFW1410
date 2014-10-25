//alert("data");

var currentWindow = Ti.UI.currentWindow;



var newTable = Ti.UI.createTableView({
	//ßbackgroundColor: "E83F3F",
	top: 20,
	bottom: 20,
	zIndex:10,
	left: 0,
	right: 0,
});

var iconLoc = "icons/icon-";
var imageLoc = "classimages/";
var jsonList = 

	{"classes": [
		{title: "Death Knight", description: "the Death Knight", icon: "icons/icon-deathknight.jpg", specs: "test"},
		{title: "Druid", description: "Druid", icon: "icons/icon-druid.jpg", specs: "test"},
		{title: "Hunter", description: "Hunter", icon: "icons/icon-hunter.jpg", specs: "test"},
		{title: "Mage", description: "Mage", icon: "icons/icon-mage.jpg", specs: "test"},
		{title: "Monk", description: "Monk", icon: "icons/icon-monk.jpg", specs: "test"},
		{title: "Paladin", description: "Pally", icon: "icons/icon-paladin.jpg", specs: "test"},
		{title: "Priest", description: "Priest", icon: "icons/icon-priest.jpg", specs: "test"},
		{title: "Rogue", description: "Rogue", icon: "icons/icon-rogue.jpg", specs: "test"},
		{title: "Shaman", description: "Shaman", icon: "icons/icon-shaman.jpg", specs: "test"},
		{title: "Warlock", description: "Warlock", icon: "icons/icon-warlock.jpg", specs: "test"},
		{title: "Warrior", description: "Warrior", icon: "icons/icon-warrior.jpg", specs: "test"}	
			],
		
	};


if(Ti.Platform.name === "iPhone OS"){
	newTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var racesSection = Ti.UI.createTableViewSection ({
	
	headerTitle: "World of Warcraft Races",
	//footerTitle: "",
});

var classesSection = Ti.UI.createTableViewSection ({
	headerTitle: "World of Warcraft Classes",
//	footerTitle: "",
});


// Detail Window created

var myDetails = function(){
	

	var detailWindow = Ti.UI.createWindow({
		title: this.title,
		backgroundColor: "f5f5f5"
		
	});
	
	var newNav = Ti.UI.iOS.createNavigationWindow({
		window: detailWindow
	});
	
	var detailLabel = Titanium.UI.createLabel({
		color:"525252",
		text:this.title,
		font:{fontSize:20,fontFamily:"Helvetica Neue"},
		textAlign: "center",
		width: "auto"
	});
	
	var detailTopName = Ti.UI.createView ({
		backgroundColor: "#C4C4C4",
		top: 2});
	
	var detailView = Ti.UI.createView ({
		backgroundColor: "E3E6E4",
		top: 20,
		right: 10,
		left: 10,
		bottom: 10,
		zIndex: 1
});

var detailText = Ti.UI.createLabel({
	text: this.desc,
	font:{fontSize:16,fontFamily:"Arial"},
	top: detailTopName.height + detailTopName.top + 40,	
	left: 10,
	right: 10,
	zIndex: 10
});	

var specText = Ti.UI.createLabel({
	text: this.specs,
	font:{fontSize:16,fontFamily:"Arial"},
	top: detailText.top + 170,
	left: 10,
	right: 10,
	zIndex: 10
});	

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
	detailWindow.close();
};


closeButton.addEventListener("click", closeWindow);

detailTopName.add(detailLabel);
detailWindow.add(detailView,detailTopName,detailText,specText, closeButton);

myNav.openWindow(detailWindow);

};


// Rows Created for Classes

for (var i=0, j=jsonList.classes.length; i<j; i++) {
	var classesRow = Ti.UI.createTableViewRow({
		title: jsonList.classes[i].title,
		desc:  jsonList.classes[i].description,
		leftImage: jsonList.classes[i].icon,
		hasChild: true
	});
	
	classesSection.add(classesRow);
	classesRow.addEventListener("click", myDetails);
}


var jsonSections = [classesSection];

newTable.setData(jsonSections);

currentWindow.add(newTable);


