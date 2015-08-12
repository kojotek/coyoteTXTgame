display.characterItemListPosition = 0;
display._characterVisible = false;

display.displayCharacterInfo = function()
{
	display._characterVisible = true;
	document.getElementById("characterNameLabel").innerHTML = "Personalia: ";
	document.getElementById("characterNameValue").innerHTML = gameState.currentCharacter.name + " " + gameState.currentCharacter.surname;
	document.getElementById("characterJobLabel").innerHTML = "Zawód: ";
	document.getElementById("characterJobValue").innerHTML = gameState.currentCharacter.job;
	document.getElementById("characterAgeLabel").innerHTML = "Wiek: ";
	document.getElementById("characterAgeValue").innerHTML = gameState.currentCharacter.age;
	document.getElementById("characterStat1Label").innerHTML = "Stat1: ";
	document.getElementById("characterStat1Value").innerHTML = gameState.currentCharacter.stat1current + "/" + gameState.currentCharacter.stat1max;
	document.getElementById("characterStat2Label").innerHTML = "Stat2: ";
	document.getElementById("characterStat2Value").innerHTML = gameState.currentCharacter.stat2current + "/" + gameState.currentCharacter.stat2max;
	document.getElementById("characterStat3Label").innerHTML = "Stat3: ";
	document.getElementById("characterStat3Value").innerHTML = gameState.currentCharacter.stat3current + "/" + gameState.currentCharacter.stat3max;
}


display.hideCharacterInfo = function()
{
	display._characterVisible = false;
	document.getElementById("characterNameLabel").innerHTML =  "";
	document.getElementById("characterNameValue").innerHTML =  "";
	document.getElementById("characterJobLabel").innerHTML =   "";
	document.getElementById("characterJobValue").innerHTML =   "";
	document.getElementById("characterAgeLabel").innerHTML =   "";
	document.getElementById("characterAgeValue").innerHTML =   "";
	document.getElementById("characterStat1Label").innerHTML = "";
	document.getElementById("characterStat1Value").innerHTML = "";
	document.getElementById("characterStat2Label").innerHTML = "";
	document.getElementById("characterStat2Value").innerHTML = "";
	document.getElementById("characterStat3Label").innerHTML = "";
	document.getElementById("characterStat3Value").innerHTML = "";
	if(input.activeWindow === "character")
	{
		input.prevWindow();
	}
}


display.selectCharacterItem = function( index )
{	
	if (document.getElementById("selectedCharacterItem") !== null){
		document.getElementById("selectedCharacterItem").id = undefined;
	}

	var table = document.getElementById("characterTable");
	if ( table.rows[index] !== undefined ){
		table.rows[index].id = "selectedCharacterItem";
	}
	
	display.refreshCharacterItems();
}


display.countVisibleCharacterItems = function()
{
	var table = document.getElementById("characterTable");
	var box = document.getElementById("characterBox");
	var boxHeight = box.offsetHeight;
	
	if (table.rows.length > 0)
	{
		var row = table.rows[0];
		var rowDisplay = row.style.display;
		row.style.display = "";
		var rowHeight = row.offsetHeight;
		row.style.display = rowDisplay;

		var visibleRows = Math.floor((boxHeight*0.94)/rowHeight);
		return visibleRows;
	}
	return -1;
}


display.refreshCharacterItems = function()
{
	if ( characterItems.current < display.characterItemListPosition && characterItems.current >= 0 ){
		display.characterItemListPosition = characterItems.current;
	}
	
	if ( characterItems.current > ( display.characterItemListPosition + display.countVisibleCharacterItems() - 1 ) ) {
		display.characterItemListPosition = characterItems.current - display.countVisibleCharacterItems() + 1;
	}

	var table = document.getElementById("characterTable");

	var characterItemsArray = document.getElementById("characterTable").rows;
	
	for ( var i = 0; i < characterItemsArray.length; i++ ){
		if (i >= display.characterItemListPosition && i < (display.characterItemListPosition + display.countVisibleCharacterItems()) ){
			table.rows[i].style.display = "";
		}
		else{
			table.rows[i].style.display = "none";
		}
	}
}


display.characterVisible = function()
{
	return display._characterVisible;
}