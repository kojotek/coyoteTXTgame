function Character()
{
	this.name;
	this.surname;
	this.age;
	this.job;
	
	this.stat1current;
	this.stat1max;
	
	this.stat2current;
	this.stat2max;
	
	this.stat3current;
	this.stat3max;
}


var characterItems = new Object();
characterItems.current = 0;

//////////////////////////////////////POPRAWIC//////////////////////////////////////POPRAWIC
characterItems.useCurrent = function()
{
	var funcName = "characterEvent_" + document.getElementById("characterTable").rows[characterItems.current].id;
	
	if (gameState.currentScene === undefined || gameState.currentScene === ""){
		return;
	}
	
	if ( scenes.list[gameState.currentScene][funcName] !== undefined ){
		scenes.list[gameState.currentScene][funcName]();
	}
}
//////////////////////////////////////POPRAWIC//////////////////////////////////////POPRAWIC

characterItems.setCurrent = function( index )
{
	characterItems.current = index;
	if (input.activeWindow === "character"){
		display.selectCharacterItem( characterItems.current );
	}
}


characterItems.next = function()
{
	var characterItemsArray = document.getElementById("characterTable").rows;
	var newIndex = Math.max ( 0, Math.min( characterItems.current+1, characterItemsArray.length-1 ) );
	characterItems.setCurrent(newIndex);
}


characterItems.prev = function()
{
	var characterItemsArray = document.getElementById("characterTable").rows;
	var newIndex = Math.max ( 0, Math.min( characterItems.current-1, characterItemsArray.length-1 ) );
	characterItems.setCurrent(newIndex);
}