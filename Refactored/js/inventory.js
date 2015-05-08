var inventory = new Object();

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

	return true;
}


inventory.remove = function( tag )
{
	var index = gameState.inventoryArray.indexOf( tag );
	
	if (index > -1) {
		gameState.inventoryArray.splice(index, 1);
		return true;
	}
	else {
		console.log("There is no item " + tag + " in inventory!");
		return false;
	}
	
}