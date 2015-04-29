var display = new Object();
display.window = new Object();


display.window.refresh = function()
{
	
	var allOptions = document.getElementsByClassName("option");

	display.window.reset();
	display.window.markSelectedOption();
	display.window.setOptionBoxMode();

	
/*inicjalizacja zmiennych potrzebnych do obliczen*/
	var optionTableHeight = 0.88 * document.getElementById("optionBox").offsetHeight;
	var sum = 0;
	var visibleOptions = 0;
	
	
	for( var i=0; i<allOptions.length; i++ )
	{	
		
	/*Ucinanie za dlugich opcji*/
		var lh = allOptions[i].offsetHeight;
		var k = 1;
		while ( k !== allOptions[i].text.length+1 ){
			allOptions[i].innerHTML = allOptions[i].text.substr(0,k);
			k++;
			if( allOptions[i].offsetHeight !== lh ){
				allOptions[i].innerHTML = allOptions[i].text.substr(0,k-7) + "...";
				break;
			}
		}
		
		
	/*policz ile linii zmiesci sie w ramce*/
		sum = sum + allOptions[i].offsetHeight;
		if ( sum < optionTableHeight ){
			visibleOptions = i;
		}
		
		
	}
	
	
/*przesun zakres zaleznie od polozenia currentOption*/
	while( (display.optionList._upperLimit - display.optionList._lowerLimit) < visibleOptions ){
		display.optionList._upperLimit++;
	}
	while( (display.optionList._upperLimit - display.optionList._lowerLimit) > visibleOptions ){
		display.optionList._upperLimit--;
	}
	while( display.optionList._currentOption > display.optionList._upperLimit ){
		display.optionList._lowerLimit++; display.optionList._upperLimit++;
	}
	while( display.optionList._currentOption < display.optionList._lowerLimit ){
		display.optionList._lowerLimit--; display.optionList._upperLimit--;
	}
	

/*wyswietl tylko te opcje, ktore mieszcza sie w zakresie*/
	for( var i=0; i<display.optionList._lowerLimit; i++ ){
		allOptions[i].style.display = "none";
	}
	for( var i=display.optionList._upperLimit+1; i<allOptions.length; i++ ){
		allOptions[i].style.display = "none";
	}

}


display.window.reset = function()
{
	var allOptions = document.getElementsByClassName("option");

	for( var i=0; i<allOptions.length; i++ ){
		allOptions[i].style.display = "table-row";
		allOptions[i].id = undefined;
		allOptions[i].innerHTML = "&nbsp";
	}
}


display.window.markSelectedOption = function()
{
	var allOptions = document.getElementsByClassName("option");
	allOptions[display.optionList._currentOption].id = "selectedOption";
}


display.window.setOptionBoxMode = function()
{
	document.getElementById("optionBox").className = (display.optionList._optionBoxExtended ? "optionBox extended" : "optionBox");
	document.getElementById("optionTable").className = (display.optionList._optionBoxExtended ? "optionTable extended" : "optionTable");
}


display.window.drawOptions = function()
{
	/*inicjalizacja zmiennych potrzebnych do obliczen*/
	var allOptions = document.getElementsByClassName("option");
	var optionTableHeight = 0.88 * document.getElementById("optionBox").offsetHeight;
	var sum = 0;
	var visibleOptions = 0;
	
	
	for( var i=0; i<allOptions.length; i++ )
	{	
	/*Ucinanie za dlugich opcji*/
		var lh = allOptions[i].offsetHeight;
		var k = 1;
		while ( k !== allOptions[i].text.length+1 ){
			allOptions[i].innerHTML = allOptions[i].text.substr(0,k);
			k++;
			if( allOptions[i].offsetHeight !== lh ){
				allOptions[i].innerHTML = allOptions[i].text.substr(0,k-7) + "...";
				break;
			}
		}
		
	/*policz ile linii zmiesci sie w ramce*/
		sum = sum + allOptions[i].offsetHeight;
		if ( sum < optionTableHeight ){
			visibleOptions = i;
		}
	}
	
	
/*przesun zakres zaleznie od polozenia currentOption*/
	while( (display.optionList._upperLimit - display.optionList._lowerLimit) < visibleOptions ){
		display.optionList._upperLimit++;
	}
	while( (display.optionList._upperLimit - display.optionList._lowerLimit) > visibleOptions ){
		display.optionList._upperLimit--;
	}
	while( display.optionList._currentOption > display.optionList._upperLimit ){
		display.optionList._lowerLimit++; display.optionList._upperLimit++;
	}
	while( display.optionList._currentOption < display.optionList._lowerLimit ){
		display.optionList._lowerLimit--; display.optionList._upperLimit--;
	}
	

/*wyswietl tylko te opcje, ktore mieszcza sie w zakresie*/
	for( var i=0; i<display.optionList._lowerLimit; i++ ){
		allOptions[i].style.display = "none";
	}
	for( var i=display.optionList._upperLimit+1; i<allOptions.length; i++ ){
		allOptions[i].style.display = "none";
	}
	
	
}