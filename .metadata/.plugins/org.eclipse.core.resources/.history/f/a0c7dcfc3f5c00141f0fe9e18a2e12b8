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
		{title: "Death Knight", description: "the Death Knight", icon: "icons/icon-deathknight.jpg"},
		{title: "Druid", description: "Druid", icon: "icons/icon-druid.jpg"},
		{title: "Hunter", description: "Hunter", icon: "icons/icon-hunter.jpg"},
		{title: "Mage", description: "Mage", icon: "icons/icon-mage.jpg"},
		{title: "Monk", description: "Monk", icon: "icons/icon-monk.jpg"},
		{title: "Paladin", description: "Pally", icon: "icons/icon-paladin.jpg"},
		{title: "Priest", description: "Priest", icon: "icons/icon-priest.jpg"},
		{title: "Rogue", description: "Rogue", icon: "icons/icon-rogue.jpg"},
		{title: "Shaman", description: "Shaman", icon: "icons/icon-shaman.jpg"},
		{title: "Warlock", description: "Warlock", icon: "icons/icon-warlock.jpg"},
		{title: "Warrior", description: "Warrior", icon: "icons/icon-warrior.jpg"}	
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



// Data created and separated from JSON Data to use in rows and desc. page



for (var i=0, j=jsonList.classes.length; i<j; i++) {
	var classesRow = Ti.UI.createTableViewRow({
		title: jsonList.classes[i].title,
		desc:  jsonList.classes[i].description,
		leftImage: jsonList.classes[i].icon,
		hasChild: true
	});
	
	classesSection.add(classesRow);
	//classesRow.addEventListener("click", myDetails);
}



var jsonSections = [classesSection];

newTable.setData(jsonSections);

currentWindow.add(newTable);


