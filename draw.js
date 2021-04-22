function draw() {
  var CANVAS_WIDTH = 768;
  var PARTITION_HALF_SIZE = 320;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var src = document.getElementById('src').value;
  if (src == "") { return; }
  var font = document.getElementById('font').value;
  var title = document.getElementById('title').value;
  var subtitle = document.getElementById('subtitle').value;
  var color = document.getElementById('color').value;
  canvas.setAttribute("width", CANVAS_WIDTH);

  // 静止画
  var img = new Image();
  img.onload = function() {
    afterHeight = CANVAS_WIDTH / img.width * img.height;
    canvas.setAttribute("height", afterHeight);

    ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, CANVAS_WIDTH, afterHeight);
    ctx.fillStyle = color;
    ctx.font = "128px " + font;
    ctx.textAlign = "center";
    ctx.fillText(title, CANVAS_WIDTH / 2, afterHeight / 2, CANVAS_WIDTH);
    ctx.fillRect (CANVAS_WIDTH / 2 - PARTITION_HALF_SIZE, afterHeight / 2 + 17, PARTITION_HALF_SIZE * 2, 5);
    ctx.font = "64px " + font; //serif";
    ctx.fillText(subtitle, CANVAS_WIDTH / 2, afterHeight / 2 + 84, CANVAS_WIDTH);
  };
  img.src = src;
}
