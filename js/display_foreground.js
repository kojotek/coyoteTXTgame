var darkening = 1;
var lightening = 2;

display.foregroundAnimationActive = false;
display.foregroundAnimationProgress = 0;
display.foregroundRiseAnimationFrames = 200;
display.foregroundRestAnimationFrames = 200;
display.foregroundDarkAttribute = 0.95;
display.foregroundAnimationColor;
display.foregroundAnimationHandler;
display.foregroundColorChange = darkening | lightening;

display.writeForeground = function( text, riseFrames, restFrames, backgroundColorChange, color, fontSize, callback )
{
	//domyslne parametry
	if (typeof(riseFrames)==='undefined') riseFrames = 150;
	if (typeof(restFrames)==='undefined') restFrames = 150;
	if (typeof(backgroundColorChange)==='undefined') backgroundColorChange = 0;
	if (typeof(color)==='undefined') color = "#FFFFFF";
	if (typeof(fontSize)==='undefined') fontSize = "6vw";
	

	
	if ( display.foregroundAnimationActive === false )
	{
		display.foregroundRiseAnimationFrames = riseFrames;
		display.foregroundRestAnimationFrames = restFrames;
		display.foregroundAnimationColor = color;
		document.getElementById("foregroundText").style.fontSize = fontSize;
		display.foregroundColorChange = backgroundColorChange;
		document.getElementById("foregroundText").innerHTML = text;
		display.foregroundAnimationActive = true;
		display.foregroundAnimationProgress = 0;
		display.foregroundAnimationHandler = setInterval( function() {display.writeForegroundAnimation(callback);}, 100 * display.frameLength);
	}
	else
	{
		setTimeout( function() { display.writeForeground(text, riseFrames, restFrames, backgroundColorChange, color, fontSize, callback); }, 100 );
	}
}


display.writeForegroundAnimation = function(callback)
{
	var fgText = document.getElementById("foregroundText");
	var fgBox = document.getElementById("foregroundBox");
	var textColor = new tinycolor(display.foregroundAnimationColor);
	var backgroundColor = new tinycolor("rgba(0,0,0,0)");
	
	if( display.foregroundAnimationProgress < display.foregroundRiseAnimationFrames )
	{
		textColor.setAlpha( display.foregroundAnimationProgress / display.foregroundRiseAnimationFrames );
		fgText.style.color = textColor.toRgbString();
		
		if( display.foregroundColorChange & darkening )
		{
			backgroundColor.setAlpha( (display.foregroundAnimationProgress / display.foregroundRiseAnimationFrames) * display.foregroundDarkAttribute );
			fgBox.style.backgroundColor = backgroundColor.toRgbString();
		}
	} 
	else
	{
		if( display.foregroundAnimationProgress < display.foregroundRiseAnimationFrames + display.foregroundRestAnimationFrames )
		{
			fgText.style.color = display.foregroundAnimationColor;
		} 
		else	
		{
			if( display.foregroundAnimationProgress < display.foregroundRiseAnimationFrames * 2 + display.foregroundRestAnimationFrames )
			{
				var fallFrame = display.foregroundAnimationProgress - (display.foregroundRiseAnimationFrames + display.foregroundRestAnimationFrames);
				var fallProgress = fallFrame / display.foregroundRiseAnimationFrames;
				textColor.setAlpha(  1 - fallProgress );
				fgText.style.color = textColor.toRgbString();
				if( display.foregroundColorChange & lightening )
				{
					backgroundColor.setAlpha(  (1 - fallProgress) * display.foregroundDarkAttribute );
					fgBox.style.backgroundColor = backgroundColor.toRgbString();
				}
			} 
		}
	}
	
	
	
	
	if( display.foregroundAnimationProgress > display.foregroundRiseAnimationFrames * 2 + display.foregroundRestAnimationFrames )
	{
		if( display.foregroundColorChange & darkening )
		{
			fgBox.style.backgroundColor = "rgba(0,0,0," + display.foregroundDarkAttribute + ")";
		}
		if( display.foregroundColorChange & lightening )
		{
			fgBox.style.backgroundColor = "rgba(0,0,0,0)";
		}

		fgText.style.color = "rgba(0,0,0,0)";
		clearInterval(display.foregroundAnimationHandler);
		display.foregroundAnimationProgress = 0;
		display.foregroundAnimationActive = false;
		if (typeof(callback) !== 'undefined') callback();
	}
	else
	{
		display.foregroundAnimationProgress++;
	}
}
