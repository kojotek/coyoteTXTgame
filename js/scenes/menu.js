scenes.add("menu");

scenes.list["menu"].onLoad = function()
{
	display.clear();
	display.write("Witaj w grze T.R.A.I.N!");
}

scenes.goToScene("menu");