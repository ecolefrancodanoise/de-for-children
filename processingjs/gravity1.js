//Equation: y'' = - 500 * y / norm(y) / norm(y)^2
var y = 20;
var x = 20;
var yp = -1;
var xp = -5;
var dt = 0.1;
draw = function() { //built-in continuously looping function (ProcessingJS)
    var distance = Math.sqrt(x * x + y * y);
    var xpp = - 500 * x / Math.pow(distance,3); //acceleration
    var ypp = - 500 * y / Math.pow(distance,3);
    yp = yp + xpp * dt; //integrating the acceleration into the velocity
    xp = xp + ypp * dt;
    x = x + xp *dt; //integrating the velocity into the position
    y = y + yp *dt;

    background(255, 0, 0);
    line(200, 400, 200, 0);
    line(0, 200, 400, 200);
    ellipse(200 + x, 200 + y, 10, 10);
};
