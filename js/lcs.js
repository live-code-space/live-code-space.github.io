let s = function(lcs) {
  var constMouseX;
  var constMouseY;
  
  let neue;
  let points, points2, points3;
  let bounds, bounds2, bounds3;
  let fontSize = 20
  let pg;
  let distances = [];
  let maxDistance;

  lcs.preload = function() {
    neue = lcs.loadFont('../assets/NeueMetanaNext-SemiBold.otf');
    console.log('preload.done', typeof neue);
  };

 

  lcs.setup = function() {
    var divW = $('#p5lcs').width();
    var divH = $('#p5lcs').height();
    lcs.createCanvas(divW, divH, lcs.WEBGL);
    lcs.textFont(neue);
    lcs.setAttributes('antialias', true);
    lcs.textAlign(lcs.CENTER, lcs.CENTER);
    lcs.angleMode(lcs.DEGREES);
    lcs.fill(0);
    lcs.stroke(255,255,255);
    lcs.background(0);

    pg = lcs.createGraphics(lcs.width, lcs.height);

  for (let i = 0; i < 3000; i++) {
		let x = lcs.random(lcs.width);
		let y = lcs.random(lcs.height);
		let n = lcs.noise(x * 0.01, y * 0.01) * lcs.width * 0.002;
		pg.fill(0, 30);
    pg.noStroke();
		pg.rect(x, y, n, n);

	}


    bounds = neue.textBounds('LIVE', 0, 0, fontSize);
    points = neue.textToPoints('LIVE', -bounds.w/2, -bounds.h/2, fontSize, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

    bounds2 = neue.textBounds('CODE', 0, -15, fontSize);
    points2 = neue.textToPoints('CODE', -bounds2.w/2, -bounds.h/2, fontSize, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

    bounds3 = neue.textBounds('SPACE', 0, -30, fontSize);
    points3 = neue.textToPoints('SPACE', -bounds3.w/2, -bounds.h/2, fontSize, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });
  };

  lcs.draw = function() {
    constMouseX = lcs.mouseX - lcs.width/2;
    constMouseY = lcs.mouseY - lcs.height/2;
    var constAngleX = lcs.constrain(constMouseX/10, -20, 20);
    var constAngleY = lcs.constrain(constMouseX/10, -20, 20);
    var constAngleZ = lcs.constrain(constMouseY/10, -10, 10);
  
    lcs.translate(-lcs.width,0, -lcs.dist(lcs.width/2, lcs.height/2, constMouseX, constMouseY));
    lcs.scale(1.75,1,1)
    lcs.rotateX(constAngleX);
    lcs.rotateY(constAngleY);
    lcs.rotateZ(constAngleZ);
  
    lcs.drawWords (points, bounds)
    lcs.drawWords (points2, bounds2)
    lcs.drawWords (points3, bounds3)
  
  };

  lcs.drawWords = function(arr, arr2) {

    var offsetZ = -150;
    var magnifyZ = 0;
    var rotateAngleX = 30;

    for (var i = 0; i < arr.length; i++) {
      let p = arr[i];     
      var distMouse = lcs.dist(p.x + lcs.width/2 , p.y  -lcs.height/2, constMouseX, constMouseY);
      
      if (distMouse <800 && distMouse > 400) {
        lcs.stroke(0,0,255);
      }else{
        lcs.stroke(255,255,255);
      }
    
    }
    lcs.push();
      lcs.scale(0.5);
      lcs.translate(lcs.width/2, -lcs.height/2,0);
      lcs.translate(-arr2.x * lcs.width / arr2.w, -arr2.y * lcs.height / arr2.h, magnifyZ );
      lcs.rotateX(rotateAngleX);
      
     lcs.beginShape();
    
        for (var i = 0; i < arr.length; i++) {
          let p = arr[i];      
          if (i % 2 == 0) {
            lcs.vertex(p.x * lcs.width / arr2.w  ,  p.y * lcs.height / arr2.h );  
          }
        }    

      lcs.endShape();

      lcs.beginShape();
        for (var i = 0; i < arr.length; i++) {
          let p = arr[i];          
          if (i % 2 == 0) {
            lcs.vertex(p.x * lcs.width / arr2.w ,  p.y * lcs.height / arr2.h, offsetZ);        
          }
        }    
      lcs.endShape();

      for (var i = 0; i < arr.length; i++) {
        let p = arr[i];
        if (i % 2 == 0) {
          lcs.beginShape();
          lcs.vertex(p.x *  lcs.width / arr2.w ,  p.y *  lcs.height / arr2.h, 0);     
          lcs.vertex(p.x *  lcs.width / arr2.w ,  p.y *  lcs.height / arr2.h, offsetZ); 
          lcs.endShape(lcs.CLOSE);
        }
      }   
  lcs.pop();
}

lcs.mousePressed = function(){
  lcs.clear();
  lcs.background(0)
}
};

export {s};