display.optionList = new Object();
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
	display.window.refresh();
}


display.optionList.remove = function( tag )
{
	var table = document.getElementById("optionTable");
	var indexToDelete = findWithAttr(table.rows, "tag", tag);
	if (indexToDelete !== undefined){
		table.deleteRow(indexToDelete);
	}
	if ( indexToDelete === display.optionList._currentOption ){
		display.optionList._currentOption--;
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


display.optionList.choose = function()
{
	var chosen = document.getElementById("selectedOption");
	if (chosen !== undefined){
		game.options.use( chosen.tag );
	}
}