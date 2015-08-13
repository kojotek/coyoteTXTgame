scenes.add("menu");

scenes.list["menu"].onLoad = function()
{
	display.clear();
	options.clear();
	
	
	/*
	options.add("1", "1");
	options.add("2", "2");
	options.add("3", "3");
	options.add("4", "4");
	options.add("5", "5");
	options.add("6", "6");
	options.add("7", "7");
	options.add("8", "8");
	options.add("9", "9");
	options.add("10", "10");
	*/
	
	
	if (gameLoader.gameSaveExists())
	{
		var opt_continueGame = options.add("continueGame", "Kontynuuj");
		opt_continueGame.onUse = function() {
												display.displayCharacterInfo();
												scenes.goToScene("loadGameScene");
											}
	}
	
	var opt_newGame = options.add("newGame", "Nowa Gra");
	opt_newGame.onUse = function() {
		if (gameLoader.gameSaveExists())
		{
			display.clear();
			options.clear();
			display.write("Rozpoczęcie nowej gry spowoduje utratę zapisanych stanów gry. Czy mimo to chcesz kontynuować?");
			
			options.add("tak", "Tak", function(){
													gameState.currentCharacter = characterItems.roll();
													display.displayCharacterInfo();
													scenes.goToScene("peron");
												});
			
			options.add("nie", "Nie", function(){ 
													scenes.goToScene("menu");
												});
		}
		else
		{
			gameState.currentCharacter = characterItems.roll();
			display.displayCharacterInfo();
			scenes.goToScene("peron");
		}
	}
}


scenes.list["menu"].onLeave = function()
{
	display.clear();
	options.clear();
}