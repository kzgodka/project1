function generateBgr() {
  $bgr = $('.bgr');

  var patternWidth = $bgr.width();
  var patternHeight = $bgr.height();

  var pattern = Trianglify({
    height: patternHeight,
    width: patternWidth,
    cell_size: 100,
    y_colors: ['#ffffff', '#e5e5e5','#999999'],
    x_colors: ['#7f7f7f','#b2b2b2','#ffffff'],
    stroke_width: 0.9
  });
  pattern.canvas(document.getElementById('canvas'));
}

generateBgr();