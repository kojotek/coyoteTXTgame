function Item( tag, name )
{
	this.tag = tag.toLowerCase();
	this.name = name;
	
	this.onUse = function()
	{
		this.onGlobalUse();
		var funcName = "itemEvent_" + this.tag;
		if ( scenes.list[gameState.currentScene][funcName] !== undefined )
		{
			scenes.list[gameState.currentScene][funcName]();
		}
	}
	
	this.onGlobalUse = function()
	{
		//cos, co mozna wywolac niezaleznie od lokacji
	}
	
}


items = new Object();

items.list = new Object();

items.array = new Array();

items.add = function( tag, name )
{
	tag = tag.toLowerCase();
	if ( items.list[tag] !== undefined ){
		console.log("Item " + tag + " already exists");
		return undefined;
	}
	var newItem = new Item( tag, name );
	items.list[tag] = newItem;
	items.array.push( newItem );
	return items.list[tag];
}