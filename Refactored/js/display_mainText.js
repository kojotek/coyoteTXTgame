display.mainText_counter = 0;
display.mainText_contentToDisplay = new String();
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
	if( display.mainText_writingFinished ) {
		display._writeByChar();
		display.mainText_writingFinished = false;
	}
}



display.writeln = function(str)
{
	display.mainText_contentToDisplay += ("</br>" + str);
	if( display.mainText_writingFinished ) {
		display._writeByChar();
		display.mainText_writingFinished = false;
	}
}


display._writeByChar = function()
{
	if (display.mainText_counter < display.mainText_contentToDisplay.length){
		if ( display.mainText_contentToDisplay.substr(display.mainText_counter,display.mainText_contentToDisplay.length).indexOf("</br>") === 0 ){
			display.mainText_counter += 4;
		}
		display.mainText_counter++;
		setTimeout( display._writeByChar, display.mainText_interval );
	}
	else{
		display.mainText_writingFinished = true;
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