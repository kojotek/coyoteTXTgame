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
			display.window.prevItem();
			break;

		case 40:
			display.window.nextItem();
			break;

		case 37:
			display.window.prevBox();
			break;

		case 39:
			display.window.nextBox();
			break;
			
		case 13:
			display.window.chooseItem();
			break;
			
		case 16:
			display.optionList.extend();
			break;

    }
}, true);


document.addEventListener('keyup', function(event) {
    switch(event.keyCode)
	{
		case 16:
			display.optionList.shorten();
			break;
    }
}, true);