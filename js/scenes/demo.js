scenes.add("demo");


var demo_start = function()
{
	$({})
		.queue( function(next) { display.setWritingInterval(160, next) })
		.queue( function(next) { display.wait(400, next) } )
		.queue( function(next) { display.write("Drzwi do przedziału otworzyły się nie wydając żadnego dźwięku.", next) })
		.queue( function(next) { display.wait(400, next) } )
		.queue( function(next) { display.writeln("Wszedłem do środka. ", next) })
		.queue( function(next) { display.wait(300, next) } )
		.queue( function(next) { display.write("Molly siedziała na swojej kuszetce, tak jak ją tu zostawiłem. ", next) })
		.queue( function(next) { display.wait(300, next) } )
		.queue( function(next) { display.writeln("Trzęsła się. ", next) })
		.queue( function(next) { display.wait(300, next) } )
		.queue( function(next) { display.write("Pojękując cicho wbijała sobie paznokcie w skronie. ", next) })
		.queue( function(next) { display.wait(200, next) } )
		.queue( function(next) { display.write("Jej rozbieganie, zaczerwienione oczy wreszcie zatrzymały się na mnie.", next) })
		.queue( function(next) { display.wait(500, next) } )
		.queue( function(next) { display.writeln("Boże, jaka była blada.", next) })
		.queue( function(next) { display.wait(1000, next) } )
		.queue( function(next) { display.writeln("- Już wiesz - wyjęczała - ty już wiesz, tak?", next) })
		.queue( function(next) { display.wait(300, next) } )
		.queue( function() {
				options.add("wiem_co_zrobilas","Tak, Molly. Wiem.");
				options.add("nie_wiem_co_zrobilas","O czym mam wiedzieć?");
			}
		)

		
}


scenes.list["demo"].onLoad = function()
{
	display.writeForeground("MOLLY", 50, 50, darkening | lightening, "#BBBBBB", "100px", demo_start );
}