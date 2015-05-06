var display = new Object();
display.window = new Object();


display.window.refresh = function()
{
	display.optionList._allOptions = document.getElementsByClassName("option");

	display.window.reset();
	display.window.markSelectedOption();
	display.window.setOptionBoxMode();
	display.window.drawOptions();

}


display.window.reset = function()
{

	for( var i=0; i<display.optionList._allOptions.length; i++ ){
		display.optionList._allOptions[i].style.display = "table-row";
		display.optionList._allOptions[i].id = undefined;
		display.optionList._allOptions[i].innerHTML = "&nbsp";
	}
}


display.window.markSelectedOption = function()
{
	var toSelect = display.optionList._allOptions[display.optionList._currentOption];
	if ( toSelect !== undefined ){
		toSelect.id = "selectedOption";
	}
}


display.window.setOptionBoxMode = function()
{
	document.getElementById("optionBox").className = (display.optionList._optionBoxExtended ? "optionBox extended" : "optionBox");
	document.getElementById("optionTable").className = (display.optionList._optionBoxExtended ? "optionTable extended" : "optionTable");
}


display.window.drawOptions = function()
{
	/*inicjalizacja zmiennych potrzebnych do obliczen*/
	var optionTableHeight = 0.88 * document.getElementById("optionBox").offsetHeight;
	var sum = 0;
	var visibleOptions = 0;
	var lineHeight;
	var charsInRow = 1;
	
	/*liczenie, ile znakow miesci sie w linii*/
	if ( display.optionList._allOptions.length > 0 ){
		lineHeight = display.optionList._allOptions[0].offsetHeight;
		while ( display.optionList._allOptions[0].offsetHeight === lineHeight ){
			display.optionList._allOptions[0].innerHTML += "c ";
			charsInRow += 2;
		}
	}
	
	
	for( var i=0; i<display.optionList._allOptions.length; i++ )
	{	

	/*Ucinanie za dlugich opcji*/
		if( display.optionList._allOptions[i].text.length >= charsInRow ){
			display.optionList._allOptions[i].innerHTML = display.optionList._allOptions[i].text.substr(0,charsInRow-7) + "...";
		}
		else{
			display.optionList._allOptions[i].innerHTML = display.optionList._allOptions[i].text;
		}
		
	/*policz ile linii zmiesci sie w ramce*/
		sum = sum + display.optionList._allOptions[i].offsetHeight;
		if ( sum < optionTableHeight ){
			visibleOptions = i;
		}
	}
	
	
/*ustal gorny limit*/
	display.optionList._upperLimit = display.optionList._lowerLimit + visibleOptions;

/*przesun limity tak, by currentOption zmiescilo sie w zakresie*/
	var shift = Math.max(0, display.optionList._currentOption - display.optionList._upperLimit) + Math.min(0, display.optionList._currentOption - display.optionList._lowerLimit);
	display.optionList._lowerLimit += shift;
	display.optionList._upperLimit += shift;
	
/*wyswietl tylko te opcje, ktore mieszcza sie w zakresie*/
	for( var i=0; i<display.optionList._lowerLimit; i++ ){
		display.optionList._allOptions[i].style.display = "none";
	}
	for( var i=display.optionList._upperLimit+1; i<display.optionList._allOptions.length; i++ ){
		display.optionList._allOptions[i].style.display = "none";
	}
	
}