function FlagSet()
{
	this._list = new Object();
	
	this.add = function(tag)
	{
		tag = tag.toLowerCase();
		if (this._list[tag]===undefined)
		{
			this._list[tag] = new Object;
		}
		else
		{
			console.log("flaga "+tag+" zostala juz zadeklarowana.");
		}
	}
	
	this.set = function(tag, value)
	{
		tag = tag.toLowerCase();
		if (this._list[tag]===undefined)
		{
			console.log("flaga " + tag + " nie zostala jeszcze zadeklarowana.");
		}
		else
		{
			this._list[tag] = value;
		}
	}

	this.get = function(tag)
	{
		tag = tag.toLowerCase();
		return this._list[tag];
	}
}



/////////////////////////////////////////////////////////////////////////
function Scene()
{
	this.onEntry = function(){};
	this.onLeave = function(){};
	this.flags = new FlagSet();
}



/////////////////////////////////////////////////////////////////////////
function Option(tag, text)
{
	this.tag = tag;
	this.text = text;
	this.onUse = function(){};
}



/////////////////////////////////////////////////////////////////////////	
var game = new Object()		//singleton

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