function findWithAttr(array, attr, value)
{
    for(var i = 0; i < array.length; i += 1)
	{
        if(array[i][attr] === value)
		{
            return i;
        }
    }
}


function parse (text)
{
    while( text.indexOf("[") !== -1 )
    {
        var openTagBegining = 1+text.indexOf("[");
        var openTagEnd = text.indexOf("]");
        var openTag = text.substring(openTagBegining, openTagEnd);
        
        var closeTag = "[/" + openTag + "]";
        var closeTagBegining = text.indexOf(closeTag);
        var closeTagEnd = closeTagBegining + closeTag.length;

        if ( eval(openTag) === true )
        {
            text = text.replace(("["+openTag+"]"), "");
            text = text.replace(closeTag, "");
        }
        else
        {
            var toDelete = text.substring(openTagBegining-1, closeTagEnd);
            text = text.replace(toDelete, "");
        }
    }
    return text;
}