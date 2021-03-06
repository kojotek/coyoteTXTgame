display.optionListPosition = 0;
display.optionListAnimationActive = false;
display.optionListAnimationProgress = 0;
display.optionListAnimationFrames = 200;
display.optionListAnimationHandler;


display.addOption = function( text )
{
	var table = document.getElementById("optionTable");
    var row = table.insertRow(table.rows.length);
	var cell = row.insertCell(0);
	cell.innerHTML = text;
	display.refreshOptions();
/*	
	if ( display.optionListAnimationActive === false )
	{
		display.optionListAnimationActive = true;
		display.optionListAnimationHandler = setInterval( display.addOptionAnimation, 100 * display.frameLength);
	}
	
	display.optionListAnimationProgress = 0;
*/
}


display.addOptionAnimation = function()
{
	var opBox = document.getElementById("optionBox");
	
	var color = new tinycolor();
	color._r = 255 - (display.optionListAnimationProgress * (255 / display.optionListAnimationFrames));
	color._g = 255 - (display.optionListAnimationProgress * ((255-170) / display.optionListAnimationFrames));
	color._b = 255 - (display.optionListAnimationProgress * (255 / display.optionListAnimationFrames));
	
	opBox.style.borderColor = color.toHexString();
	
	if( display.optionListAnimationProgress >= display.optionListAnimationFrames )
	{
		clearInterval(display.optionListAnimationHandler);
		display.optionListAnimationProgress = 0;
		display.optionListAnimationActive = false;
		opBox.style.borderColor = "#00AA00";
	}
	else
	{
		display.optionListAnimationProgress += 1 / display.frameLength;
	}
}


display.removeOption = function( index )
{
	var table = document.getElementById("optionTable");
	table.deleteRow(index);
}


display.selectOption = function( index )
{	
	if (document.getElementById("selectedOption") !== null){
		document.getElementById("selectedOption").id = undefined;
	}

	var table = document.getElementById("optionTable");
	if ( table.rows[index] !== undefined ){
		table.rows[index].id = "selectedOption";
	}
	
	display.refreshOptions();
}


display.countVisibleOptions = function()
{
	var table = document.getElementById("optionTable");
	var box = document.getElementById("optionBox");
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



display.refreshOptions = function()
{
	document.getElementById("optionLowerArrow").style.display = "none";
	document.getElementById("optionUpperArrow").style.display = "none";
	
	if ( options.current < display.optionListPosition && options.current >= 0 ){
		display.optionListPosition = options.current;
	}
	
	if ( options.current > ( display.optionListPosition + display.countVisibleOptions() - 1 ) ) {
		display.optionListPosition = options.current - display.countVisibleOptions() + 1;
	}

	if ( display.optionListPosition > 0 && options.array.length > 0 )
	{
		document.getElementById("optionUpperArrow").style.display = "initial";
	}

	if ( (display.optionListPosition + display.countVisibleOptions() ) < options.array.length )
	{
		document.getElementById("optionLowerArrow").style.display = "initial";
	}
	
	var table = document.getElementById("optionTable");

	for ( var i = 0; i < options.array.length; i++ ){
		if (i >= display.optionListPosition && i < (display.optionListPosition + display.countVisibleOptions()) ){
			table.rows[i].style.display = "";
		}
		else{
			table.rows[i].style.display = "none";
		}
	}
}



display.setExtendedOptionBox = function( val )
{
	if (val === true){
		document.getElementById("optionBox").className = "optionBox extended";
		document.getElementById("optionTable").className = "optionTable extended";
	}
	else{
		document.getElementById("optionBox").className = "optionBox";
		document.getElementById("optionTable").className = "optionTable";
	}
}