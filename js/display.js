var display = new Object();
display.window = new Object();
display.window.activeBox = "optionBox";


display.window.prevItem = function()
{
	switch( display.window.activeBox )
	{
		case "optionBox":
			display.optionList.prev();
			break;
			
		case "equipBox":
			display.equipList.prev();
			break;
	}
}


display.window.nextItem = function()
{
	switch( display.window.activeBox )
	{
		case "optionBox":
			display.optionList.next();
			break;
			
		case "equipBox":
			display.equipList.next();
			break;
	}
}


display.window.prevBox = function()
{
	switch( display.window.activeBox )
	{
		case "equipBox":
			display.window.activeBox = "optionBox";
			display.window.unmarkSelectedEquip();
			display.window.markSelectedOption();
			break;
	}
}


display.window.nextBox = function()
{
	switch( display.window.activeBox )
	{
		case "optionBox":
			display.window.activeBox = "equipBox";
			display.window.unmarkSelectedOption();
			display.window.markSelectedEquip();
			break;
	}
}


display.window.chooseItem = function()
{
	switch( display.window.activeBox )
	{
		case "optionBox":
			display.optionList.choose();
			break;


		case "equipBox":
			display.equipList.choose();
			break;
	}
}


display.window.refresh = function()
{
	display.window.refreshOptions();
	display.window.refreshEquip();
}


display.window.refreshOptions = function()
{
	display.optionList._allOptions = document.getElementsByClassName("option");

	display.window.resetOptions();
	if ( display.window.activeBox === "optionBox" ){
		display.window.markSelectedOption();
	}
	else{
		display.window.unmarkSelectedOption();
	}	
	display.window.setOptionBoxMode();
	display.window.drawOptions();
}


display.window.refreshEquip = function()
{
	display.equipList._allEquips = document.getElementsByClassName("equip");

	display.window.resetEquip();
	if ( display.window.activeBox === "equipBox" ){
		display.window.markSelectedEquip();
	}
	else{
		display.window.unmarkSelectedEquip();
	}	
	display.window.drawEquips();
}


display.window.resetOptions = function()
{

	for( var i=0; i<display.optionList._allOptions.length; i++ ){
		display.optionList._allOptions[i].style.display = "table-row";
		display.optionList._allOptions[i].id = undefined;
		display.optionList._allOptions[i].innerHTML = "&nbsp";
	}

}


display.window.resetEquip = function()
{

	for( var i=0; i<display.equipList._allEquips.length; i++ )
	{
		display.equipList.remove( display.equipList._allEquips[i].tag );
	}

	for( var i=0; i<game.inventory.count(); i++ )
	{
		display.equipList.add( Object.keys(gameState.inventory)[i].tag );
		display.equipList._allEquips[i].style.display = "table-row";
		display.equipList._allEquips[i].id = undefined;
		display.equipList._allEquips[i].innerHTML = "&nbsp";
	}

}



display.window.markSelectedOption = function()
{
	var toSelect = display.optionList._allOptions[display.optionList._currentOption];
	if ( toSelect !== undefined ){
		toSelect.id = "selectedOption";
	}
}



display.window.unmarkSelectedOption = function()
{
	var toUnselect = display.optionList._allOptions[display.optionList._currentOption];
	if ( toUnselect !== undefined ){
		toUnselect.id = undefined;
	}
}



display.window.markSelectedEquip = function()
{
	var toSelect = display.equipList._allEquips[display.equipList._currentEquip];
	if ( toSelect !== undefined ){
		toSelect.id = "selectedEquip";
	}
}



display.window.unmarkSelectedEquip = function()
{
	var toSelect = display.equipList._allEquips[display.equipList._currentEquip];
	if ( toSelect !== undefined ){
		toSelect.id = undefined;
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



display.window.drawEquips = function()
{
	/*inicjalizacja zmiennych potrzebnych do obliczen*/
	var equipTableHeight = 0.88 * document.getElementById("equipBox").offsetHeight;
	var sum = 0;
	var visibleEquips = 0;
	var lineHeight;
	var charsInRow = 1;
	
	/*liczenie, ile znakow miesci sie w linii*/
	if ( display.equipList._allEquips.length > 0 ){
		lineHeight = display.equipList._allEquips[0].offsetHeight;
		while ( display.equipList._allEquips[0].offsetHeight === lineHeight ){
			display.equipList._allEquips[0].innerHTML += "c ";
			charsInRow += 2;
		}
	}
	
	
	for( var i=0; i<display.equipList._allEquips.length; i++ )
	{	

	/*Ucinanie za dlugich opcji*/
		if( display.equipList._allEquips[i].text.length >= charsInRow ){
			display.equipList._allEquips[i].innerHTML = display.equipList._allEquips[i].text.substr(0,charsInRow-7) + "...";
		}
		else{
			display.equipList._allEquips[i].innerHTML = display.equipList._allEquips[i].text;
		}
		
	/*policz ile linii zmiesci sie w ramce*/
		sum = sum + display.equipList._allEquips[i].offsetHeight;
		if ( sum < equipTableHeight ){
			visibleEquips = i;
		}
	}
	
	
/*ustal gorny limit*/
	display.equipList._upperLimit = display.equipList._lowerLimit + visibleEquips;

/*przesun limity tak, by currentEquip zmiescilo sie w zakresie*/
	var shift = Math.max(0, display.equipList._currentEquip - display.equipList._upperLimit) + Math.min(0, display.equipList._currentEquip - display.equipList._lowerLimit);
	display.equipList._lowerLimit += shift;
	display.equipList._upperLimit += shift;
	
/*wyswietl tylko te opcje, ktore mieszcza sie w zakresie*/
	for( var i=0; i<display.equipList._lowerLimit; i++ ){
		display.equipList._allEquips[i].style.display = "none";
	}
	for( var i=display.equipList._upperLimit+1; i<display.equipList._allEquips.length; i++ ){
		display.equipList._allEquips[i].style.display = "none";
	}
	
}