/*obsluga klawiszy*/

//left arrow	37
//up arrow		38
//right arrow	39
//down arrow	40
//shift			16

document.addEventListener('keydown', function(event) {
    switch(event.keyCode)
	{
		case 38:
			display.optionList.prev();
			break;

		case 40:
			display.optionList.next();
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