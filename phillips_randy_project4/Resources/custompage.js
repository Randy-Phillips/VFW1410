//alert("custom");

var currentWindow = Ti.UI.currentWindow;


var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();
var lastIndex = imageFiles.length-1;

var slider = Titanium.UI.createSlider({
    bottom: 50,
    min: 0,
    max: lastIndex,
    width: '90%',
    value: lastIndex
    });
    
var label = Ti.UI.createLabel({
    text: slider.value,
    width: '100%',
    height: 'auto',
    top: 30,
    left: 0,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    });

slider.addEventListener('change', function(e) {
    
    var i = Math.round(slider.value);
    mainImage.image = "images/" + imageFiles[i];
    label.text = "images/" + imageFiles[i];
});

var newView = Ti.UI.createView({
	backgroundColor: "transparent"

	
});

var imageView = Ti.UI.createView({
	backgroundColor: "transparent",
	top:120,
	right:15,
	left: 15,
	bottom:140
	
});
var i = label.text;
var mainImage = Ti.UI.createImageView({
		image: "images/" + imageFiles[i] ,
		zIndex: 200,
		
	});
	
imageView.add(mainImage);
newView.add(slider, label, imageView);
currentWindow.add(newView);
