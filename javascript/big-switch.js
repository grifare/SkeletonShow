/* JavaScript Document
 * grifare.info
 * Author name    : Armagan Tekdoner
 * Student Number : 200253439
 * Assignment Name: Motion Graphics Exercise
 * Instructor     : Scott McCrindle
 * Date           : February 2015
 * File name      : big-switch.js
 * Website		  : http://javascript.grifare.info
,---.|             |o      ,---.     o ,---.              
`---.|--- .   .,---|.,---. |  _.,---.. |__.,---.,---.,---.
    ||    |   ||   |||   | |   ||    | |   ,---||    |---'
`---'`---'`---'`---'``---' `---'`    ` `   `---^`    `---'  
*/

// stores the current year in a variable
var currentYear = (new Date).getFullYear();

// image preloader
function preloader() {
     // counter
     var i = 0;
     // create object
     imageObj = new Image();
     // set image list using absolute path
     images = new Array();
     images[0]="http://javascript.grifare.info/BigSwitch/images/button-green.png"
     images[1]="http://javascript.grifare.info/BigSwitch/images/button-red.png"
     images[2]="http://javascript.grifare.info/BigSwitch/images/lightbulb1.png"
     images[3]="http://javascript.grifare.info/BigSwitch/images/lightbulb2.png"
     images[4]="http://javascript.grifare.info/BigSwitch/images/metal-background.jpg"
     images[5]="http://javascript.grifare.info/BigSwitch/images/space-hole.jpg"		 
     images[6]="http://javascript.grifare.info/BigSwitch/images/skeleton-in-closet.jpg"
     images[7]="http://javascript.grifare.info/BigSwitch/images/skeletons-dancing.jpg"	 
     images[8]="http://javascript.grifare.info/BigSwitch/images/lightening-strike.jpg"
     images[9]="http://javascript.grifare.info/BigSwitch/images/scary-skeleton.jpg"	 
     images[10]="http://javascript.grifare.info/BigSwitch/images/space.jpg"	
	 
     // start preloading
     for(i=0; i<=10; i++) {
          imageObj.src=images[i];
     }
} 

	
// full screen
	function requestFullScreen(element) {
		// Supports most browsers and their versions.
		var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;
		
		if (requestMethod) { // Native full screen.
			requestMethod.call(element);
		} else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}
//	requestFullScreen(document.body);

// functions
function turnOnTheLight() {	
	// displays green label of the switch when the bulb is turned on
	$( "section div:nth-of-type(1) img" ).attr( {'src':'images/button-green.png' , 'alt':'switch' , 'title':'light turned on' } );
	//selects the element, swaps the image
	$('header div img').attr( {'src':'images/lightbulb2.png' , 'alt':'light bulb' , 'title':'light turned on - click switch to turn off'} );
	$('ol')
	  .delay(130)
	  .queue( function(next){ 
		$(this).css('color','#f8f19d'); 
		next(); 
	});
	// displays a different message when the bulb is turned on
	$( "section h3:nth-of-type(1)" ).text("Turn off the light to save the planet ▶");	

}

function turnOffTheLight() {
	// displays green label of the switch when the buld is turned off	
	$( "section div:nth-of-type(1) img" ).attr( {'src':'images/button-red.png' , 'alt':'switch' , 'title':'light turned off' } );	
	$('header div img').attr( {'src':'images/lightbulb1.png' , 'alt':'light bulb' , 'title':'light turned off - click switch to turn on'} );
	//selects the element, changes the font colour with a short delay
	$('ol').css('color','#666');
	// reverses the message when the bulb is turned off
	$( "section h3:nth-of-type(1)" ).text("Turn on the light to see the instructions better ▶");		
}



function doomsday(){
//using setTimeout method, a sequence of events are defined
// lightening strikes in the middle after 800ms
	setTimeout(function(){$( 'section' ).css( "background-image","url(images/lightening-strike.jpg)" )},800);
// that image is removed after 300ms
	setTimeout(function(){$('section').css( 'background-image','none' )},1100);
// lightening strikes again after 800ms
	setTimeout(function(){$( 'header + div' ).css( {'background-image':'url(images/lightening-strike.jpg)' , 'background-repeat':'repeat' } )},1900);
// space image appears after 300ms	
	setTimeout(function(){ $('section').css( 'background-image','url(images/space-hole.jpg)' ) },2200);
// lightening 2 removed too after 400ms
	setTimeout(function(){$('header + div').css( 'background-image','none' )},2300);	
// skeletons appear after 200ms
	setTimeout(function(){$( 'body' ).css( {'background-image':'url(images/skeletons-dancing.png)' , 'background-repeat':'no-repeat' , 'background-position':'95% 80%'} )},2500);
// hidden span displayed : after 1000ms (interacts with CSS file)
	setTimeout(function(){$('aside + span').text( 'Nooooo!!!!! You opened a hole!' ).css( 'display','block' )},3500);	
// skeletons removed after 1300ms
	setTimeout(function(){$('body').css( 'background-image','none' )},4500);
// many elements removed, messages changed
	setTimeout(function(){
		$('aside + span').css( 'display','none' )
		// many elements such as buttons and their instructions are removed
		$( 'aside,section' ).empty();
		// title changes
		$( 'h1' ).text( 'D-day' ).css( {'letter-spacing':'20px','font-weight':'bold'} );
		$( 'h2,h3' ).text( 'Get out of here NOW' ).css( 'color','#d1231f' );
		$( 'h2 + p' ).text( 'Or it will be too late.' );
	},9000);
// light bulb is alit again, instructions change, background colour changes
	setTimeout(function(){
		$( 'h2,h3' ).css( 'display','none' );
	    $( "header div" ).html("<img src='images/lightbulb2.png' alt='light bulb alit' title='light turned on' />");
		$( 'ol' ).html(
		'<li>You are in trouble</li><li>You are in trouble</li><li>You are in trouble</li><li>You are in trouble</li><li>You are in trouble</li>'
		);
		//selects the element, changes the font colour with delay
		$('ol')
		  .delay(130)
		  .queue( function(next){ 
			$(this).css('color','#f8f19d'); 
			next(); 
		});		
		$( 'h2 + p' ).text( 'Not much time left.' ).css( 'color','#d1231f' );
		$( 'body' ).css( 'background-color','#000');	
	},13000);
// light bulb disappears
	setTimeout(function(){
	    $( "header,footer" ).css( 'display','none' );
		$( 'html' ).css( {'background':'#000','color':'#333'} );
		for( i=0; i<=300; i++ ){
			$( 'html' ).append(
			'<span>You are in trouble </span>'
			);				
		}
	},18000);
// rotating sky enters	
	setTimeout(function(){
		$('section').css( 'background-image','none' );
		$('span').remove();		
		$( 'body > div:nth-of-type(1)' ).html( '<img src="images/space.jpg" alt="space" title="you were told you were in trouble" />' ).css( 'display','block' );
	},23000);
// rotating sky fades out scary skeleton fades in		
	setTimeout(function(){	
		$("body > div:nth-of-type(1) img").fadeOut(function() { 
		  $(this).load(function() { 
		  $(this).fadeIn(2000); }); 
		  $(this).attr("src", "images/scary-skeleton.jpg");
		});
	},30000);	
// the window widens		
	setTimeout(function(){			
		$( 'body > div:nth-of-type(1)' ).css( {"width":"600","height":"500"} );
	},38000);
// scary skeleton becomes background	
	setTimeout(function(){	
		$( 'body > div:nth-of-type(1)' ).empty();				
		$( 'body' ).css( {'background-image':'url(images/scary-skeleton.jpg)' , 'background-repeat':'no-repeat' , 'background-position':'center'} );
	},45000);		
// show ends	
	setTimeout(function(){
		for( i=0; i<=10; i++ ){		
		  $( 'body > div:nth-of-type(1)' ).append( '<h1>Thank you </h1>' );				
		};
	},48000);
// goes back to beginning	
	setTimeout(function(){
		location.reload();
	},50000);	
	
}// close function doomsday

		 
// declare counters outside the function so that they will not be reset!
var clickCounter = 0;
var interrupteurCounter = 0;
$(document).ready(function(){
	
	$( "section div:nth-of-type(1)"  ).click(function(){
		// check if counter is even			
		if ( clickCounter % 2 == 0 ){
			turnOnTheLight();			
		} 
		// check if counter is odd		
		if (clickCounter % 2 == 1 ){
			turnOffTheLight();		
		}
		// increment the counter
		clickCounter++;				
	});// close switch1 click function

	$( ".hole" ).click(function(){
		if (interrupteurCounter % 2 == 0 ){	// switch turned on state
		  // inserts a link to the special effects css file	
		  $( "head" ).append('<link rel="stylesheet" href="css/special-effects.css">');
		  // displays a different message when effects start
		  $( "section h3:nth-of-type(2)" ).text("Turn off the engine while you can ▶");
		  // calls special effects function
		  doomsday();
		}
		
		if (interrupteurCounter % 2 == 1 ){	// switch turned off state
		  // deletes the newly-linked special effects file by simply reloading page
		  // note that, remove should be avoided. It deletes the link but effects linger
		  location.reload();
		}		
		// increment the counter
		interrupteurCounter++;				
	});// close switch2 click funtion

});// close doc dot ready
/* end of file */