x1 = [0 0]'
x1p = [0 0]'
m1 = 1e14

x2 = [0 100]'
x2p = [5.5 0]'
m2 = 1e10

G = 6e-11

dt = .1

x1result = [];
x2result = [];

for i = 1:4000,

    distance12 = norm(x1-x2);
    x1pp = -G * m2 * (x1-x2) / distance12^3;
    dx1p = x1pp * dt;
    x1p = x1p + dx1p;
    dx1 = x1p * dt;
    x1 = x1 + dx1;

    x2pp = -G * m1 * (x2-x1) / distance12^3;
    dx2p = x2pp * dt;
    x2p = x2p + dx2p;
    dx2 = x2p * dt;
    x2 = x2 + dx2;

    x1result = [x1result, x1];
    x2result = [x2result, x2];

endfor

hold off
plot(x1result(1, :), x1result(2, :));
hold on
plot(x2result(1, :), x2result(2, :));
axis equal
