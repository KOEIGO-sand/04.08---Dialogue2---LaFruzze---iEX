/* eslint-disable no-undef, no-unused-vars */

// https://rpgtileset.com/

/*
█░█ ▄▀█ █▀█ █▀
▀▄▀ █▀█ █▀▄ ▄█ 
*/
let p5config = {};
let screenshotButton;
let game_img = {};
let pobj = {};

function addtodraw() {
  //
}

function screenshot() {
  //saveCanvas(myCanvas, "screenshotLF", "png");
  saveCanvas();
}

/*+++++++++++++++++++++++++++++++++++++++++*/
function preload() {
  if (p5config.touchOFF) {
    document.styleSheets[0].rules[0].style["touch-action"] = "none";
  }
  if (p5config.koeigo) {
    preload_KOEIGO();
  }
  if (p5config.game_builder) {
    preload_GAME();
  }
  if (p5config.sigils) {
    preload_SIGILS();
  }
  if (p5config.game_image) {
    //game_boat_bg = loadImage("img/game_boat_bgs.png");
    game_img["400"] = createGraphics(400, 400);
    game_img.char_left = loadImage("top_assets/character/portrait/tomboy.png");
    game_img.char_right = loadImage(
      "top_assets/character/portrait/dudebro.png"
    );
    game_img.bg = loadImage(
      "top_assets/examples/tailor_tales__forest_by_pinkfirefly_d3h02qj.jpg"
    );
    game_img.mini_left = loadImage(
      "top_assets/character/random/hetaliasprite.png"
    );
    game_img.mini_right = loadImage("top_assets/character/random/fncchar.png");
  }
  PRELOAD();
}

/*+++++++++++++++++++++++++++++++++++++++++++*/
function setup() {
  _CREATECANVAS();
  if (p5config.koeigo) {
    setup_KOEIGO();
  }
  if (p5config.showCode) {
    showCode("/sketch.js"); // allows copy-paste
  }
  if (p5config.setBGBlack) {
    setCSSprop("body", "background", "black");
  }
  if (p5config.game_builder) {
    setup_GAME();
  }
  if (p5config.sigils) {
    setup_SIGILS();
  }
  if (p5config.game_image) {
    game_img.bg = game_img.bg.get(5, 20, 400, 400);
    game_img["400"].image(game_img.char_left, -20, 150);
    game_img["400"].scale(-1, 1);
    game_img["400"].image(game_img.char_right, -460, 150);
    game_img["400"].scale(-1, 1);
    game_img.mini_left = game_img.mini_left.get(0, 32 * 2, 32, 32);
    //game_img.mini_right = game_img.mini_right.get(120 * 0, 120 * 1, 120, 120);
    let gi_mr = game_img.mini_right;
    game_img.mini_right = game_img.mini_right.get(
      0,
      0,
      gi_mr.width,
      gi_mr.height * 0.9
    );
    let ratio = 0.6;
    game_img.mini_right.resize(50 * ratio, 70 * ratio);
  }
  SETUP();
  if (p5config.screenshot_button) {
    screenshotButton = createButton("screenshot");
    screenshotButton.position(0, 400);
    screenshotButton.style("background", "black");
    screenshotButton.style("color", "gray");
    screenshotButton.mousePressed(() => {
      screenshot();
    });
  }

  if (p5config.z_obj_doc_notes) {
    document.addEventListener("click", (e) => {
      for (ie in elems.innerelems) {
        elems.innerelems[ie].hide();
      }
    });

    c_btn("objectives", 5, 0);
    c_btn("documentation", 160, 0);
    c_btn("notes", 360, 0);
    for (el in elems) {
      if (el === "innerelems") {
        continue;
      }
      elems[el].elt.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    c_div("objectives");
    c_div("documentation");
    c_div("notes");
    let ielems = elems.innerelems;
    for (iel in ielems) {
      ielems[iel].elt.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }
  }
}

/*+++++++++++++++++++++++++++++++++++++++++*/
function draw() {
  if (p5config.sigils) {
    sigilsTest();
  }
  if (p5config.game_builder) {
    draw_GAME();
  }
  if (p5config.game_image) {
    image(game_img.bg, 0, 0);
    image(game_img.mini_left, 150, 195);
    image(game_img.mini_right, 200, 190);
    image(game_img["400"], 0, 0);
  }
  //drawChat();
  if (p5config.koeigo) {
    draw_KOEIGO();
  }
  if (!p5config.TURNOFF_draw) {
    DRAW();
  }
  if (p5config.fps) {
    fpsCounter();
  }
  addtodraw();
}

function simpleR(
  degrees,
  _x,
  _y,
  CBdrawItem = () => {
    "function";
  }
) {
  push();
  angleMode("degrees");
  translate(_x, _y);
  rotate(degrees);
  CBdrawItem();
  pop();
}

// (EOF)
