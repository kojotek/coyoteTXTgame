/*obsluga klawiszy*/

//enter			13
//shift			16
//space			32
//left arrow	37
//up arrow		38
//right arrow	39
//down arrow	40
//,<			188
//.>			190


document.addEventListener('keydown', function(event) {
    switch(event.keyCode)
	{
		case 38:
			input.prevItem();
			break;

		case 40:
			input.nextItem();
			break;
			
		case 37:
			input.prevWindow();
			break;

		case 39:
			input.nextWindow();
			break;
			
		case 16:
			display.setExtendedOptionBox(true);
			break;

    }
}, true);


document.addEventListener('keyup', function(event) {
    switch(event.keyCode)
	{
		case 16:
			display.setExtendedOptionBox(false);
			break;
    }
}, true);


input = new Object();

input.activeWindow = "options";

input.nextWindow = function()
{
	switch (input.activeWindow)
	{
		case "options":
			input.activeWindow = "inventory";
			display.selectOption(-1);
			display.selectInventory(inventory.current);
			return;
	}
}


input.prevWindow = function()
{
	switch (input.activeWindow)
	{
		case "inventory":
			input.activeWindow = "options";
			display.selectInventory(-1);
			display.selectOption(options.current);
			return;
	}
}


input.nextItem = function()
{
	switch (input.activeWindow)
	{
		case "options":
			options.next();
			return;
			
		case "inventory":
			inventory.next();
			return;
	}
}


input.prevItem = function()
{
	switch (input.activeWindow)
	{
		case "options":
			options.prev();
			return;
			
		case "inventory":
			inventory.prev();
			return;
	}
}