function Scene( name )
{
	this.name = name.toLowerCase();
	this.onLoad = function(){}
	this.onLeave = function(){}
}


scenes = new Object();

scenes.list = new Object();

scenes.array = new Array();

scenes.add = function( name )
{
	name = name.toLowerCase();
	if ( scenes.list[name] !== undefined ){
		console.log("Scene " + name + " already exists!");
		return undefined;
	}
	var newScene = new Scene( name );
	scenes.list[name] = newScene;
	scenes.array.push( newScene );
	return scenes.list[name];
}

scenes.goToScene = function( name )
{
	name = name.toLowerCase();
	if ( scenes.list[name] === undefined ){
		console.log("Scene " + name + " doesn't exist!");
		return undefined;
	}
	
	if (gameState.currentScene){
		scenes.list[gameState.currentScene].onLeave();
	}
	
	gameState.currentScene = name;
	
	scenes.list[name].onLoad();
	
	display.resize();
	return scenes.list[name];
}