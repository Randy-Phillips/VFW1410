
// JSON Data

		// Android Phone List

var androidList = [
	{title: "Galaxy Note 4", description: "The Galaxy Note 4 is Samsung Flagship device typically released in 4th quarter. The original Galaxy note was the start of it all when it comes to big screen sizes.", specs:"5.7"}, 
	{title: "Moto X \(2014\)", description: "the Moto X \(2014\) is the second version of the Moto X. With Moto Maker and the ability to customize the phone to fit you appeals to anyone and creates a unique device build for you.", specs:"5.2"},
	{title: "HTC One M8", description: "HTC One M8 is the leading phone with the highest quality speakers. With the dual front facing speakers, it creates a great listening experience for anyone.", specs:"5"}, 
	{title: "LG G3", description: "LG G3's unique power and volume rocker placement stands them out from the crowd of cookie cutter style phones. Along side great specs, this phone is a great phone to have.", specs:"5.5"} 
];

		// iPhone Phone List

var iphoneList = [
	{title: "iPhone 6 Plus", description: "iPhone 6 Plus \" bigger is bigger\" marketing push is a great looking device. It\'s something Apple has not tried yet and it seems to be catching the attention from a lot of people, good and bad!.", specs:"5.5"}, 
	{title: "iPhone 6", description: "iPhone 6 is their \"Lets keep it on the safe side\" device. They did release a phone with a bigger screen size but kept it in the lower end of the spectrum when it comes to screen sizes and smart phones.", specs:"4.7"}, 
	{title: "iPhone 5s", description: "iPhone 5s introduction of the iTouch sensor really was a great addtion to our pocket devices. They did it right unlike Samsung and make a great sensor to make it quick and easy to unlock your device.", specs:"4"}, 
	{title: "iPhone 5c", description: "iPhone 5c is a great phone for the person on a budget that wants style and functionality. It was a great option that Apple introduced and I would like to see it again when the next batch of iPhones are released.", specs:"4"} 
];


// Navigation Window Created

var myNav = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

myNav.open();

// Table Created to create Navigation Buttons from my JSON data 

var newTable = Ti.UI.createTableView({
	top: topName.height + topName.top,
	zIndex:10,
	left: 10,
	right: 10,
});

// Table Styling for iOS

if(Ti.Platform.name === "iPhone OS"){
	newTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

// Sections Created for header and footer

var androidSection = Ti.UI.createTableViewSection ({
	headerTitle: "Android Phones",
	footerTitle: "Latest Android Phones",
});

var iphoneSection = Ti.UI.createTableViewSection ({
	headerTitle: "iPhones",
	footerTitle: "Latest iPhones",
});

// Logic for my Description and Specs Window (Second Window)

var myDetails = function(){
	var detailWindow = Ti.UI.createWindow({
		title: this.title,
		backgroundColor: "f5f5f5"
		
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
		top: 20,
		right:10,
		left: 10,
		height: 70,
		zIndex: 2,
	});
	
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

// Data created and separated from JSON Data to use in rows and desc. page

for (var i=0, j=androidList.length; i<j; i++) {
	var androidRow = Ti.UI.createTableViewRow({
		title: androidList[i].title,
		desc: androidList[i].description,
		specs: "Screen Size: " + androidList[i].specs + " inches.",
		hasChild: true
	});
	androidSection.add(androidRow);
	androidRow.addEventListener("click", myDetails);
}

for (var i=0, j=iphoneList.length; i<j; i++) {
	var iphoneRow = Ti.UI.createTableViewRow({
		title: iphoneList[i].title,
		desc: iphoneList[i].description,
		specs: "Screen Size: " + iphoneList[i].specs + " inches.",
		hasChild: true
	});
	
	iphoneSection.add(iphoneRow);
	iphoneRow.addEventListener("click", myDetails);
}



var phoneSections = [androidSection, iphoneSection];

newTable.setData(phoneSections);

mainWin.add(newTable);


