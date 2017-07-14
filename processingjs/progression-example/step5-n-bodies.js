
var bodies = [
//planet 2
{
    x:100,
    y:0,
    xp:0,
    yp:-6,
    m:500,
    size: 10,
    color: color(217, 0, 255)
},
//jorden
{
    x:186,
    y:0,
    xp:0,
    yp:-7,
    m:500,
    size: 10,
    color: color(52, 75, 191)
},
//solen
{
    x:0,
    y:0,
    xp:0,
    yp:0,
    m:10000,
    size: 20,
    color: color(214, 230, 89)
},
//ny planet
{
    x:50,
    y:-100,
    xp:10,
    yp:0,
    m:100,
    size: 8,
    color: color(214, 230, 260)
}
];

var dt=0.05;
var G=1;

var newPosition=function(b, bodies) {
    var xpp = 0;
    var ypp = 0;
    for (var i = 0; i < bodies.length; ++i) {
        var b1 = bodies[i];
        if (b !== b1) {
            var d = Math.sqrt((b1.x-b.x)*(b1.x-b.x) + (b1.y -b.y)*(b1.y -b.y));
            xpp = xpp - G*b1.m*(b.x-b1.x)/Math.pow(d, 3);
            ypp = ypp - G*b1.m*(b.y-b1.y)/Math.pow(d, 3);
        }
    }
    b.yp=b.yp+ypp*dt;
    b.xp=b.xp+xpp*dt;
    b.x=b.x+b.xp*dt;
    b.y=b.y+b.yp*dt;
    return b;
};

draw = function() {
    background(26, 19, 51);

    for (var i = 0; i < bodies.length; ++i) {
        var b1 = bodies[i];
        fill(b1.color);
        ellipse(200 + b1.x, 200 + b1.y, b1.size, b1.size);
        b1 = newPosition(b1, bodies);
    }

};
