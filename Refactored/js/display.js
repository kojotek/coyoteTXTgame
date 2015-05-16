var display = new Object();

display.optionTableHeight = 0;
display.optionTableRowHeight = 0;
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