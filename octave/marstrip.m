
jorden.id = 0;
jorden.size = 18;
jorden.x = -149.6e9;
jorden.y = 0;
jorden.xp = 0;
jorden.yp = 3e4;
jorden.m = 5.972e24;
jorden.brakeAccel = false;

mars.id = 1;
mars.size = 10;
mars.x = 227.9e9;
mars.y = 0;
mars.xp = 0;
mars.yp = -86.871e6/3600;
mars.m = 6.39e23;
mars.brakeAccel = false;

solen.id = 2;
solen.size = 40;
solen.x = 0;
solen.y = 0;
solen.xp = 0;
solen.yp = 0;
solen.m = 1.989e30;
solen.brakeAccel = false;

planets = {jorden, mars, solen};
t = 0;
dt =1e5;
launchTime = 376e5;
rocketTrajectory = [];


function b = newPosition(b, allPlanets, t, dt)
    G = 6.67408e-11;
    brakeStart = 432e5;
    brakeEnd = 459.0e5;

    xpp = 0;
    ypp = 0;
    for i = 1:length(allPlanets),
        b1 = allPlanets{i};
        if b.id == b1.id,
            continue;
        endif
        d1=sqrt((b1.x-b.x)^2 + (b1.y -b.y)^2);
        xpp += -G*b1.m*(b.x-b1.x)/d1^3;
        ypp += -G*b1.m*(b.y-b1.y)/d1^3;
    endfor
    if b.brakeAccel,
        accel = 0;
        if t >= brakeStart && t <= brakeEnd,
            accel = 0.00467;
        endif

        mars = allPlanets{2};
        v = sqrt((b.xp-mars.xp)^2 + (b.yp-mars.yp)^2);
        xpp += -(b.xp-mars.xp) / v * accel;
        ypp += -(b.yp-mars.yp) / v * accel;
    endif

    b.yp=b.yp+ypp*dt;
    b.xp=b.xp+xpp*dt;
    b.x=b.x+b.xp*dt;
    b.y=b.y+b.yp*dt;
endfunction

while t <= 470e5,
    t = t + dt;
    if t > launchTime && t - dt <= launchTime,
        raket.id = 3;
        raket.size = 4;
        raket.x = planets{1}.x-10e5;
        raket.y = planets{1}.y+10e5;
        raket.xp = planets{1}.xp-200e2;
        raket.yp = planets{1}.yp+1.2780e4;
        raket.m = 10e5;
        raket.brakeAccel = true;
        planets = {planets{:}, raket};
    endif
    if t == 420e5,
        dt = dt/10;
    endif
    if t == 455e5,
        dt = dt/50;
    endif
    for i = 1:length(planets),
        planets{i}=newPosition(planets{i}, planets, t, dt);
    endfor
    if length(planets) == 4,
       rocketTrajectory = [rocketTrajectory, [planets{2}.x - planets{4}.x, planets{2}.y - planets{4}.y]' ];
    endif
endwhile

plot(rocketTrajectory(1,1000:end), rocketTrajectory(2,1000:end));
hold on
plot(0,0, 'o');
