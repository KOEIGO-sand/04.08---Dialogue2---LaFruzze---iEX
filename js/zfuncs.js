/*   eslint-disable no-undef, no-unused-vars */
/*   eslint-disable no-labels, no-unused-labels */
function done() {
  fill(0, 160);
  stroke(255);
  rect(40, 280, 400 - 40 - 40, 115);
  noStroke();
  fill(255);
  textSize(14);
  text(
    "A long conversation that goes on and on and could span multiple lines of character dialogue -- but that's okay, because that's what we're formatting this text for!",
    60,
    295,
    400 - 60 - 60
  );
}

let elems = { innerelems: {} };
function c_btn(b_text, _x = 0, _y = 0, b_func = () => {}) {
  elems[b_text] = createButton(b_text);
  elems[b_text].position(_x, _y);
  elems[b_text].style("color", "#2aba4b");
  elems[b_text].style("background", "#003300");
  elems[b_text].mousePressed(() => {
    let ielems = elems.innerelems;
    let shown = ielems[b_text].elt.style.display;
    for (e in ielems) {
      ielems[e].hide();
    }
    if (shown === "none") {
      ielems[b_text].show();
    } else {
      ielems[b_text].hide();
    }
  });
}

function c_div(d_name) {
  let ielems = elems.innerelems;
  /* prettier-ignore */
  ielems[d_name] = createDiv(
  pobj[d_name]
    .split("\n")
    .map((v, i)=>{
      return( 
      (v.match(/\+\+.*\+\+/)!==null) ? `
        <b style="
          color:#1bb; 
          font-weight:999;
          font-size:14px;
        ">`+ v +`</b>`:
      (v.match(/--.*--/)!==null) ? `
        <b style="
          color:#7dd; 
          font-weight:777;
        ">`+ v +`</b>`:
        v.replace(
          /^([0-9]+\. )/,
          `<b style="
            color:#ec3; 
            font-weight:777;
          ">$1</b>`
        )
      )})
    .join("<br>")
);
  ielems[d_name].hide();
  ielems[d_name].size(350, 350);
  ielems[d_name].position(30, 30);
  Object.assign(ielems[d_name].elt.style, blueBoxPopUpStyle);
}

let zfuncs_g = {
  e: {}, // element
  li: { bg2: {} }, // load image
  cg: { fg: {} }, // create graphics
  mp: { mp1: { bg1: { classroom1: {} } } }, // map/backgrounds
  drawFunc: {
    preview: {},
    preview_MAIN: [],
    displayLoop: [1, 2, "u", 3, 4, 5, "k", 6, "l", "j", "m", "r", 7, 8, "d", 9],
    keyboardArray_1to7: [
      ["1", "2", "3", "4", "5", "6", "7"],
      ["q", "w", "e", "r", "t", "y", "u"],
      ["a", "s", "d", "f", "g", "h", "j"],
      ["z", "x", "c", "v", "b", "n", "m"]
    ]
  },
  fr: 0, // framerate
  lfr: 999 // lowest framerate
};

let zfuncs_noImg;

// let pfunc = {
//   fill: (c) => fill(...c)
// };

let zfuncs_ZZ = new xmapx();
//let scale_X = 0;
//let scale_Y = 0;

for (let i = 0, kb = zfuncs_g.drawFunc.keyboardArray_1to7; i < 99; i++) {
  let i_word = i === 0 ? "00" : i < 10 ? "0" + i : i;
  for (let _y = 0 + 1; _y < 4; _y++) {
    for (let keys = 0; keys < 7; keys++) {
      globalThis[kb[_y][keys] + i_word] = kb[_y][keys] + i_word;
    }
  }
}

//globalThis["___"] = "0";
let ___ = "0";

zfuncs_g.mp.mp1.bg1.classroom1[6] = [
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //0
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //1
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //2
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //3
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //4
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //5
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //6
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //7
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //8
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //9
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //10
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___], //11
  [___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___, ___] //12
];

function runCoopy() {
  let blankIt = zfuncs_g.blankIt ? 6 : 5;
  let arr = zfuncs_g.mp.mp1.bg1.classroom1[blankIt];
  getTiles();
  for (let ay = 0; ay <= 12; ay++) {
    for (let ax = 0; ax <= 12; ax++) {
      try {
        zfuncs_g.drawFunc[arr[ay][ax]](ax, ay, 32, 32, false);
      } catch (e) {
        if (zfuncs_g.globalAlert === undefined) {
          zfuncs_g.globalAlert = e;
          alert(
            `error encountered!
            Index: ${arr[ay][ax]} 
            at line: [${ax}, ${ay}]
            not found!
            Have you declared it yet?`,
            e
          );
        }
      }
    }
  }
}

function makeTiles(xx, img, _ten_layer, s_iX, s_iY, index_width_1to7 = 7) {
  let ones = "00".substring(0, 2 - str(_ten_layer).length) + str(_ten_layer);
  let r_ones = 0;

  if (zfuncs_g.drawFunc === undefined) {
    zfuncs_g.drawFunc = {};
  }
  let keys = Object.keys(zfuncs_g.drawFunc);

  if (keys.length > 0) {
    for (let i = 0 + _ten_layer; i - _ten_layer < keys.length; i += 1) {
      let s_i = "0".substring(0, 2 - str(i).length) + str(i);
      if (zfuncs_g.drawFunc["1" + s_i] === undefined) {
        ones = s_i;
        r_ones = i;
        break;
      }
    }
  }

  let kb = zfuncs_g.drawFunc.keyboardArray_1to7;
  for (let _iY = 0; _iY < 4; _iY++) {
    for (let _iX = 0; _iX < index_width_1to7; _iX++) {
      zfuncs_g.drawFunc[str(kb[_iY][_iX]) + ones] = (
        ax,
        ay,
        w,
        h,
        blank = false
      ) => {
        coopy(xx, img, ax, ay, 0 + _iX + s_iX, 0 + _iY + s_iY, w, h, blank);
      };
    }
  }

  /* Define Zero */
  if (true) {
    zfuncs_g.drawFunc["0"] = (ax, ay, w, h, blank) => {
      coopy(xx, zfuncs_noImg, 0, 0, 0, 0, 0, 0, true);
    };
  }
  let _r = r_ones;
  let s_r = "0".substring(0, 2 - str(_r).length) + str(_r);
  let gdfp = zfuncs_g.drawFunc.preview;
  let s_ten = "0".substring(0, 2 - str(_ten_layer).length) + _ten_layer;
  gdfp[s_ten] = gdfp[s_ten] === undefined ? {} : gdfp[s_ten];
  gdfp[s_ten][s_r] = {
    img,
    ten: s_ten,
    xIndex: s_iX,
    yIndex: s_iY,
    index_width_cap: index_width_1to7
  };
}

/*+++++++++++++++++++++++++++++++++++++++++*/
// PRELOADER
function preload_GAME() {
  if (p5config.game_builder && !p5config.sigils) {
    zfuncs_ZZ.load();
    zfuncs_noImg = createImage(1, 1);
    imageImports();
  }

  // TODO: ADD HOUSES AND TREES AND PEOPLE
}

/*+++++++++++++++++++++++++++++++++++++++++*/
// SETUP
function preload_SIGILS() {
  pre_setup_Maps();
  if (p5config.sigils) {
    zfuncs_ZZ.load();
    zfuncs_noImg = createImage(1, 1);
    imageImports();
  }
}
function setup_SIGILS() {
  bufferSigils();
}

function setup_GAME() {
  noSmooth();

  createObj_GrayBG();
  zfuncs_g.grayBG();
  zfuncs_g.cg.fg = createGraphics(400, 400);

  runCoopy();
  placeJDecs();
  createSelector();
  zfuncs_g.li.char06.buffer = [];
  zfuncs_g.li.char06.buffer.push(
    zfuncs_g.li.char06.get(64 * 0, 64 * 0, 64, 64)
  );
}

/*+++++++++++++++++++++++++++++++++++++++++*/
// DRAW
function draw_GAME() {
  zfuncs_g.grayBG();

  image(zfuncs_g.cg.fg, 8, 8);
  drawHorizontalRectangle();
  prevMap();
  try {
    image(zfuncs_g.json_draw, 0, 0);
  } catch {}
  try {
    image(zfuncs_g.json_draw_title, 0, 0);
  } catch {}
}

function prevMap() {
  let pf = zfuncs_g.drawFunc.preview_keys.map((v) => str(v).substring(0, 2));
  let mainCounter = -1;
  for (let i = 0; i < 3; i++) {
    for (let ii = 0; ii < 1; ii++) {
      mainCounter++;
      if (mainCounter > pf.length - 1) {
        break;
      }
      let offs32_4 = 32 * 4 + 40;
      let x = 440 + ii * offs32_4;
      let y = 50 + i * offs32_4;

      image(zfuncs_g.drawFunc.preview_MAIN[mainCounter] || zfuncs_noImg, x, y);
      for (let iT = 0; iT < 4; iT++) {
        let ARR = zfuncs_g.drawFunc.keyboardArray_1to7[iT].map(
          (v, i) => str(v) + pf[mainCounter]
        );
        for (
          let iiT = 0;
          iiT < zfuncs_g.drawFunc.preview_MAIN[mainCounter].width / 32;
          iiT++
        ) {
          push();
          fill(255, 100);
          stroke(0, 50);
          textAlign(CENTER);
          strokeWeight(5);
          text(ARR[iiT], x + iiT * 32 + 16, y + iT * 32 + 16);
          fill(255, 0);
          strokeWeight(2);
          stroke(255, 255, 0, 25);
          rect(x + iiT * 32, y + iT * 32, 32, 32);
          pop();
        }
      }
    }
  }
}

function fpsCounter() {
  zfuncs_g.fr = frameRate();
  zfuncs_g.lfr = zfuncs_g.lfr > zfuncs_g.fr ? zfuncs_g.fr : zfuncs_g.lfr;
  if (frameCount % 60 === 0) {
    zfuncs_g.lfr = zfuncs_g.fr;
  }
  push();
  fill(100);
  text(Math.floor(zfuncs_g.lfr), 20, 28);
  pop();
}

function _CREATECANVAS() {
  pixelDensity(5);
  let oW, oH;
  oW = 800;
  oH = 600;
  zfuncs_g.div = createDiv("");
  zfuncs_g.div.id("divvydiv");
  zfuncs_g.div.elt.style.width = oW + "px";
  zfuncs_g.div.elt.style.height = oH + "px";
  zfuncs_g.div.elt.style.display = "inline-block";
  zfuncs_g.canvas = createCanvas(oW, oH);
  zfuncs_g.canvas.parent("divvydiv");
  zfuncs_g.canvas.elt.style.width = "100%";
  zfuncs_g.canvas.elt.style.height = "100%";
  zfuncs_g.canvas.style("position", "relative");
  zfuncs_g.canvas.oW = int(oW);
  zfuncs_g.canvas.oH = int(oH);
  zfuncs_g.canvas.nW = int(oW);
  zfuncs_g.canvas.nH = int(oH);

  //if (p5config.game) {
  zfuncs_g.e.sb = createSlider(0, 5, 1, 0.1);
  zfuncs_g.e.sb.position(-40, 200);
  zfuncs_g.e.sb.style("position", "fixed");
  zfuncs_g.e.sb.style("transform", "rotate(-90deg)");
  zfuncs_g.e.sb.style("opacity", "0.2");
  zfuncs_g.e.sb.input(() => {
    let val = zfuncs_g.e.sb.value();
    zfuncs_g.div.elt.style["width"] = str(
      Math.floor(zfuncs_g.canvas.oW * val) + "px"
    );
    zfuncs_g.div.elt.style["height"] = str(
      Math.floor(zfuncs_g.canvas.oH * val) + "px"
    );
    zfuncs_g.e.sel.elt.style["font-size"] = str(100 * val) + "%";
    zfuncs_g.e.sel.elt.style["width"] = str(100 * val) + "px";
    zfuncs_g.e.sel.elt.style["height"] = str(24 * val) + "px";
  });

  //}
}

function createObj_GrayBG() {
  zfuncs_g.cg.grayBG = createGraphics(width, height);
  zfuncs_g.cg.grayBG.background(30);
  zfuncs_g.grayBG = () => image(zfuncs_g.cg.grayBG, 0, 0);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1);
  });
}

function pre_setup_Maps() {
  for (let i = 0; i < 31; i++) {
    zfuncs_ZZ.o_prepload(`./side_assets/sigil/${i + 1}.png`);
  }
  for (let i = 0; i < 31; i++) {
    let c = Math.floor(random(0, 31));
    zfuncs_ZZ._load.push(zfuncs_ZZ._load.splice(c, 1)[0]);
  }
}

function drawTiles() {
  let c = 0;
  let arr = [];
  for (let i = 0; i < 5; i++) {
    for (let ii = 0; ii < 5; ii++) {
      arr.push(zfuncs_ZZ.img(c, 20 + i * 32, 20 + ii * 32));
      c++;
    }
  }
  return arr;
}

function bufferSigils() {
  zfuncs_g.cg.sigils = createGraphics(32 * 5, 32 * 5);
  let arr = drawTiles();
  for (let i = 0; i < arr.length; i++) {
    arr[i](zfuncs_g.cg.sigils);
  }
}

function sigilsTest() {
  image(
    zfuncs_g.cg.sigils,
    400 / 2 - 90,
    190 - (5 * 32) / 2 + sin(frameCount * 0.008) * 120
  );
}

function createSelector() {
  zfuncs_g.e.sel = createSelect();
  zfuncs_g.e.sel.parent("divvydiv");
  zfuncs_g.e.sel.style("position", "relative");
  zfuncs_g.e.sel.style("background-color", "black");
  zfuncs_g.e.sel.style("width", "100px");
  zfuncs_g.e.sel.style("height", "24px");
  zfuncs_g.e.sel.style("box-shadow", "0px 8px 16px 0px rgba(0,0,0,0.2)");
  zfuncs_g.e.sel.style("color", "gray");
  zfuncs_g.e.sel.style("text-align", "center");
  zfuncs_g.e.sel.elt.style.left = "56.5%";
  zfuncs_g.e.sel.elt.style.top = "-97.5%";
  zfuncs_g.e.sel.elt.style["font-size"] = "100%";

  let tens = Object.keys(zfuncs_g.drawFunc.preview).sort((a, b) => a - b);
  for (let t of tens) {
    zfuncs_g.e.sel.option(t);
  }
  sel_changePreview();
  zfuncs_g.e.sel.changed(() => {
    sel_changePreview();
  });
}

function sel_changePreview() {
  zfuncs_g.drawFunc.preview_MAIN = [];
  let sv = str(zfuncs_g.e.sel.value());
  let ones = Object.keys(zfuncs_g.drawFunc.preview[sv]);
  for (xtras_o of ones) {
    let pt = zfuncs_g.drawFunc.preview[sv][xtras_o];
    zfuncs_g.drawFunc.preview_MAIN.push(
      pt.img.get(
        pt.xIndex * 32,
        pt.yIndex * 32,
        32 * pt.index_width_cap,
        32 * 4
      )
    );
  }
  zfuncs_g.drawFunc.preview_keys = Object.keys(zfuncs_g.drawFunc.preview[sv]);
}

window.addEventListener("keydown", (e) => {
  //STOP ARROWS FROM SCROLLING
  e.preventDefault();
  if ("arrowleft" === e.key.toLowerCase()) {
    window.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  }
  if ("arrowright" === e.key.toLowerCase()) {
    window.scrollTo({
      left: 400 * zfuncs_g.e.sb.value(),
      behavior: "smooth"
    });
  }
  if ("arrowup" === e.key.toLowerCase()) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  if ("arrowdown" === e.key.toLowerCase()) {
    window.scrollTo({
      top: 400 * zfuncs_g.e.sb.value(),
      behavior: "smooth"
    });
  }
});
