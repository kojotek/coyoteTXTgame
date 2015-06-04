var flags = new Object();


flags.add = function( sceneName, flagName, value )
{
	if ( scenes.list[sceneName] === undefined ){
		console.log("Scene " + sceneName + " is not defined!");
		return false;
	}
	
	if ( gameState.scenes[sceneName] === undefined ){
		gameState.scenes[sceneName] = new Object();
	}
	
	if ( gameState.scenes[sceneName][flagName] !== undefined ){
		console.log("Flag " + flagName + " in scene " + sceneName + " already exists!");
		return false;
	}
	
	if ( value === undefined ){
		value = false;
	}
	 
	gameState.scenes[sceneName][flagName] = value;
	
	return true;
}


flags.set = function( sceneName, flagName, value )
{
	if ( scenes.list[sceneName] === undefined ){
		console.log("Scene " + sceneName + " is not defined!");
		return false;
	}

	if ( gameState.scenes[sceneName] === undefined || gameState.scenes[sceneName][flagName] === undefined){
		console.log("Flag " + flagName + " in scene " + sceneName + " is not defined!");
		return false;
	}
	
	if ( value === undefined ){
		console.log("Flag's new value must be set!");
		return false;
	}
	
	gameState.scenes[sceneName][flagName] = value;
	
	return true;
}


flags.get = function( sceneName, flagName)
{
	if ( scenes.list[sceneName] === undefined ){
		console.log("Scene " + sceneName + " is not defined!");
		return undefined;
	}

	if ( gameState.scenes[sceneName][flagName] === undefined ){
		console.log("Flag " + flagName + " in scene " + sceneName + " is not defined!");
		return undefined;
	}
	
	return gameState.scenes[sceneName][flagName];
}