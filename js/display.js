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
display.optionList._currentOption = 0;
display.optionList._optionBoxExtended = false;

display.optionList.add = function( option )
{
	var table = document.getElementById("optionTable");
    var row = table.insertRow(table.rows.length);
	row.className = "option";
	row.tag = option.tag;
	row.text = option.text;
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
	display.optionList._currentOption = Math.max( Math.min( display.optionList._currentOption+ 1, game.options.count()-1  ), 0 );
	display.window.refresh();
}

display.optionList.prev = function()
{
	display.optionList._currentOption = Math.min( Math.max( display.optionList._currentOption-1, 0 ), game.options.count() );
	display.window.refresh();
}

display.optionList.extend = function()
{
	display.optionList._optionBoxExtended = true;
	display.window.refresh();
	
}

display.optionList.shorten = function()
{
	display.optionList._optionBoxExtended = false;
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
		allOptions[i].style.display = "table-row";
		allOptions[i].id = undefined;
		allOptions[i].innerHTML = "&nbsp";
	}
	
/*zaznaczanie wybranej opcji*/
	allOptions[display.optionList._currentOption].id = "selectedOption"
	
/*Ramka opcji: wydluzona, czy zwykla*/
	document.getElementById("optionBox").className = (display.optionList._optionBoxExtended ? "optionBox extended" : "optionBox");
	document.getElementById("optionTable").className = (display.optionList._optionBoxExtended ? "optionTable extended" : "optionTable");
	
	for( var i=0; i<allOptions.length; i++ )
	{

/*Ucinanie za dlugich opcji*/
		var lh = allOptions[i].offsetHeight;
		var k = 1;
		while ( k !== allOptions[i].text.length+1 ){
			allOptions[i].innerHTML = allOptions[i].text.substr(0,k);
			k++;
			if( allOptions[i].offsetHeight !== lh ){
				allOptions[i].innerHTML = allOptions[i].text.substr(0,k-7) + "...";
				break;
			}
		}
		
/*Wyswietlanie tylko widocznych opcji*/
		sum = sum + allOptions[i].offsetHeight;
		
		if ( sum < optionTableHeight ){
			allOptions[i].style.display = "table-row";
		}
		else{
			allOptions[i].style.display = "none";
		}
	}
}