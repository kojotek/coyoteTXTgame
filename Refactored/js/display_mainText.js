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
	if (display.mainText_contentToDisplay.length > 0)
	{
		if ( display.mainText_contentToDisplay.substr(0,5) === "</br>" ){
			document.getElementById("mainTextField").innerHTML += "</br>";
			display.mainText_contentToDisplay = display.mainText_contentToDisplay.replace("</br>","");
		} 
		else 	
		{
			if( display.mainText_contentToDisplay.substr(0,2) === "[#" )
			{
				var command = display.mainText_contentToDisplay.substring( 2, leftToWrite.indexOf("#]") );
				console.log(command);
				eval(command);
				display.mainText_contentToDisplay = display.mainText_contentToDisplay.replace("[#"+command+"#]","");
			}
			document.getElementById("mainTextField").innerHTML += display.mainText_contentToDisplay.charAt(0);
			display.mainText_contentToDisplay = display.mainText_contentToDisplay.substr(1);
				
		}if 
		setTimeout( display._writeByChar, display.mainText_interval );
	}
	else{
		display.mainText_writingFinished = true;
	}
}


display.setWritingInterval = function( i )
{
	if (i >= 0){
		if( display.mainText_writingFinished ) {
			display.mainText_interval = i;
		}
		else{
			display.mainText_contentToDisplay += "[#display.mainText_interval="+i+";#]"
			display._writeByChar();
		}
	}
	else{
		console.log("Nieprawidlowa wartosc!");
	}
}