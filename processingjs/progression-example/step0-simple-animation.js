//jorden
var x=300;
var y=300;

draw = function() {
    background(26, 19, 51);
    //solen
    fill(255, 255, 0);
    ellipse(200, 200, 20, 20);
    fill(73, 189, 209);
    ellipse(x, y, 10, 10);
    x=x+1;
    y=y+1;
};
