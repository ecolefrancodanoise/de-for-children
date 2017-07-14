//solen
var x0=0;
var y0=0;
var x0p=0;
var y0p=0;
var m0=10000;

//jorden
var x1=150;
var y1=0;
var x1p=0;
var y1p=-8;
var m1=500;

var dt=0.05;
var G=1;

draw = function() {
    background(26, 19, 51);
    var d=Math.sqrt((x1-x0)*(x1 -x0) + (y1 -y0)*(y1 -y0));

    //solen
    fill(232, 232, 111);
    ellipse(200+x0, 200+y0, 20, 20);
    var x0pp=-G*m1*(x0-x1)/Math.pow(d, 3);
    var y0pp=-G*m1*(y0-y1)/Math.pow(d, 3);
    x0p=x0p+x0pp*dt;
    y0p=y0p+y0pp*dt;
    x0=x0+x0p*dt;
    y0=y0+y0p*dt;

    //jorden
    fill(73, 189, 209);
    ellipse(x1+200, y1+200, 10, 10);
    var x1pp=-G*m0*(x1-x0)/Math.pow(d, 3);
    var y1pp=-G*m0*(y1-y0)/Math.pow(d, 3);
    x1p=x1p+x1pp*dt;
    y1p=y1p+y1pp*dt;
    x1=x1+x1p*dt;
    y1=y1+y1p*dt;
};
