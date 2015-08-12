var gameState = new Object();

gameState.scenes = new Object();
gameState.currentScene = "";

gameState.inventoryArray = new Array();

gameState.currentCharacter = new Character();



var gameLoader = new Object();

gameLoader.loadGameState = function()
{
	gameState = JSON.parse(document.cookie);
}

gameLoader.saveGameState = function()
{
	document.cookie = JSON.stringify(gameState);
}

gameLoader.gameSaveExists = function()
{
	if (document.cookie){
		return true;
	}
	else{
		return false;
	}
}

gameLoader.clearSavedGame = function()
{
	document.cookie = "";
}