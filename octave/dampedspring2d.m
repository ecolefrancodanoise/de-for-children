%y'' = - y' - y, in 2D
dt = 0.001;
y = [20, 30]';%initial position
yp = [10,10]; %initial velocity
t = 0;
yresult = [];   
tresult = [];

for i = 1:100,
    ypp = - y - yp; % given by the initial equation
    dyp = ypp * dt; % change to velocity
    yp = yp + dyp; % new velocity
    dy = yp * dt; % change to position
    y = y + dy; % new position
    yresult = [yresult, y];
    t = t + dt;
    tresult = [tresult, t];
endfor

plot(yresult(1, :), yresult(2, :)); %spiral in



