/*   eslint-disable no-undef, no-unused-vars */

class xmapx {
  constructor() {
    this.x = 0;
    this._load = [];
    this.loaded = [];
  }

  o_prepload(url) {
    this._load.push(() => {
      this.loaded.push(loadImage(url));
    });
  }

  load() {
    for (let i = 0; i < this._load.length; i++) {
      this._load[i]();
    }
  }

  img(i, x, y) {
    return (xx) => {
      xx.image(this.loaded[i], x, y);
    };
  }
}
/*   prettier-ignore */
let coopy =(xx={},_img=zfuncs_g.li.bg1,_x=0,_y=0,_ix=0,_iy=0,_w=32,_h=32,BLANK=false)=>{
  if (BLANK){
    xx.copy(_img,1,1,1,1,1,1,1,1)
    return;
  }else{
    xx.image(_img.get(_ix * _w, _iy * _h, _w, _h), _x * _w, _y * _h);
  }
}

//================================//
// EOF
