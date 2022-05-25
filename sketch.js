/// <reference path="/sandbox/js/p5/global.d.ts" />
/* eslint-disable no-undef, no-unused-vars  */

/* ========================================/
 ██████╗░███████╗░░░░░██╗░██████╗         /
 ██╔══██╗██╔════╝░░░░░██║██╔════╝        /
 ██████╔╝██████╗░░░░░░██║╚█████╗░       /
 ██╔═══╝░╚════██╗██╗░░██║░╚═══██╗      /
 ██║░░░░░██████╔╝╚█████╔╝██████╔╝     /
 ╚═╝░░░░░╚═════╝░░╚════╝░╚═════╝░   */
// A Javascript Library for learning
// easy to understand graphics and
// interactive coding techniques

// (         ::PROJECT LAFRUZZE::            ) //
// (   A game-proj-centric way of learning   ) //
// (        The Koeigo Curriculum            ) //
// (      using sprites, stories, and        ) //
// (    management principles to craft       ) //
// (   a unique story-driven experience      ) //

/* +++++++++++++++++++++++++++++++++++++++/
█░█ ▄▀█ █▀█ █▀                           /
▀▄▀ █▀█ █▀▄ ▄█                         */
// let x = 0;
// let y = 0;
// let w = 0;
// let h = 0;

/* +++++++++++++++++++++++++++++++++++++++/
█▀█ █▀█ █▀▀ █░░ █▀█ ▄▀█ █▀▄               /
█▀▀ █▀▄ ██▄ █▄▄ █▄█ █▀█ █▄▀              */
function PRELOAD() {
  // for loading in images/sounds
}

/* +++++++++++++++++++++++++++++++++++++++/
█▀ █▀▀ ▀█▀ █░█ █▀█                        /
▄█ ██▄ ░█░ █▄█ █▀▀                       */
function SETUP() {
  // for initial setups/variables
}

/* ++++++++++++++++++++++++++++++++++++++++/
█▀▄ █▀█ ▄▀█ █░█░█                          /
█▄▀ █▀▄ █▀█ ▀▄▀▄▀                         */
function DRAW() {
  // for rendering on-screen /
  // for rendering on-screen
  fill(mouseX + mouseY / 2, mouseX, mouseY, 75);
  rect(0, 300, 400, 100);
  fill(255, 255, 255);
  textSize(20);
  //text("Hey gurlll! howzit goin?", 120, 350);
  //text("im fine how bout you? ", 120, 350);
  //text("Oh my mom was attacked by a dragon and died. ", 75, 350, 400 - 75);
}

// (EOF)
