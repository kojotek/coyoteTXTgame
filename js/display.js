var display = new Object();

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

display.optionList = new Object();
display._currentOption = 0;

display.optionList.add = function( option )
{
	var table = document.getElementById("optionTable");
    var row = table.insertRow(table.rows.length);
	row.className = "option";
	row.tag = option.tag;
    row.innerHTML = option.text;
	display.window.refresh();
}

display.optionList.remove = function( tag )
{
	var table = document.getElementById("optionTable");
	var indexToDelete = findWithAttr(table.rows, "tag", tag);
	if (indexToDelete !== undefined){
		table.deleteRow(indexToDelete);
	}
	display.window.refresh();
}

display.optionList.next = function()
{
	display._currentOption = Math.max( Math.min( display._currentOption+ 1, game.options.count()-1  ), 0 );
	display.window.refresh();
}

display.optionList.prev = function()
{
	display._currentOption = Math.min( Math.max( display._currentOption-1, 0 ), game.options.count() );
	display.window.refresh();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

display.window = new Object();

display.window.refresh = function()
{
	var optionTableHeight = document.getElementById("optionBox").offsetHeight;
	var allOptions = document.getElementsByClassName("option");
	var sum = 0;
	
	/*resetowanie ustawien*/
	for( var i=0; i<allOptions.length; i++ ){
		allOptions[i].style.display = "table";
		allOptions[i].id = undefined;
	}
	
	allOptions[display._currentOption].id = "selectedOption"
	
	for( var i=0; i<allOptions.length; i++ )
	{
		sum = sum + allOptions[i].offsetHeight;
		
		if ( sum < optionTableHeight ){
			allOptions[i].style.display = "table-row";
		}
		else{
			allOptions[i].style.display = "none";
		}
	}
}