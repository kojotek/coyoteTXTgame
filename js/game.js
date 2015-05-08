function FlagSet(name)
{
	this.sceneName = name;
	gameState.scenes[name] = new Object();
	gameState.scenes[name].flags = new Object();
	
	this.add = function(tag)
	{
		tag = tag.toLowerCase();
		if (gameState.scenes[this.sceneName].flags[tag]===undefined)
		{
			gameState.scenes[this.sceneName].flags[tag] = new Object;
		}
		else
		{
			console.log("flaga "+tag+" zostala juz zadeklarowana.");
		}
	}
	
	this.set = function(tag, value)
	{
		tag = tag.toLowerCase();
		if (gameState.scenes[this.sceneName].flags[tag]===undefined)
		{
			console.log("flaga " + tag + " nie zostala jeszcze zadeklarowana.");
		}
		else
		{
			gameState.scenes[this.sceneName].flags[tag] = value;
		}
	}

	this.get = function(tag)
	{
		tag = tag.toLowerCase();
		return gameState.scenes[this.sceneName].flags[tag];
	}
}



/////////////////////////////////////////////////////////////////////////
function Scene(name)
{
	this.onEntry = function(){};
	this.onLeave = function(){};
	this.flags = new FlagSet(name);
}



/////////////////////////////////////////////////////////////////////////
function Option(tag, text)
{
	this.tag = tag;
	this.text = text;
	this.onUse = function(){
		display.mainText.write("Brak zdefiniowanej funkcji dla opcji " + "\"" + this.text + "\";" );
	};
}



/////////////////////////////////////////////////////////////////////////
function Equip(tag, text)
{
	this.tag = tag;
	this.text = text;
	this.onUse = function(){
		this.itemUse();
		var funcName = "equipEvent_" + this.tag;
		if ( gameState.currentScene[funcName] !== undefined ){
			gameState.currentScene[funcName]();
		}
	};
	
	this.itemUse = function(){
		display.mainText.write("Brak zdefiniowanej funkcji dla elementu ekwipunku: " + "\"" + this.text + "\";" );
	};
}



/////////////////////////////////////////////////////////////////////////	
var game = new Object()		//singleton


/////////////////////////////////////////////////////////////////////////
game.scenes = new Object();
game.scenes._list = new Object();


game.scenes.add = function( name )
{
	name = name.toLowerCase();
	game.scenes._list[name] = new Scene(name);
	return game.scenes._list[name];
}


game.scenes.get = function( name )
{
	name = name.toLowerCase();
	return game.scenes._list[name];
}


/////////////////////////////////////////////////////////////////////////
game.options = new Object();
game.options._list = new Object();

game.options.add = function(tag, text)
{
	tag = tag.toLowerCase();
	game.options._list[tag] = new Option(tag, text);
	display.optionList.add ( game.options._list[tag] );
}


game.options.get = function( tag )
{
	tag = tag.toLowerCase();
	return game.options._list[tag];
}


game.options.use = function( tag )
{
	tag = tag.toLowerCase();
	game.options._list[tag].onUse();
}


game.options.remove = function( tag )
{
	tag = tag.toLowerCase();
	display.optionList.remove(tag);
	delete game.options._list[tag];
}


game.options.count = function()
{
	return Object.keys(game.options._list).length;
}


/////////////////////////////////////////////////////////////////////////
game.equip = new Object();
game.equip._list = new Object();


game.equip.add = function(tag, text)
{
	tag = tag.toLowerCase();
	game.equip._list[tag] = new Equip(tag, text);
	//display.equipList.add ( game.equip._list[tag] );
}


game.equip.get = function( tag )
{
	tag = tag.toLowerCase();
	return game.equip._list[tag];
}


game.equip.use = function( tag )
{
	tag = tag.toLowerCase();
	game.equip._list[tag].onUse();
}


game.equip.count = function()
{
	return Object.keys(game.equip._list).length;
}


/////////////////////////////////////////////////////////////////////////////////
game.inventory = new Object();

game.inventory.add = function( tag )
{
	tag = tag.toLowerCase();
	gameState.inventory[tag] = game.equip._list[tag];
	display.equipList.add( game.equip._list[tag] );
}


game.inventory.remove = function( tag )
{
	tag = tag.toLowerCase();
	delete gameState.Inventory[tag];
	display.equipList.remove( game.equip._list[tag] );
}


game.inventory.count = function()
{
	return Object.keys(gameState.inventory).length;
}