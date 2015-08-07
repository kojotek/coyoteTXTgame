var display = new Object();

display.inventoryListPosition = 0;

display.frameLength = 0.2;

display.resize = function()
{
	display.refreshOptions();
	display.refreshInventory();
	display.refreshCharacterItems();
}