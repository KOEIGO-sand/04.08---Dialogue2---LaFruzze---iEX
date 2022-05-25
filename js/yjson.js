/*   eslint-disable no-undef, no-unused-vars */
/*   eslint-disable no-labels, no-unused-labels */

function createJ(name, img, X_32 = 0, Y_32 = 0, W_32, H_32) {
  try {
    if (zfuncs_g.json === undefined) {
      zfuncs_g.json = {};
    }
    let cX, cY, cW, cH;
    let mX = img.width - 32;
    let mY = img.height - 32;
    if (true) {
      cX = Math.floor(X_32 * 32) > mX ? mX : Math.floor(X_32 * 32);
      cY = Math.floor(Y_32 * 32) > mY ? mY : Math.floor(Y_32 * 32);
      cW =
        cX + Math.floor(W_32 * 32) > img.width
          ? img.width - cX
          : Math.floor(W_32 * 32);
      cH =
        cY + Math.floor(H_32 * 32) > img.height
          ? img.height - cY
          : Math.floor(H_32 * 32);
    }
    zfuncs_g.json[name] = img.get(cX, cY, cW, cH);
  } catch {
    console.log("ERROR with: " + name);
    alert(name + " not loading correctly, is it properly sized?");
  }
}

function splitJ(name, source_name, X_32 = 0, Y_32 = 0, W_32 = 1, H_32 = 1) {
  let s_img = zfuncs_g.json[source_name];
  let cX, cY, cW, cH;
  let mX = s_img.width - 32;
  let mY = s_img.height - 32;
  if (true) {
    cX = Math.floor(X_32 * 32) > mX ? mX : Math.floor(X_32 * 32);
    cY = Math.floor(Y_32 * 32) > mY ? mY : Math.floor(Y_32 * 32);
    cW =
      cX + Math.floor(W_32 * 32) > s_img.width
        ? s_img.width - cX
        : Math.floor(W_32 * 32);
    cH =
      cY + Math.floor(H_32 * 32) > s_img.height
        ? s_img.height - cY
        : Math.floor(H_32 * 32);
  }

  zfuncs_g.json[name] = s_img.get(cX, cY, cW, cH);
}

function drawJ(
  name,
  put_X_32,
  put_Y_32,
  scale_X = undefined,
  scale_Y = undefined
) {
  if (zfuncs_g.json_draw === undefined) {
    zfuncs_g.json_draw = createGraphics(400, 400);
  }
  scale_X = scale_X === undefined ? 1 : scale_X;
  scale_Y = scale_Y === undefined ? scale_X : scale_Y;
  zfuncs_g.json_draw.image(
    zfuncs_g.json[name],
    Math.floor(put_X_32 * 32),
    Math.floor(put_Y_32 * 32),
    Math.floor(zfuncs_g.json[name].width * scale_X),
    Math.floor(zfuncs_g.json[name].height * scale_Y)
  );
}

function drawJ_withTitle(name, dX32, dY32, scale_X = 1, scale_Y = 1) {
  if (zfuncs_g.json_draw_title === undefined) {
    zfuncs_g.json_draw_title = createGraphics(800, 600);
  }
  /* draw Square */
  if (true) {
    zfuncs_g.json_draw_title.push();
    stroke(0);
    strokeWeight(4);
    zfuncs_g.json_draw_title.fill(255, 255, 0, 100);
    zfuncs_g.json_draw_title.rect(
      Math.floor(dX32 * 32),
      Math.floor(dY32 * 32),
      Math.floor(zfuncs_g.json[name].width * scale_X),
      Math.floor(zfuncs_g.json[name].height * scale_Y)
    );
    zfuncs_g.json_draw_title.pop();
  }
  /* draw Image */
  if (true) {
    zfuncs_g.json_draw_title.image(
      zfuncs_g.json[name],
      Math.floor(dX32 * 32),
      Math.floor(dY32 * 32),
      Math.floor(zfuncs_g.json[name].width * scale_X),
      Math.floor(zfuncs_g.json[name].height * scale_Y)
    );
  }

  /* draw Text */
  if (true) {
    zfuncs_g.json_draw_title.push();
    zfuncs_g.json_draw_title.fill(255);
    zfuncs_g.json_draw_title.stroke(0);
    zfuncs_g.json_draw_title.strokeWeight(1);
    zfuncs_g.json_draw_title.textSize(4);
    zfuncs_g.json_draw_title.text(
      name,
      Math.floor(dX32 * 32),
      Math.floor(dY32 * 32) + 5
    ); //Math.floor(dX32 * 32), Math.floor(dY32 * 32));
    zfuncs_g.json_draw_title.pop();
  }
}
