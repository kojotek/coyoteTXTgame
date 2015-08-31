scenes.add("peron");


var peron_start = function()
{
	flags.add("peron","pierwszaWizyta", true);
	if (flags.get("peron","pierwszaWizyta"))
	{
		flags.set("peron","pierwszaWizyta", false);
		gameLoader.saveGameState();
	}

	$({})
		.queue( function(next) { display.setWritingInterval(350, next) })
		.queue( function(next) { display.writeln("1", next) })
		.queue( function(next) { display.wait(400, next) } )
		.queue( function(next) { display.writeln("2", next) })
		.queue( function(next) { display.wait(400, next) } )
		.queue( function(next) { display.writeln("3", next) })
		.queue( function(next) { display.wait(400, next) } );
}


scenes.list["peron"].onLoad = function()
{
	display.writeForeground("PERON", 50, 50, darkening | lightening, "#BBBBBB", "100px", peron_start );
}