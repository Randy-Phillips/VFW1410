var myText = ["Lets Count to 5 Please", "One", "Two", "Three", "Four", "Five", "We have counted to five, the end!"];
var i = 0;
var x = myText.length - 1;

var textLabel = Titanium.UI.createLabel({
	color:"black",
	text: myText[i],
	font:{fontSize:20,fontFamily:"Helvetica Neue"},
	textAlign: "center",
	width: "auto"
});


var nextText = function() {
	if (i < x) {
		i = i + 1;
		textLabel.text = myText[i];
	} else {
		i = 0;
		textLabel.text = myText[i];
	};
};


var prevText = function() {
	if (i > 0) {
		i = i - 1;
		textLabel.text = myText[i];
	} else {
		i = x;
		textLabel.text = myText[i];
	};
};


textField.add(textLabel);
	
nextButton.addEventListener("click", nextText);
backButton.addEventListener("click", prevText);


