var display = new Object();

display.optionBoxHeight = 0;
display.optionTableRowHeight = 0;
display.visibleOptions = 0;
display.optionListPosition = 0;

display.inventoryTableHeight = 0;
display.inventoryTableRowHeight = 0;
display.countVisibleInventory = 0;
display.inventoryListPosition = 0;


display.addOption = function( text )
{
	var table = document.getElementById("optionTable");
    var row = table.insertRow(table.rows.length);
	var cell = row.insertCell(0);
	cell.innerHTML = text;
	display.refreshOptions();
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
		
		if ( index < display.optionListPosition ){
			display.optionListPosition = index;
		}
		
		if ( index > ( display.optionListPosition + display.visibleOptions - 1 ) {
			display.optionListPosition = index - display.visibleOptions + 1;
		}	
	}
}


display.countVisibleOptions = function()
{
	var table = document.getElementById("optionTable");
	var box = document.getElementById("optionBox");
	display.optionBoxHeight = box.offsetHeight;
	if (table.rows.length > 0)
	{
		display.optionTableRowHeight = table.rows[0].offsetHeight;
		display.visibleOptions = Math.floor((display.optionBoxHeight*0.98)/display.optionTableRowHeight);
		return display.visibleOptions;
	}
	return 0;
}



display.refreshOptions = function()
{
	display.countVisibleOptions();

	var table = document.getElementById("optionTable");

	for ( int i = 0; i < options.array.length; i++ ){
		if (i >= display.optionListPosition && i < (display.optionListPosition + display.visibleOptions) ){
			table.rows[i].style.display = "block";
		}
		else{
			table.rows[i].style.display = "none";
		}
	}
}


displaz.resize = function()
{
	display.refreshOptions();
}