display.mainText_counter = 0;
display.mainText_contentToDisplay = new String();
display.mainText_intervalFuncHandler;
display.mainText_interval = 10;
display.mainText_writingFinished = true;


display.clear = function()
{
	display.mainText_counter = 0;
	display.mainText_contentToDisplay = "";
	document.getElementById("mainTextField").innerHTML = "";
}


display.write = function(str)
{
	display.mainText_contentToDisplay += str;
	display.mainText_intervalFuncHandler = setInterval(display._writeByChar, display.mainText_interval);
}



display.writeln = function(str)
{
	display.mainText_counter += 5;
	display.mainText_contentToDisplay += ('</br>'+ str);
	display.mainText_intervalFuncHandler = setInterval(display._writeByChar, display.mainText_interval);
}


display._writeByChar = function()
{
	if (display.mainText_counter < display.mainText_contentToDisplay.length){
		display.mainText_counter++;
	}
	else{
		clearInterval(display.mainText_intervalFuncHandler);
	}
	document.getElementById("mainTextField").innerHTML = display.mainText_contentToDisplay.substring(0, display.mainText_counter);
}


display.setWritingInterval = function( i )
{
	if (i >= 0){
		display.mainText_interval = i;
	}
	else{
		console.log("Nieprawidlowa wartosc!");
	}
}