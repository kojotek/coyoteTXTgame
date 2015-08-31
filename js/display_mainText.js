display._contentToDisplay = new String();
display._interval = 10;
display._writingFinished = true;
display._intervalFuncHandler;


display.clear = function(callback)
{
	display._contentToDisplay = "";
	document.getElementById("mainTextField").innerHTML = "";

	if (typeof(callback) !== 'undefined')	callback();
}


display.wait = function( delay, callback )
{
	setTimeout( callback, delay );
}


display.setWritingInterval = function( i, callback )
{
	if (i >= 0){
		display._interval = i;
	}
	else{
		console.log("Nieprawidlowa wartosc!");
	}
	
	if (typeof(callback) !== 'undefined')	callback();
}


display.write = function(str, callback)
{
	display._contentToDisplay = str;
	display._intervalFuncHandler = setInterval ( function() {display._writeByChar(callback)}, display._interval * display.frameLength);
}


display.writeln = function(str, callback)
{
	display._contentToDisplay = ("<br/>" + str);
	display._intervalFuncHandler = setInterval ( function() {display._writeByChar(callback)}, display._interval * display.frameLength);
}


display._writeByChar = function( callback )
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
				eval(command);
				display._contentToDisplay = display._contentToDisplay.substr(command.length+4);
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
		
		if (typeof(callback) !== 'undefined')	callback();
	}
}