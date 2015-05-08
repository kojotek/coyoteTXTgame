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
		//cos, co mozna wywolac niezaleznie od stanu i lokacji
	}
	
}


items = new Object();

items.list = new Object();

items.array = new Array();

items.add = function( tag, text )
{
	tag = tag.toLowerCase();
	var newItem = new Item( tag, text );
	items.list[tag] = newItem;
	items.array.push( newItem );
}