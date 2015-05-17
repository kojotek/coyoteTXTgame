var display = new Object();

display.optionTableHeight = 0;
display.optionTableRowHeight = 0;
display.countVisibleOptions = 0;
display.optionListPosition = 0;

display.inventoryTableHeight = 0;
display.inventoryTableRowHeight = 0;


display.getElementHeightByClass = function( cls )
{
	return document.getElementsByClass(cls)[0].offsetHeight;
}


display.addOption = function( text )
{
	var table = document.getElementById("optionTable");
    var row = table.insertRow(table.rows.length);
	var cell = row.insertCell(0);
	cell.innerHTML = text;
	
	display.optionTableRowHeight = row.offsetHeight;
}

display.removeOption = function( index )
{
	var table = document.getElementById("optionTable");
	table.deleteRow(index);
}

display.selectOption = function( index )
{	
	if (document.getElementById("selectedOption") !== null){
		document.getElementById("selectedOption").id = undefined;
	}

	var table = document.getElementById("optionTable");
	if ( table.rows[index] !== undefined ){
		table.rows[index].id = "selectedOption";
	}
}

display.resize = function()
{
	var table = document.getElementById("optionTable");
	display.optionTableHeight = table.offsetHeight;
	if (table.rows > 0)
	{
		display.optionTableRowHeight = table.rows[0].offsetHeight;
		display.countVisibleOptions = Math.floor(display.optionTableHeight/display.optionTableRowHeight);
		
		if ( display.countVisibleOptions > options.array.length )
		{
			
		}
	}
}