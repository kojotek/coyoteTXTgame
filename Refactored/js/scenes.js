function Scene( name )
{
	this.name = name;
	this.onLoad = function(){}
	this.onLeave = function(){}
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