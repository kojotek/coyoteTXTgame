/*obsluga klawiszy*/

//enter			13
//shift			16
//spacja		32
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
			display.optionList.prev();
			break;

		case 40:
			display.optionList.next();
			break;

		case 16:
			display.optionList.extend();
			break;

		case 13:
			display.optionList.choose();
			break;

		case 188:
			display.equipList.prev();
			break;

		case 190:
			display.equipList.next();
			break;
			
		case 32:
			display.equipList.choose();
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