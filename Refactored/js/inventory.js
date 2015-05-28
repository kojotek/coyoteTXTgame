var inventory = new Object();

inventory.current = -1;

inventory.add = function( tag )
{
	if ( items.list[tag] === undefined ){
		console.log("Item " + tag + " is not declared!");
		return false;
	}
	
	if ( gameState.inventoryArray.indexOf( tag ) !== -1 ){
		console.log("Item " + tag + " is already in inventory!");
		return false;
	}

	gameState.inventoryArray.push( tag );

	display.addInventory(items.list[tag].name);
	
	if (inventory.current < 0 || gameState.inventoryArray.length === 1){
		inventory.setCurrent(0);
	}
	
	return true;
}


inventory.remove = function( tag )
{
	var index = gameState.inventoryArray.indexOf( tag );
	
	if (index > -1) {
		gameState.inventoryArray.splice(index, 1);
		
		var newIndex = inventory.current;

		if ( index <= inventory.current && inventory.current !== 0 ){
			newIndex--;
		}
		
		if ( inventory.array.length === 0 ){
			newIndex = -1;
		}
		
		display.removeInventory(index);
		inventory.setCurrent( newIndex );
		
		return true;
	}
	else {
		console.log("There is no item " + tag + " in inventory!");
		return false;
	}
	
}


inventory.setCurrent = function( index )
{
	inventory.current = index;
	if (input.activeWindow === "inventory"){
		display.selectInventory( inventory.current );
	}
}


inventory.next = function()
{
	var newIndex = Math.max ( 0, Math.min( inventory.current+1, gameState.inventoryArray.length-1 ) );
	inventory.setCurrent(newIndex);
}


inventory.prev = function()
{
	var newIndex = Math.max ( 0, Math.min( inventory.current-1, gameState.inventoryArray.length-1 ) );
	inventory.setCurrent(newIndex);
}