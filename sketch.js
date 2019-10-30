"use strict";

let MonVid;
let playing = false;


function setup() {
  MonVid = createVideo(['video/ART107FinalVideoo.mp4', 'video/ART107FinalVideoo.webm']);;
  MonVid.size(600, 600);
  MonVid.position(320,700);
}

function draw() {

}

function mousePressed() {
    if (playing == false) {
      MonVid.loop();
      playing = true;
    } else if (playing == true) {
      MonVid.pause();
      playing = false;
    }
  }
