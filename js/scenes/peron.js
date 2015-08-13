scenes.add("peron");


var peron_start = function()
{
	flags.add("peron","pierwszaWizyta", true);
	if (flags.get("peron","pierwszaWizyta"))
	{
		display.write("Witaj po raz pierwszy!");
		flags.set("peron","pierwszaWizyta", false);
		gameLoader.saveGameState();
	}
	
	display.write("Nie mów tego mojej żonie, ale stoję na peronie.");
}


scenes.list["peron"].onLoad = function()
{
	display.writeForeground("PERON", 50, 50, darkening | lightening, "#BBBBBB", "100px", peron_start );
}