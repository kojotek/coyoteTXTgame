var display = new Object();

display.inventoryListPosition = 0;


display.resize = function()
{
	display.refreshOptions();
	display.refreshInventory();
	display.refreshCharacterItems();
}