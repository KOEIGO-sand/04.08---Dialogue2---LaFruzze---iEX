/* eslint-disable no-undef, no-unused-vars  */

/*
Instructor Notes:
...

function done is available

TODO:
Test ipad copy paste.

*/

//      p5config       //
p5config.z_obj_doc_notes = true; // show ojb_doc_note buttons
p5config.setBGBlack = true; //     set css bg black
p5config.game_image = true; //    display static image
p5config.showCode = true; //     allow copy paste
p5config.touchOFF = true; //    turn off touch
// p5config.fps = true; //       show fps counter
// p5config.koeigo = true; //     show Koeigo border
// p5config.sigils = true; //      show background moving sprite
// p5config.game_builder = true; // show full game interface
// p5config.TURNOFF_draw = true; // temporarily shutoff sketch draw
// p5config.screenshot_button = true; // PC only! screenshots

// OBJECTIVES DOCUMENTATION AND NOTES

/* +++++++++++++++++++++++++++++++++++++++/
█▀█ █▄▄ ░░█ █▀▀ █▀▀ ▀█▀ █ █░█ █▀▀ █▀
█▄█ █▄█ █▄█ ██▄ █▄▄ ░█░ █ ▀▄▀ ██▄ ▄█
*/
pobj.objectives = `++ GOALS ++  
[Individually]

0. Fork this into your own project,

1. Draw a rectangular dialogue box,

2. Add color to the box,

3. Put any kind of text inside the box,

4. Add text formatting and make it orderly,

5. Edit the text/make dialogue between characters.
`;

/* +++++++++++++++++++++++++++++++++++++++/
█▀▄ █▀█ █▀▀ █░█ █▀▄▀█ █▀▀ █▄░█ ▀█▀ ▄▀█ ▀█▀ █ █▀█ █▄░█
█▄▀ █▄█ █▄▄ █▄█ █░▀░█ ██▄ █░▀█ ░█░ █▀█ ░█░ █ █▄█ █░▀█
*/
pobj.documentation = `++ DOCUMENTATION ++

1. fill( r, g, b ) 
.. replace rgb with 0-255 number values
.. this will give you color for objects that come later!
.. you can add a 4th number to be transparent


2. stroke( r, g, b )
.. add an outline color
.. use noStroke() to remove it.


3. strokeWeight( number )
.. put in any number of pixels you like for outline width


4. rect( x, y, w, h )
.. add a rectangle at any x and y, then say how wide and tall it is.


5. text( "string", x, y )
.. add a string of text inside quotes to display.
.. place it at any x and y coord.


6. textAlign( "center", "top" )
.. place above a text function to change how it aligns to your x and y coord.
.. you may use "" quote strings such as "center" "top" "bottom" "baseline"
.. or you may use CENTER TOP BOTTOM BASELINE

7. textSize( number )
.. choose a number near 14

`;

/* +++++++++++++++++++++++++++++++++++++++/
█▄░█ █▀█ ▀█▀ █▀▀ █▀
█░▀█ █▄█ ░█░ ██▄ ▄█
*/
pobj.notes = `++ LESSONS COVERED ++

-- 1.2a01 FILL/STROKE -- 
RGB color for shape primitives

-- 1.2c03 RECT -- 
placement/sizing of rectangles

-- 1.2.4 TEXT -- 
placement/alignment/formatting of text


++ NOTES ++
1. Major focus on X and Y positioning.

2. Understanding the "Context" of X and Y
   is important, so we should pay attention
   to X and Y positioning in every lesson.

3. Using X and Y in many different scenarios
   is the key to truly understanding pixel
   differences, bounds, grids and ratios!

`;
