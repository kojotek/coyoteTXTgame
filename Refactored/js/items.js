function Item( tag, name )
{
	this.tag = tag;
	this.name = name;
	
	this.onUse = function(){
		//onGLobal + funkcja charakterystyczna dla miejsca
	}
	
	this.onGlobalUse = function(){
		//cos, co mozna wywolac niezaleznie od stanu i lokacji
	}
	
}


scenes = new Object();

scenes.list = new Object();

scenes.array = new Array();

scenes.add = function( name )
{
	var newOption = new Option( name );
	scenes.list[name] = newOption;
	scenes.array.push( newOption );
}