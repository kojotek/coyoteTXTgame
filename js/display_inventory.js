display.inventoryListPosition = 0;

display.addInventory = function( text )
{
	var table = document.getElementById("inventoryTable");
    var row = table.insertRow(table.rows.length);
	var cell = row.insertCell(0);
	cell.innerHTML = text;
	display.refreshInventory();
}


display.removeInventory = function( index )
{
	var table = document.getElementById("inventoryTable");
	table.deleteRow(index);
}


display.selectInventory = function( index )
{	
	if (document.getElementById("selectedInventory") !== null){
		document.getElementById("selectedInventory").id = undefined;
	}

	var table = document.getElementById("inventoryTable");
	if ( table.rows[index] !== undefined ){
		table.rows[index].id = "selectedInventory";
	}
	
	display.refreshInventory();
}


display.countVisibleInventory = function()
{
	var table = document.getElementById("inventoryTable");
	var box = document.getElementById("inventoryBox");
	var boxHeight = box.offsetHeight;
	
	if (table.rows.length > 0)
	{
		var row = table.rows[0];
		var rowDisplay = row.style.display;
		row.style.display = "block";
		var rowHeight = row.offsetHeight;
		row.style.display = rowDisplay;

		var visibleRows = Math.floor((boxHeight*0.94)/rowHeight);
		return visibleRows;
	}
	return -1;
}



display.refreshInventory = function()
{
	if ( inventory.current < display.inventoryListPosition && inventory.current >= 0 ){
		display.inventoryListPosition = inventory.current;
	}
	
	if ( inventory.current > ( display.inventoryListPosition + display.countVisibleInventory() - 1 ) ) {
		display.inventoryListPosition = inventory.current - display.countVisibleInventory() + 1;
	}

	var table = document.getElementById("inventoryTable");

	for ( var i = 0; i < gameState.inventoryArray.length; i++ ){
		if (i >= display.inventoryListPosition && i < (display.inventoryListPosition + display.countVisibleInventory()) ){
			table.rows[i].style.display = "block";
		}
		else{
			table.rows[i].style.display = "none";
		}
	}
}