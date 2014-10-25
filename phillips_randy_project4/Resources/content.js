// Navigation Window Created




// Open Gallery Window

var openGallery = function(){
	var galleryWindow = Ti.UI.createWindow({
		title: "Random Image Gallery",
		backgroundColor: "786DBD",
		url: "gallery.js"
		
	});
	myNav.openWindow(galleryWindow);
};

galleryView.addEventListener("click", openGallery);

// Open Data Window

var openData = function(){
	var dataWindow = Ti.UI.createWindow({
		title: "Class Detail Page",
		backgroundColor: "E83F3F",
		url: "datapage.js"
		
	});
	myNav.openWindow(dataWindow);
};

dataView.addEventListener("click", openData);

// Open Custom Window

var openCustom = function(){
	var customWindow = Ti.UI.createWindow({
		title: "Image Slider",
		backgroundColor: "E68B4E",
		url: "custompage.js"
		
	});
	myNav.openWindow(customWindow);
};

customView.addEventListener("click", openCustom);


