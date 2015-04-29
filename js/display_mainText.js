display.mainText = new Object();
display.mainText._counter = 0;
display.mainText._contentToDisplay = new String();
display.mainText._intervalFuncHandler;
display.mainText._interval = 10;


display.mainText.write = function(str)
{
	display.mainText._counter = 0;
	display.mainText._contentToDisplay = str;
	display.mainText._intervalFuncHandler = setInterval(display.mainText._writeByChar, display.mainText._interval);
}


display.mainText._writeByChar = function()
{
	if (display.mainText._counter < display.mainText._contentToDisplay.length){
		display.mainText._counter++;
	}
	else{
		clearInterval(display.mainText._intervalFuncHandler);
	}
	document.getElementById("mainTextField").innerHTML = display.mainText._contentToDisplay.substring(0, display.mainText._counter);
}


display.mainText.setInterval = function( i )
{
	if (i >= 0){
		display.mainText._interval = i;
	}
	else{
		console.log("Nieprawidlowa wartosc!");
	}
}