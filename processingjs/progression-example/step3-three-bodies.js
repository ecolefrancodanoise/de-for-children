
//planet 2
var x2=100;
var y2=0;
var x2p=0;
var y2p=-6;
var m2=500;

//jorden
var x1=186;
var y1=0;
var x1p=0;
var y1p=-7;
var m1=500;
//solen
var x0=0;
var y0=0;
var x0p=0;
var y0p=0;
var m0=10000;

var dt=0.05;
var G=1;

draw = function() {
    background(26, 19, 51);

    //beregningen af afstandene
    var d01=Math.sqrt((x1-x0)*(x1 -x0) + (y1 -y0)*(y1 -y0));
    var d02=Math.sqrt((x2-x0)*(x2 -x0) + (y2 -y0)*(y2 -y0));
    var d12=Math.sqrt((x2-x1)*(x2 -x1) + (y2 -y1)*(y2 -y1));

    //solen
    fill(232, 232, 111);
    ellipse(200+x0, 200+y0, 20, 20);
    var x0pp=-G*m1*(x0-x1)/Math.pow(d01, 3) - G*m2*(x0-x2)/Math.pow(d02, 3);
    var y0pp=-G*m1*(y0-y1)/Math.pow(d01, 3) - G*m2*(y0-y2)/Math.pow(d02, 3);
    y0p=y0p+y0pp*dt;
    x0p=x0p+x0pp*dt;
    x0=x0+x0p*dt;
    y0=y0+y0p*dt;

    //jorden
    fill(73, 189, 209);
    ellipse(x1+200, y1+200, 10, 10);
    var x1pp=-G*m0*(x1-x0)/Math.pow(d01, 3) - G*m2*(x1-x2)/Math.pow(d12, 3);
    var y1pp=-G*m0*(y1-y0)/Math.pow(d01, 3) - G*m2*(y1-y2)/Math.pow(d12, 3);
    y1p=y1p+y1pp*dt;
    x1p=x1p+x1pp*dt;
    x1=x1+x1p*dt;
    y1=y1+y1p*dt;

    //planet 2
    fill(217, 0, 255);
    ellipse(x2+200, y2+200, 10, 10);
    var x2pp=-G*m0*(x2-x0)/Math.pow(d02, 3) - G*m1*(x2-x1)/Math.pow(d12, 3);
    var y2pp=-G*m0*(y2-y0)/Math.pow(d02, 3) - G*m1*(y2-y1)/Math.pow(d12, 3);
    y2p=y2p+y2pp*dt;
    x2p=x2p+x2pp*dt;
    x2=x2+x2p*dt;
    y2=y2+y2p*dt;
};
