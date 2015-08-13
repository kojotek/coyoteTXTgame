var sc_loadGameScene = scenes.add("loadGameScene");


sc_loadGameScene.onLoad = function()
{
	display.clear();
	options.clear();
	inventory.clear();
	var currScene = gameState.currentScene;
	gameLoader.loadGameState();
	var nextScene = gameState.currentScene;
	gameState.currentScene = currScene;
	scenes.goToScene(nextScene);
}