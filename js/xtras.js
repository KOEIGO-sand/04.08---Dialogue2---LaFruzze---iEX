/* eslint-disable no-undef, no-unused-vars    */

function setCSSprop(className, prop, val) {
  document.styleSheets[0].cssRules[findCSSClassIndex(className)].style[
    prop
  ] = val;
  function findCSSClassIndex(className) {
    let i = 0;
    for (let o of document.styleSheets[0].cssRules) {
      if (
        o.selectorText
          .toLowerCase()
          .trim()
          .indexOf(className.toLowerCase().trim()) > -1
      ) {
        return i;
      }
      i++;
    }
    return undefined;
  }
}

//
//
//++++++++++++++++++++++++++++++++++++++++++++
/*
██╗░░░██╗░█████╗░██████╗░░██████╗
██║░░░██║██╔══██╗██╔══██╗██╔════╝
╚██╗░██╔╝███████║██████╔╝╚█████╗░
░╚████╔╝░██╔══██║██╔══██╗░╚═══██╗=
░░╚██╔╝░░██║░░██║██║░░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░
*/

//
let xtras_o = { t: [], chat: {}, scene: {} }; // t is temporary!
let xtras_npc, xtras_player;
let xtras_def = "default";
let xtras_good = "good";
let xtras_bad = "bad";
let xtras_end = "end";
let xtras_ok = "ok";
let xtras_next = "next";
let xtras_none = "none";

//+++++++++++++++++++++++++++++++++++++++++
/*
░█████╗░██╗░░██╗░█████╗░████████╗
██╔══██╗██║░░██║██╔══██╗╚══██╔══╝
██║░░╚═╝███████║███████║░░░██║░░░
██║░░██╗██╔══██║██╔══██║░░░██║░░░
╚█████╔╝██║░░██║██║░░██║░░░██║░░░
░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░
*/
function drawChat() {
  //
  //drawChatPresets1(); // Runon
  //drawChatPresets2(); // Runoff
  //drawChatPresets3(); // Choppychop
  // TODO:::::::::::::::::::::::::::::::::: CHOP ON WORDS
  //drawChatPresets4(); // Animate
  //drawChatPresets5(); // Interact
  //drawChatPresets6(); // ProperSkips
  //
}

xtras_o.scene.fieryRocksFallFromSky = () => {
  /*Fiery Rocks fall from sky*/
};

xtras_o.chat = {
  dogs: {
    fluffydog01: {
      condition: xtras_none,
      NPC: ["Aren't dogs just so darn fluffy", "they're just so cute!"],
      PLAYER: [
        {
          inp: "yes",
          effect: { NPC: xtras_good },
          goto: xtras_next
        },
        {
          inp: "no they're not s]o fluffy",
          effect: { NPC: xtras_bad },
          goto: xtras_next
        }
      ]
    },
    fluffydog02_1: {
      condition: { NPC: xtras_good },
      NPC: ["I know right!", "I just love how they wag their little tails!"]
    },
    fluffydog02_2: {
      condition: { NPC: xtras_bad },
      NPC: ["What!? We can't be friends anymore."]
    }
  }
};

xtras_o.chat.fluffyDogsButFire_00 = {
  ACTOR: xtras_o.mrRedfield,
  NPC: [
    {
      cond: xtras_def,
      say: [
        "aren't dogs just so fluffy?",
        //function whatever (){}
        () => {
          /*Fiery Rocks fall from sky*/
        },
        "oh my god!"
      ]
    }
  ],
  PLAYER: [
    {
      cond: xtras_def,
      say: "yea dogs are pretty fluffy",
      eff: xtras_good
    },
    {
      cond: xtras_def,
      say: "nah, dogs have short hair don't they?",
      eff: xtras_bad
    },
    {
      cond: xtras_def,
      say: "oh wow, we're going to die :(",
      eff: xtras_end
    }
  ]
};

//

xtras_npc = [
  "aren't dogs just so darn fluffy?",
  xtras_o.scene.fieryRocksFallFromSky(),
  "oh my god!"
];

//chat(o.chat.fluffydogs, _npc);

function chat(...args) {
  //
}

// function dialog(inputChoice) {
//   let response;
//   for (c of chat.current) {
//     if (inputChoice === c.inp) {
//       response = c.res;
//     }
//   }
//   return response;
// }

//

// console.log("++++++++++");
// console.log(dialog("y"));
// console.log(dialog("x"));

//
//
//
//
//
//
//

//
//
/*++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
███╗░░░███╗░█████╗░██████╗░
████╗░████║██╔══██╗██╔══██╗
██╔████╔██║███████║██████╔╝
██║╚██╔╝██║██╔══██║██╔═══╝░
██║░╚═╝░██║██║░░██║██║░░░░░
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░░░░
*/

zfuncs_g.blankIt = false;
zfuncs_g.mp.mp1.bg1.classroom1[5] = [
  [310, 111, 211, 311, 110, s10, 310, 111, 211, 311, 110, 210, ___], //0
  [310, 111, 211, 311, 110, s10, 310, 111, 211, 311, 110, 210, ___], //1
  [e10, q11, w11, e11, q10, x10, e10, q11, w11, e11, q10, w10, ___], //2
  [101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, 101, ___], //3
  [m51, m51, a00, m51, m51, m51, m51, m51, m51, m51, a00, m51, ___], //4
  [100, a00, a00, a00, a00, a00, a00, a00, a00, a00, a00, 100, ___], //5
  [100, a00, a00, a00, a00, a00, a00, a00, a00, a00, a00, 100, ___], //6
  [152, 252, 352, 452, 552, 652, 752, 152, 252, 352, 452, 552, ___], //7
  [q62, w62, e62, r62, t62, y62, u62, q62, w62, e62, r62, t62, ___], //8
  [a62, s62, d62, f62, g62, h62, j62, a62, s62, d62, f62, g62, ___], //9
  [z62, x62, c62, v62, b62, n62, m62, z62, x62, c62, v62, b62, ___], //10
  [q62, w62, e62, r62, t62, y62, u62, q62, w62, e62, r62, t62, ___], //11
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___] //12
];

// g.mp.mp1.bg1.classroom1[5] = [
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //0
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //1
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //2
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //3
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //4
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //5
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //6
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //7
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //8
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //9
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //10
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //11
//   [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___] //12
// ];

//
//
//++++++++++++++++++++++++++++++++++++++++++++++//
/*
██████╗░███████╗░█████╗░░█████╗░██████╗░
██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔══██╗
██║░░██║█████╗░░██║░░╚═╝██║░░██║██████╔╝
██║░░██║██╔══╝░░██║░░██╗██║░░██║██╔══██╗
██████╔╝███████╗╚█████╔╝╚█████╔╝██║░░██║
╚═════╝░╚══════╝░╚════╝░░╚════╝░╚═╝░░╚═╝
*/
function getTiles() {
  let chars = {};
  for (let i = 1; i <= 21; i++) {
    let si = "00".substring(0, 2 - String(i).length) + i;
    this["character" + si] = zfuncs_g.li["character" + si];
    this["character" + si + "atk"] = zfuncs_g.li["character" + si + "atk"];
  }

  //character01
  //character01atk
  //character21
  //character21atk

  // and every character in between.

  let layer1 = zfuncs_g.cg.fg;
  let woman = zfuncs_g.li.char06;
  let stoneTile = zfuncs_g.li.bg2;
  let school = zfuncs_g.li.school01;
  let outdoors = zfuncs_g.li.outdoors;
  let furniture = zfuncs_g.li.furniture;
  let thieves = zfuncs_g.li.thieves;
  let japanese = zfuncs_g.li.japanese;
  let library = zfuncs_g.li.library;
  let mansion = zfuncs_g.li.mansion;
  let sciencelab = zfuncs_g.li.sciencelab;
  let tavern = zfuncs_g.li.tavern;
  let boat = zfuncs_g.li.boat;
  let water = zfuncs_g.li.water;
  let castle = zfuncs_g.li.castle;
  let offs = {};

  /* TERRAIN */
  school = zfuncs_g.li.school01;
  makeTiles(layer1, school, 0, 0.5, 0.5, 1);
  makeTiles(layer1, school, 0, 0.5, 4.5, 1);
  makeTiles(layer1, school, 10, 2, 0.5, 3);
  makeTiles(layer1, school, 10, 2, 4.5, 3);

  outdoors = zfuncs_g.li.outdoors;
  makeTiles(layer1, outdoors, 20, 0, 0, 7);
  makeTiles(layer1, outdoors, 20, 0, 4, 7);
  makeTiles(layer1, outdoors, 20, 0, 8, 7);
  makeTiles(layer1, outdoors, 20, 0, 12, 7);
  makeTiles(layer1, outdoors, 30, 0, 32, 5);
  makeTiles(layer1, outdoors, 30, 0, 36, 5);
  makeTiles(layer1, outdoors, 40, 5, 32, 5);
  makeTiles(layer1, outdoors, 40, 5, 36, 5);

  water = zfuncs_g.li.water;
  makeTiles(layer1, water, 50, 0, 0, 7);
  makeTiles(layer1, water, 50, 0, 4, 7);
  makeTiles(layer1, water, 50, 0, 8, 7);
  makeTiles(layer1, water, 60, 7, 0, 7);
  makeTiles(layer1, water, 60, 7, 4, 7);
  makeTiles(layer1, water, 60, 7, 8, 7);

  /* DECORATIVES */
  // "J" Series -- pairs with drawJ function.
  // "createJ" grabs parts of an image/tileset

  school = zfuncs_g.li.school01; //👩🏻‍🏫  //🪑🪑🪑🪑
  createJ("multi_chairDesk", school, 6, 9, 2.3, 3);
  //drawJ("multi_chairDesk", 5.5, 7);
  // NOTE: "splitJ" breaks down a createJ tileset even further.
  //👩🏻‍🏫  //🪑
  splitJ("chairDesk_book", "multi_chairDesk", 0, 0, 1.2, 1.5);
  //drawJ("chairDesk_book", 3, 7);
  //👩🏻‍🏫  //🪑
  splitJ("chairDesk_paper", "multi_chairDesk", 1.2, 0, 1.2, 1.5);
  //drawJ("chairDesk_paper", 4.2, 7);
  //👩🏻‍🏫  //🪑
  splitJ("chairDesk_broBook", "multi_chairDesk", 0, 1.5, 1.2, 1.5);
  //drawJ("chairDesk_broBook", 3, 8.5);
  //👩🏻‍🏫  //🪑
  splitJ("chairDesk_bluBook", "multi_chairDesk", 1.2, 1.5, 1.2, 1.5);
  //drawJ("chairDesk_bluBook", 4.2, 8.5);

  //
  //
  //
  //

  createJ("black", water, 3.1, 0, 0.8, 1);
  createJ("castleWindow", castle, 3.1, 0, 1, 1.7);
  createJ("castleDoor", castle, 3, 15, 1.6, 2);
  createJ("castlePost1", castle, 19, 9, 1, 5.2);
  createJ("castleCloth1", castle, 12, 11, 2, 1.6);
  createJ("redman", character01atk, 0.5, 2.5, 2, 2);
  createJ("icebro", character07atk, 0.5, 4.5, 2, 2);
  createJ("boooat", boat, 0, 0, 99, 99);
  createJ("woman_apron_d", woman, 0.5, 0.5, 1, 1.5);
  createJ("RENAME_school", school, 0, 0, 99, 99);
  createJ("RENAME_furniture", furniture, 0, 0, 99, 99);
  createJ("RENAME_thieves", thieves, 0, 0, 99, 99);
  createJ("RENAME_japanese", japanese, 0, 0, 99, 99);
  createJ("RENAME_library", library, 0, 0, 99, 99);
  createJ("RENAME_mansion", mansion, 0, 0, 99, 99);
  createJ("RENAME_sciencelab", sciencelab, 0, 0, 99, 99);
  createJ("RENAME_tavern", tavern, 0, 0, 99, 99);

  // CASTLE WINDOW
  offs.win1 = { x: 1.25, y: -0.8 };
  drawJ("black", 1.2 + offs.win1.x, 2.35 + offs.win1.y);
  drawJ("castleWindow", 1 + offs.win1.x, 2 + offs.win1.y);

  // CASTLE WINDOW
  offs.win2 = { x: 7.25, y: -0.8 };
  drawJ("black", 1.2 + offs.win2.x, 2.35 + offs.win2.y);
  drawJ("castleWindow", 1 + offs.win2.x, 2 + offs.win2.y);

  // CASTLE DOOR
  drawJ("castleDoor", 5, 1.3);

  // CASTLE BANNER
  drawJ("castleCloth1", 10, 1);
  drawJ("castleCloth1", -0.45, 1);

  character01 = zfuncs_g.li.character01; //🙍‍♀️
  drawJ("redman", 3, 2.5);
  drawJ("icebro", 2, 2.5);

  // CASTLE POST
  drawJ("castlePost1", 1, 0.08);
  drawJ("castlePost1", 11.5, 0.08);

  boat = zfuncs_g.li.boat;
  drawJ("boooat", -2.5, -5);
  drawJ("boooat", 1, 2);

  woman = zfuncs_g.li.char06; //🙍‍♀️
  drawJ("woman_apron_d", 4, 4);

  createJ("woman_apron_l", woman, 0.5, 2.5, 1, 1.5);
  // drawJ("woman_apron_l", 5, 4);

  createJ("woman_apron_r", woman, 0.5, 4.5, 1, 1.5);
  // drawJ("woman_apron_r", 6, 4);

  createJ("woman_apron_u", woman, 0.5, 6.5, 1, 1.5);
  // drawJ("woman_apron_u", 7, 4);

  school = zfuncs_g.li.school01; //👩🏻‍🏫
  //drawJ("RENAME_school", 1, 1);

  furniture = zfuncs_g.li.furniture; //🪑
  //drawJ("RENAME_furniture", 1, 1);

  thieves = zfuncs_g.li.thieves; //🏴‍☠️
  //drawJ("RENAME_thieves", 1, 1);

  japanese = zfuncs_g.li.japanese; //⛩️
  //drawJ("RENAME_japanese", 1, 1);

  library = zfuncs_g.li.library; //📗
  //drawJ("RENAME_library", 1, 1);

  mansion = zfuncs_g.li.mansion; //🏰
  //drawJ("RENAME_mansion", 1, 1);

  sciencelab = zfuncs_g.li.sciencelab; //🧪
  //drawJ("RENAME_sciencelab", 1, 1);

  tavern = zfuncs_g.li.tavern; //☕
  //drawJ("RENAME_tavern", 1, 1);
}

//++++++++++++++++++++++++++++++++++++++++++++++//
// Place Images
function placeJDecs() {
  /* Individually placed decoratives and characters */

  /* Draw on bottom, show the names! */
  if (true) {
    let pushDown = 200 / 32;
    drawJ_withTitle("multi_chairDesk", 5.5, pushDown + 7);
    drawJ_withTitle("chairDesk_book", 3, pushDown + 7);
    drawJ_withTitle("chairDesk_paper", 4.2, pushDown + 7);
    drawJ_withTitle("chairDesk_broBook", 3, pushDown + 8.5);
    drawJ_withTitle("chairDesk_bluBook", 4.2, pushDown + 8.5);
  }
} // //

//
//
/*
░█████╗░██╗░░░██╗░██████╗████████╗░█████╗░███╗░░░███╗
██╔══██╗██║░░░██║██╔════╝╚══██╔══╝██╔══██╗████╗░████║
██║░░╚═╝██║░░░██║╚█████╗░░░░██║░░░██║░░██║██╔████╔██║
██║░░██╗██║░░░██║░╚═══██╗░░░██║░░░██║░░██║██║╚██╔╝██║
╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░╚█████╔╝██║░╚═╝░██║
░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░░╚════╝░╚═╝░░░░░╚═╝
*/

/*++++++++++++++++++++++++++++++++++++*/

function drawHorizontalRectangle() {
  fill(100);
  stroke(30);
  rect(0, 32 * 4 + 5, 400, 5);
}

function drawCharacterArray(xAmount, yAmount) {
  for (let i = 0; i < xAmount; i++) {
    for (let j = 0; j < yAmount; j++) {
      image(zfuncs_g.li.char06.buffer[0], 9 + i * 32, 50 + j * 64);
    }
  }
}

//
//
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
██╗███╗░░░███╗░█████╗░░██████╗░███████╗░██████╗
██║████╗░████║██╔══██╗██╔════╝░██╔════╝██╔════╝
██║██╔████╔██║███████║██║░░██╗░█████╗░░╚█████╗░
██║██║╚██╔╝██║██╔══██║██║░░╚██╗██╔══╝░░░╚═══██╗
██║██║░╚═╝░██║██║░░██║╚██████╔╝███████╗██████╔╝
╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═════╝░
*/

function imageImports() {
  zfuncs_g.li.bg2 = loadImage(
    "side_assets/s2_PNG/SET2_Main_bckgrdlev_build.png"
  );
  zfuncs_g.li.bg3 = loadImage(
    "side_assets/s3_PNG/SET3_Main_bckgrdlev_build.png"
  );
  zfuncs_g.li.bg4 = loadImage(
    "side_assets/s4_PNG/SET4_Main_bckgrdlev_build.png"
  );
  zfuncs_g.li.bg5 = loadImage(
    "side_assets/s5_PNG/SET5_Main_bckgrdlev_build.png"
  );
  zfuncs_g.li.char06 = loadImage(
    "top_assets/character/sprite_pack01/x1/Character06.png"
  );
  zfuncs_g.li.school01 = loadImage(
    "top_assets/aaa/celianna/celianna_schooltiles.png"
  );
  zfuncs_g.li.outdoors = loadImage("top_assets/terrain/MainLev2.03.png");
  zfuncs_g.li.furniture = loadImage(
    "top_assets/aaa/celianna/celianna_furniture.png"
  );
  zfuncs_g.li.thieves = loadImage(
    "top_assets/aaa/celianna/celianna_innertiles_thieves.png"
  );
  zfuncs_g.li.japanese = loadImage(
    "top_assets/aaa/celianna/celianna_japanese.png"
  );
  zfuncs_g.li.library = loadImage(
    "top_assets/aaa/celianna/celianna_librarytiles.png"
  );
  zfuncs_g.li.mansion = loadImage(
    "top_assets/aaa/celianna/celianna_mansiontiles.png"
  );
  zfuncs_g.li.sciencelab = loadImage(
    "top_assets/aaa/celianna/celianna_sciencelab.png"
  );
  zfuncs_g.li.tavern = loadImage(
    "top_assets/aaa/celianna/celianna_taverntiles.png"
  );
  zfuncs_g.li.boat = loadImage("top_assets/aaa/celianna/celianna_ship_1.png");
  zfuncs_g.li.castle = loadImage(
    "top_assets/aaa/celianna/celianna_castletiles.png"
  );
  zfuncs_g.li.water = loadImage("top_assets/terrain/32x32_water.png");
  for (let i = 1; i <= 21; i++) {
    let si = "00".substring(0, 2 - String(i).length) + i;
    zfuncs_g.li["character" + si] = loadImage(
      "top_assets/character/sprite_pack01/x1/Character" + si + ".png"
    );
    zfuncs_g.li["character" + si + "atk"] = loadImage(
      "top_assets/character/sprite_pack01/x1/Character" + si + "Atk.png"
    );
  }
}

/**/
/**/
/*=========================================*/
/*=========================================*/
// EOF
