var q = new Object();

q.addScene = function(name)
{
	game.scenes.add(name);
}


q.addOption = function(tag, text)
{
	game.options.add(tag, text);
}


q.pairOptionWithFunction = function(tag, func)
{
	game.options.get(tag).onUse = func;
}


q.removeOption = function(tag)
{
	game.options.remove(tag);
}


q.addEquip = function(tag, text)
{
	game.equip.add(tag, text);
}