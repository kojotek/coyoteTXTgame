display.equipList = new Object();
display.equipList._allEquips = new Object();
display.equipList._currentEquip = 0;
display.equipList._upperLimit = 0;
display.equipList._lowerLimit = 0;


display.equipList.add = function( equip )
{
	var table = document.getElementById("equipTable");
    var row = table.insertRow(table.rows.length);
	row.className = "equip";
	row.tag = equip.tag;
	row.text = equip.text;
	display.window.refreshEquip();
}


display.equipList.remove = function( tag )
{
	var table = document.getElementById("equipTable");
	var indexToDelete = findWithAttr(table.rows, "tag", tag);
	
	if (indexToDelete !== undefined){
		table.deleteRow(indexToDelete);
	}
	
	if ( indexToDelete <= display.equipList._currentEquip ){
		display.equipList._currentEquip = Math.max(0, display.equipList._currentEquip-1);
	}
	
	display.window.refreshEquip();
}


display.equipList.next = function()
{
	display.equipList._currentEquip = Math.max( Math.min( display.equipList._currentEquip+ 1, game.equip.count()-1  ), 0 );
	display.window.refreshEquip();
}


display.equipList.prev = function()
{
	display.equipList._currentEquip = Math.min( Math.max( display.equipList._currentEquip-1, 0 ), game.equip.count() );
	display.window.refreshEquip();
}


display.equipList.choose = function()
{
	var chosen = document.getElementById("selectedEquip");
	if (chosen !== undefined){
		game.equip.use( chosen.tag );
	}
}