scenes.add("menu");

scenes.list["menu"].onLoad = function()
{
	display.clear();
	options.clear();
	//display.write("Witaj w grze T.R.A.I.N!");
	var opt_newGame = options.add("newGame", "Nowa Gra");
	opt_newGame.onUse = function() {
		
	}
	
	
}