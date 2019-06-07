(function(){
  'use strict';
  let move_flg = "";
  let move_start_x = 0;
  let move_start_y = 0;
  let lh_flg = "";
  let ch_flg = "";
  let rh_flg = "";
  let lf_flg = "";
  let rf_flg = "";

// start drag
window.onmousedown = (e) => {
  const obj = document.getElementById("t");
  if (e.toElement.id == "lh") {
    lh_flg = "true";
    move_start_x = parseInt(obj.style.left.replace("px","")) + parseInt(obj.style.width.replace("px",""));
    move_start_y = parseInt(obj.style.top.replace("px","")) + parseInt(obj.style.height.replace("px",""));
  } else if(e.toElement.id == "ch") {
    ch_flg = "true";
    move_start_x = event.clientX - parseInt(obj.style.left.replace("px",""));
    move_start_y = event.clientY - parseInt(obj.style.top.replace("px",""));
  } else if(e.toElement.id == "rh") {
    rh_flg = "true";
    move_start_x = parseInt(obj.style.left.replace("px",""));
    move_start_y = parseInt(obj.style.top.replace("px","")) + parseInt(obj.style.height.replace("px",""));
  } else if(e.toElement.id == "lf") {
    lf_flg = "true";
    move_start_x = parseInt(obj.style.left.replace("px","")) + parseInt(obj.style.width.replace("px",""));
    move_start_y = parseInt(obj.style.top.replace("px",""));
  } else if(e.toElement.id == "rf") {
    rf_flg = "true";
    move_start_x = parseInt(obj.style.left.replace("px",""));
    move_start_y = parseInt(obj.style.top.replace("px",""));
  }
}

// end drag
window.onmouseup = (e) => {
  lh_flg = "";
  ch_flg = "";
  rh_flg = "";
  lf_flg = "";
  rf_flg = "";
}

// dræg 
window.onmousemove = (e) => {
  if(event.clientY  )
  if(lh_flg == "true") {
    const obj = document.getElementById("t");
    obj.style.position = "absolute";
    obj.style.left  = event.clientX + "px";
    obj.style.width = parseInt(move_start_x) - event.clientX + "px";
    obj.style.top  = event.clientY + "px";
    obj.style.height = parseInt(move_start_y) - event.clientY + "px";
  } else if (ch_flg == "true") {
    const obj = document.getElementById("t");
    console.log(obj);
    obj.style.position = "absolute";
    obj.style.left  = (event.clientX - move_start_x) + "px";
    obj.style.top  = (event.clientY - move_start_y) + "px";
  } else if (rh_flg == "true") {
    const obj = document.getElementById("t");
    obj.style.position = "absolute";
    obj.style.width  = event.clientX - move_start_x + "px";
    obj.style.top  = event.clientY + "px";
    obj.style.height = parseInt(move_start_y) - event.clientY + "px";
  } else if(lf_flg == "true") {
    const obj = document.getElementById("t");
    obj.style.position = "absolute";
    obj.style.left  = event.clientX + "px";
    obj.style.width = parseInt(move_start_x) - event.clientX + "px";
    obj.style.height = event.clientY - parseInt(move_start_y) + "px";
  } else if(rf_flg == "true") {
    const obj = document.getElementById("t");
    obj.style.position = "absolute";
    obj.style.width  = event.clientX - move_start_x + "px";
    obj.style.height = event.clientY - parseInt(move_start_y) + "px";    
  } 
}
})();