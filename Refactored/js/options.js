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

options.add = function( tag, text )
{
	tag = tag.toLowerCase();
	var newOption = new Option( tag, text );
	options.list[tag] = newOption;
	options.array.push( newOption );
}

options.remove = function( tag )
{
	tag = tag.toLowerCase();
	var index = options.array.indexOf( options.list[tag] );
	if (index > -1) {
		options.array.splice(index, 1);
		delete options.list[tag];
	}
}