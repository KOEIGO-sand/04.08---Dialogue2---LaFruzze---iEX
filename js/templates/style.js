/* eslint-disable no-undef, no-unused-vars */

let blueBoxPopUpStyle = {
  background: "rgba(5,30,50,0.8)",
  "box-sizing": "border-box",
  padding: "12px",
  "border-style": "solid",
  "border-width": "2px",
  "border-color": "gray",
  color: "white",
  "font-size": "12px",
  "font-family": `'lucida sans typewriter', 'SF Mono', SFMono-Regular, ui-monospace,
  'DejaVu Sans Mono', Menlo, Consolas, monospace`,
  "text-shadow": `-1px -1px 0 #020,
    1px 1px 0 #020, 
    -1px 1px 0 #020, 
    1px -1px 0 #020,
    1px 0px 0 #020,
    0px 1px 0 #020,
    -1px 0px 0 #020,
    0px -1px 0 #020    
    `,
  overflow: "auto"
};
//, 2px 2px 1 #020, -2px 2px 1 #020, 2px -2px 1 #020
// S EXTRAS EXTRAS EXTRAS EXTRAS EXTRAS EXTRAS
// EXTRAS EXTRAS EXTRAS EXTRAS EXTRAS EXTRAS
// TRAS EXTRAS EXTRAS EXTRAS EXTRAS EXTRAS
// AS EXTRAS EXTRAS EXTRAS EXTRAS EXTRAS
//  EXTRAS EXTRAS EXTRAS EXTRAS EXTRAS
// XTRAS EXTRAS EXTRAS EXTRAS EXTRAS
// RAS EXTRAS EXTRAS EXTRAS EXTRAS
// S EXTRAS EXTRAS EXTRAS EXTRAS
// EXTRAS EXTRAS EXTRAS EXTRAS
// TRAS EXTRAS EXTRAS EXTRAS
// AS EXTRAS EXTRAS EXTRAS
//  EXTRAS EXTRAS EXTRAS
// XTRAS EXTRAS EXTRAS
// RAS EXTRAS EXTRAS
// S EXTRAS EXTRAS
// EXTRAS EXTRAS
// TRAS EXTRAS
// AS EXTRAS
//  EXTRAS
// XTRAS
// RAS
// S

// text art available:
// https://fsymbols.com/text-art/

/**
 * //  showCode  //
 * @description - This function grabs the source code from the sketch (or as specified by path) file and displays it in the console.
 * @param {string} filePath
 */
function showCode(filePath) {
  // if (uniqueID.match("^[A-Za-z0-9]*$") === null) {
  //   return console.log(
  //     "showCode() function was given an improper string key. Please only use numbers and letters."
  //   );
  // }
  let httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      console.log(
        httpRequest.response
          .split("\n")
          .map((v, i) => {
            let n = i + 1;
            return v.trim()[0] === "/" &&
              v.match("\\/\\*\\[[0-9]+\\]\\*\\/") === null
              ? "/*[" + n + "]*/  " + v
              : v;
          })
          .join("\n")
      );
    }
  };
  httpRequest.open("GET", document.URL + filePath, true);
  //httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send();
}

function preload_KOEIGO() {
  ex_loadTurtle();
  ex_loadKoeigoF();
}

function setup_KOEIGO() {
  initTurtleResize();
  initLogoText();
  initFrameAndEdge();
}

function draw_KOEIGO() {
  ex_drawFrameAndEdge();
  ex_drawKoeigo();
}

let koeigo_turtle_logo;
let koeigo_text_logo;
let koeigo_font;
let obj_FaE = {};

/**+++++++++++++++++++++++++++++++++++++++++\
 * Load Turtle Image into var
 */
function ex_loadTurtle() {
  koeigo_turtle_logo = loadImage("./img/pchan.png");
}

/**+++++++++++++++++++++++++++++++++++++++++\
 * Load Font into var
 */
function ex_loadKoeigoF() {
  koeigo_font = loadFont("./css/koeigo.otf");
}

/**+++++++++++++++++++++++++++++++++++++++++\
 * Draw a bezel around border
 */
function ex_drawFrameAndEdge() {
  image(obj_FaE.combine, 0, 0);
}

/**+++++++++++++++++++++++++++++++++++++++++\
 * Draw Koeigo Image and Logo On Page
 */
function ex_drawKoeigo() {
  push();
  fill(0, 25);
  rect(338, 358, 400 - 338, 400 - 358);
  pop();
  image(
    koeigo_turtle_logo,
    /*width*/ 400 - koeigo_turtle_logo.width,
    /*height*/ 400 - koeigo_turtle_logo.height
  );
  image(koeigo_text_logo, 100, /*height*/ 400 - 100);
}

/**+++++++++++++++++++++++++++++++++++++++++\
 * Resize Pchan so he is smol
 */
function initTurtleResize() {
  koeigo_turtle_logo.resize(60, 40);
}

/**+++++++++++++++++++++++++++++++++++++++++\
 * Prepare Koeigo Logo
 */
function initLogoText() {
  //push(); //createGraphics contains changes
  koeigo_text_logo = createGraphics(200, 100);
  koeigo_text_logo.fill(20, 100, 0);
  koeigo_text_logo.textAlign(CENTER);
  koeigo_text_logo.textSize(24);
  koeigo_text_logo.textFont(koeigo_font, 36);
  koeigo_text_logo.text("KOEIGO", 100, 65);
  //pop();
}

function initFrameAndEdge() {
  //obj3.frame = {};
  obj_FaE.frame = createGraphics(/*width*/ 400, /*height*/ 400);
  // obj3.frame.push();
  obj_FaE.frame.fill(33);
  obj_FaE.frame.rect(0, 0, /*width*/ 400, /*height*/ 400);
  obj_FaE.frame.erase();
  obj_FaE.frame.rect(20, 20, /*width*/ 400 - 40, /*height*/ 400 - 40);
  obj_FaE.frame.noErase();
  // obj3.frame.pop();
  obj_FaE.edge = createGraphics(/*width*/ 400, /*height*/ 400);
  // obj3.edge.push();
  obj_FaE.edge.fill(0, 0);
  obj_FaE.edge.strokeWeight(3);
  obj_FaE.edge.stroke(color(222, 222, 22, 22));
  obj_FaE.edge.rect(20, 20, /*width*/ 400 - 40, /*height*/ 400 - 40);
  // obj3.edge.pop();
  obj_FaE.combine = createGraphics(/*width*/ 400, /*height*/ 400);
  obj_FaE.combine.image(obj_FaE.frame, 0, 0);
  obj_FaE.combine.image(obj_FaE.edge, 0, 0);
}

// DISABLE ARROW KEY SCROLLING //
// window.addEventListener(
//   "keydown",
//   function (e) {
//     if (
//       ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
//         e.code
//       ) > -1
//     ) {
//       e.preventDefault();
//     }
//   },
//   false
// );
