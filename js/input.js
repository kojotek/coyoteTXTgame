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
		case 13:
			input.chooseItem();
			break;
		
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
			if (!inventory.empty())
			{
				input.activeWindow = "inventory";
				display.selectOption(-1);
				display.selectInventory(inventory.current);
			}
			else
			{
				if(display.characterVisible())
				{
					input.activeWindow = "character";
					display.selectOption(-1);
					display.selectCharacterItem(characterItems.current);
				}
				
			}
			
			return;
			
		case "inventory":
			if(display.characterVisible())
			{
				input.activeWindow = "character";
				display.selectInventory(-1);
				display.selectCharacterItem(characterItems.current);
			}
			return;
	}
}


input.prevWindow = function()
{
	switch (input.activeWindow)
	{
		case "character":
			if(!inventory.empty())
			{
				input.activeWindow = "inventory";
				display.selectCharacterItem(-1);
				display.selectInventory(inventory.current);
			}
			else
			{
				if(!options.empty())
				{
					input.activeWindow = "options";
					display.selectCharacterItem(-1);
					display.selectOption(options.current);
				}
			}

			return;
		
		case "inventory":
			if(!options.empty())
				{
					input.activeWindow = "options";
					display.selectInventory(-1);
					display.selectOption(options.current);
				}
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
			
		case "character":
			characterItems.next();
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
			
		case "character":
			characterItems.prev();
			return;
	}
}


input.chooseItem = function()
{
	switch (input.activeWindow)
	{
		case "options":
			options.useCurrent();
			return;
			
		case "inventory":
			inventory.useCurrent();
			return;
			
		case "character":
			characterItems.useCurrent();
			return;
	}
}