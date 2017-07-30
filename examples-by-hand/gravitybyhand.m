% example of a gravitational rotation around the origin that is workable
% by hand with pen and paper
% distance units in mm, velocity and acceleration can be represented
% in mm as well

x1 = [100 0]'
x1p = [0 30]'
m2 = 100000
G = 1
dt = 1
x1result = [];

for i = 1:20,
    distance1 = norm(x1)
    x1pp = -G * m2 * x1 / distance1^3
    x1p = x1p + x1pp * dt
    x1 = x1 + x1p * dt
    x1result = [x1result, x1];
endfor

hold off
plot(x1result(1, :), x1result(2, :), 'x-');
hold on
axis equal
