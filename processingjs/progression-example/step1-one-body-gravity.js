//jorden
var x=100;
var y=-100;
var xp=1;
var yp=3;
var dt = 0.2;

draw = function() {
    background(26, 19, 51);
    //solen
    fill(255, 255, 0);
    ellipse(200, 200, 20, 20);
    fill(73, 189, 209);
    ellipse(x+200, y+200, 10, 10);
    var d=Math.sqrt(x * x + y * y);
    var xpp= - 3000 * x/Math.pow(d, 3);
    var ypp= - 3000 * y/Math.pow(d, 3);
    xp=xp+xpp*dt;
    yp=yp+ypp*dt;
    x=x+xp*dt;
    y=y+yp*dt;
};
