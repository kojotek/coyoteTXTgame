display.displayCharacterInfo = function()
{
	document.getElementById("characterName").innerHTML = "Personalia: ";
	document.getElementById("characterNameValue").innerHTML = gameState.currentCharacter.name + " " + gameState.currentCharacter.surname;
	document.getElementById("characterJob").innerHTML = "Zawód: ";
	document.getElementById("characterJobValue").innerHTML = gameState.currentCharacter.job;
	document.getElementById("characterAge").innerHTML = "Wiek ";
	document.getElementById("characterAgeValue").innerHTML = gameState.currentCharacter.age;
	document.getElementById("characterStat1").innerHTML = "Stat1: ";
	document.getElementById("characterStat1Value").innerHTML = gameState.currentCharacter.stat1current + "/" + gameState.currentCharacter.stat1max;
	document.getElementById("characterStat2").innerHTML = "Stat2: ";
	document.getElementById("characterStat2Value").innerHTML = gameState.currentCharacter.stat2current + "/" + gameState.currentCharacter.stat2max;
	document.getElementById("characterStat3").innerHTML = "Stat3: ";
	document.getElementById("characterStat3Value").innerHTML = gameState.currentCharacter.stat3current + "/" + gameState.currentCharacter.stat3max;
}