
var androidList = [
	{title: "Galaxy Note 4", description: "this is the galaxy note 4", specs:"5.8 inch display"}, 
	{title: "Moto X \(2014\)", description: "this is the moto x", specs:"4.7 inch display"},
	{title: "HTC One M8", description: "this is the htc one m8", specs:"5.5 inch dplay"}, 
	{title: "LG G3", description: "this is the lgg3", specs:"5.6 inch display"} 
];



var iphoneList = [
	{title: "iPhone 6 Plus", description: "This is the iPhone 6 Plus", specs:"Display Size = 5.5inch"}, 
	{title: "iPhone 6", description: "this is the iphone 6", specs:"4.7 inch display"}, 
	{title: "iPhone 5s", description: "this is the iphone 5s", specs:"4.3 inch display"}, 
	{title: "iPhone 5c", description: "this is the iphone 5c", specs:"4.3 inch display"} 
];





var newTable = Ti.UI.createTableView({
	data: androidList,
	top: topName.height + topName.top,
	zIndex:10,
	left: 10,
	right: 10,
});

if(Ti.Platform.name === "iPhone OS"){
	newTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var androidSection = Ti.UI.createTableViewSection ({
	headerTitle: "Android Phones",
	footerTItle: "Latest Android Phones",
});

var iphoneSection = Ti.UI.createTableViewSection ({
	headerTitle: "iPhones",
	footerTItle: "Latest iPhones",
});


var myDetails = function(){
	var detailWindow = Ti.UI.createWindow({
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

detailTopName.add(detailLabel);
detailWindow.add(detailView,detailTopName);

detailWindow.open();

};

for (var i=0, j=androidList.length; i<j; i++) {
	var androidRow = Ti.UI.createTableViewRow({
		title: androidList[i].title,
		hasChild: true
	});
	androidSection.add(androidRow);
	androidRow.addEventListener("click", myDetails);
}

for (var i=0, j=iphoneList.length; i<j; i++) {
	var iphoneRow = Ti.UI.createTableViewRow({
		title: iphoneList[i].title,
		hasChild: true
	});
	
	iphoneSection.add(iphoneRow);
	iphoneRow.addEventListener("click", myDetails);
}



var phoneSections = [androidSection, iphoneSection];

newTable.setData(phoneSections);

mainWin.add(newTable);

//buttonView.addEventListener("click", displayItems);