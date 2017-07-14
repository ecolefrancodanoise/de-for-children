
//planet 2
var planet2 = {
    x:100,
    y:0,
    xp:0,
    yp:-6,
    m:500
};

//jorden
var jorden={
    x:186,
    y:0,
    xp:0,
    yp:-7,
    m:500
};
//solen
var solen={
    x:0,
    y:0,
    xp:0,
    yp:0,
    m:10000
};
var dt=0.05;
var G=1;
var newPosition=function(b, b1, b2) {

    //beregningen af afstandene
    var d1=Math.sqrt((b1.x-b.x)*(b1.x-b.x) + (b1.y -b.y)*(b1.y -b.y));
    var d2=Math.sqrt((b2.x-b.x)*(b2.x -b.x) + (b2.y -b.y)*(b2.y -b.y));
    var xpp=-G*b1.m*(b.x-b1.x)/Math.pow(d1, 3) - G*b2.m*(b.x-b2.x)/Math.pow(d2, 3);
    var ypp=-G*b1.m*(b.y-b1.y)/Math.pow(d1, 3) - G*b2.m*(b.y-b2.y)/Math.pow(d2, 3);
    b.yp=b.yp+ypp*dt;
    b.xp=b.xp+xpp*dt;
    b.x=b.x+b.xp*dt;
    b.y=b.y+b.yp*dt;
    return b;
};

draw = function() {
    background(26, 19, 51);

    //joprden
    fill(52, 75, 191);
    ellipse(200+jorden.x, 200+jorden.y, 10, 10);
    jorden=newPosition(jorden, solen, planet2);

    //solen
    fill(214, 230, 89);
    ellipse(solen.x+200, solen.y+200, 20, 20);
    solen=newPosition (solen, jorden, planet2);

    //planet 2
    fill(217, 0, 255);
    ellipse(planet2.x+200, planet2.y+200, 10, 10);
    planet2=newPosition (planet2, solen, jorden);
};
