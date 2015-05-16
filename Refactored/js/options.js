function Option( tag, text )
{
	this.tag = tag;
	this.text = text;
	this.onUse = function(){
		//wypisz komunikat o niezdefiniowanej funkcji
	}
}


options = new Object();

options.list = new Object();

options.array = new Array();

options.current = -1;

options.add = function( tag, text )
{
	tag = tag.toLowerCase();
	if ( options.list[tag] !== undefined ){
		console.log("Option " + tag + " already exists");
		return false;
	}
	var newOption = new Option( tag, text );
	options.list[tag] = newOption;
	options.array.push( newOption );
	display.addOption(text);
	return true;
}

options.remove = function( tag )
{
	tag = tag.toLowerCase();
	var index = options.array.indexOf( options.list[tag] );
	if (index > -1) {
		options.array.splice(index, 1);
		delete options.list[tag];
		display.removeOption(index);
		return true;
	}
	console.log("tag " + tag + " not found");
	return false;
}