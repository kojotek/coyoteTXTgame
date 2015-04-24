var display = new Object();

display.mainText = new Object();
display.mainText._counter = 0;
display.mainText._contentToDisplay = new String();
display.mainText._intervalFuncHandler;

display.mainText.write = function(str)
{
	display.mainText._counter = 0;
	display.mainText._contentToWrite = str;
	display.mainText._intervalFuncHandler = setInterval(display.mainText._writeByChar, 30);
}


display.mainText._writeByChar = function()
{
	if (display.mainText._counter < display.mainText._contentToDisplay.length)
	{
		display.mainText._counter++;
	}
	else
	{
		clearInterval(display.mainText._intervalFuncHandler);
	}
	document.getElementById("mainTextField").innerHTML = display.mainText._contentToDisplay.substring(0, display.mainText._counter);
}