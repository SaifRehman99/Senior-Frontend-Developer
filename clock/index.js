let canvas = document.getElementById("canvas");

// clock function
function clock() {
  // getting the date here
  let now = new Date();

  // canvas context here
  let ctx = canvas.getContext("2d");

  // creating canvas boxes and rect
  // -> saving the canvas state
  ctx.save();

  // clearing the initial canvas here
  ctx.clearRect(0, 0, 500, 500);

  //translating the canvas
  ctx.translate(300, 300);

  // reasong for rotating is, to move the canvas hands
  ctx.rotate(-Math.PI / 2);

  // styling the clock here
  ctx.strokeStyle = "#00000";
  ctx.fillStyle = "#f4f4f4";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";

  // now, we again save the canvas ref
  ctx.save();

  // now, drawing the canvas ( clock )
  ctx.beginPath();
  ctx.lineWidth = "14";
  ctx.strokeStyle = "red";
  ctx.arc(0, 0, 122, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  // now, drwaing the canvas ( hour );

  ctx.save();
  // ctx.stroke();
  ctx.strokeStyle = "green";
  // 12 hours, so lopping over to create the clock hours dots
  for (i = 1; i <= 12; i++) {
    // saving the context again
    ctx.beginpath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = "green";

  // calling this on each frame the method
  requestAnimationFrame(clock);
}

// calling this on each frame the method
requestAnimationFrame(clock);
