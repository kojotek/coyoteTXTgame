display.optionList = new Object();
display.optionList._allOptions;
display.optionList._currentOption = 0;
display.optionList._optionBoxExtended = false;
display.optionList._upperLimit = 0;
display.optionList._lowerLimit = 0;


display.optionList.add = function( option )
{
	var table = document.getElementById("optionTable");
    var row = table.insertRow(table.rows.length);
	row.className = "option";
	row.tag = option.tag;
	row.text = option.text;
	display.window.refreshOptions();
}


display.optionList.remove = function( tag )
{
	var table = document.getElementById("optionTable");
	var indexToDelete = findWithAttr(table.rows, "tag", tag);
	
	if (indexToDelete !== undefined){
		table.deleteRow(indexToDelete);
	}
	
	if ( indexToDelete <= display.optionList._currentOption ){
		display.optionList._currentOption = Math.max(0, display.optionList._currentOption-1);
	}
	
	display.window.refreshOptions();
}


display.optionList.next = function()
{
	display.optionList._currentOption = Math.max( Math.min( display.optionList._currentOption+ 1, game.options.count()-1  ), 0 );
	display.window.refreshOptions();
}


display.optionList.prev = function()
{
	display.optionList._currentOption = Math.min( Math.max( display.optionList._currentOption-1, 0 ), game.options.count() );
	display.window.refreshOptions();
}


display.optionList.extend = function()
{
	if ( !display.optionList._optionBoxExtended )
	{
		display.optionList._optionBoxExtended = true;
		display.window.refreshOptions();
	}
}


display.optionList.shorten = function()
{
	display.optionList._optionBoxExtended = false;
	display.window.refreshOptions();
}


display.optionList.choose = function()
{
	var chosen = document.getElementById("selectedOption");
	if (chosen !== undefined){
		game.options.use( chosen.tag );
	}
}