/* eslint-disable no-undef, no-unused-vars */

//===============================================//
/**
 * !!=======================!! \
 * !! NOTE: place this function in SETUP !! \
 * !!=======================!!
 */
function youtube_SETUP(
  youtube_EMBED_link,
  x = undefined,
  y = undefined,
  w = undefined,
  h = undefined
) {
  // setYoutubeLink();
  setIframeSizeRef(); // Default Vals
  // !! needs to be the "embed" link !!
  createIframe(youtube_EMBED_link);
  createBtn();
  positionElements(x, y, w, h);
}

/**
 * !!============================!! \
 * !! NOTE: place this function in resizeWindow !! \
 * !!============================!!
 */
function youtube_resizeWindow() {
  positionElements();
}

/**
 * ... function not needed ...
 */
// function youtube_DRAW_notNeeded() {
//   return console.log(`
//     nothing goes in draw for the youtube controls!
//   `);
// }

/**
 * ... function not needed ...
 */
// function youtube_PRELOAD_notNeeded() {
//   return console.log(`
//     nothing goes in preload for the youtube controls!
//   `);
// }

//================================================//
var youtubeLink;
var ifr, iframe_width, iframe_height;
var btn;

function setYoutubeLink() {
  youtubeLink = `
    https://www.youtube.com/embed/3noMeuufLZY
  `;
}

function createIframe(youtube_link) {
  ifr = createElement("iframe");
  //ifr.id("iframe001");
  ifr.size(iframe_width, iframe_height);
  ifr.attribute("src", youtube_link);
  ifr.attribute("title", "YouTube video player");
  ifr.attribute("frameborder", "0");
  ifr.attribute(
    "allow",
    `accelerometer; 
    autoplay; 
    clipboard-write; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture; 
    fullscreen`
  );
  // show (preload)
  ifr.style(`
    display:block;
  `);
  // hide (hide until button click)
  //ifr.style("display", "none");
}

function createBtn() {
  btn = createButton("Hide Youtube...");
  btn.mouseClicked(() => {
    if (btn.html() === "Show Youtube!") {
      ifr.style("display", "block"); // show
      btn.html("Hide Youtube..."); // btn opposite
    } else {
      ifr.style("display", "none"); // hide
      btn.html("Show Youtube!"); // btn opposite
    }
  });
  btn.style(`
    background-color:darkgreen;
    color: gray;
    font-size: 8px;
    padding: 5px 5px;
    margin: 4px 2px;
  `);
}

function positionElements(x, y, w, h) {
  if (x === undefined) {
    x = width / 2 - iframe_width / 2;
  }
  if (y === undefined) {
    y = 10;
  }
  if (w === undefined) {
    w = iframe_width;
  }
  if (h === undefined) {
    h = iframe_height;
  }
  setIframeSizeRef();
  //ifr.size(iframe_width, iframe_height);
  ifr.size(w, h);
  //ifr.position(width / 2 - iframe_width / 2, 10);
  ifr.position(x, y);
  //btn.position((width * 1) / 2 - btn.width / 2, 10 + iframe_height + 10);
  btn.position(x + w / 2 - btn.width / 3, y + h + 20);
}

// function getPresets() {
//   createCanvas(1000, 1000);
//   background(30);
// }

function setIframeSizeRef() {
  iframe_width = (width * 4) / 5;
  iframe_height = (height * 2) / 3;
}
