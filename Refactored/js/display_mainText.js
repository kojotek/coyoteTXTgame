display._contentToDisplay = new String();
display._interval = 10;
display._writingFinished = true;
display._intervalFuncHandler;


display.clear = function()
{
	display._contentToDisplay = "";
	document.getElementById("mainTextField").innerHTML = "";
}


display.wait = function( delay )
{
	var temporaryInterval = display._interval;
	display.setWritingInterval(0);
	display._contentToDisplay += "[#p#]".repeat(delay);
	display.setWritingInterval(temporaryInterval);
}


display.write = function(str)
{
	display._contentToDisplay += str;
	if( display._writingFinished ) {
		display._intervalFuncHandler = setInterval (display._writeByChar, display._interval);
		display._writingFinished = false;
	}
}


display.writeln = function(str)
{
	display._contentToDisplay += ("<br/>" + str);
	if( display._writingFinished ) {
		display._intervalFuncHandler = setInterval (display._writeByChar, display._interval);
		display._writingFinished = false;
	}
}


display._writeByChar = function()
{
	if (display._contentToDisplay.length > 0)
	{
		if ( display._contentToDisplay.substr(0,5) === '<br/>' ){
			document.getElementById("mainTextField").innerHTML += "<br/>";
			display._contentToDisplay = display._contentToDisplay.substr(5);
		} 
		else{
			if( display._contentToDisplay.substr(0,2) === "[#" ){
				var command = display._contentToDisplay.substring( 2, display._contentToDisplay.indexOf("#]") );
				if ( command === "p" ){
					display._contentToDisplay = display._contentToDisplay.substr(5);
					return;
				}
				else
				{
					eval(command);
					display._contentToDisplay = display._contentToDisplay.substr(command.length+4);
					clearInterval( display._intervalFuncHandler );
					display._intervalFuncHandler = setInterval (display._writeByChar, display._interval);
				}
				
			}
			else{
				document.getElementById("mainTextField").innerHTML += display._contentToDisplay.charAt(0);
				display._contentToDisplay = display._contentToDisplay.substr(1);
			}
		}

	}
	else
	{
		display._writingFinished = true;
		clearInterval( display._intervalFuncHandler );
	}
}


display.setWritingInterval = function( i )
{
	if (i >= 0){
		if( display._writingFinished ) {
			display._interval = i;
		}
		else{
			display._contentToDisplay += "[#display._interval="+i+";#]"
			display._writeByChar();
		}
	}
	else{
		console.log("Nieprawidlowa wartosc!");
	}
}