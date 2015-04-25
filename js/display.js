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
	if (display.mainText._counter < display.mainText._contentToDisplay.length)
	{
		display.mainText._counter++;
	}
	else
	{
		clearInterval(display.mainText._intervalFuncHandler);
	}
	document.getElementById("mainTextField").innerHTML = display.mainText._contentToDisplay.substring(0, display.mainText._counter);
}

display.mainText.setInterval = function( i )
{
	if (i >= 0)
	{
		display.mainText._interval = i;
	}
	else
	{
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
	var table = document.getElementById("optionList");
    var row = table.insertRow(table.rows.length);
	row.className = "optionBoxContent notChosen";
    var cell = row.insertCell(0);
    cell.innerHTML = option.text;
}

display.optionList.remove = function( option )
{
	var table = document.getElementById("optionList");
	var index;
	for (var a=0; a<table.rows.length; a++)
	{
		if (table.rows[a].cells[0].innerHTML===option.text){
			index = a;
			break;
		}
	}
	table.deleteRow(index);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

display.window = new Object();

display.refresh = function()
{
	var optionTableHeight = document.getElementById("optionBox").offsetHeight;
	var allOptions = document.getElementsByClassName("optionBoxContent");
	var sum = 0;
	
	for( var i=0; i<allOptions.length; i++ ){
		allOptions[i].style.display = "table";
	}
	
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