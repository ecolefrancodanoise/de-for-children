% Example showing how an electron might travel
% on a stable trajectory between two protons (dihydrogen cation)

x0 = 74e-12/2; %half bond length, pm (1e-12 m)
coulombCoeff = 9e9;
x = [-x0 0; x0 0; 0 0]
xp = [0 0; 0 0; -0.84 .74] * 2.19e6 * 1.0; %electron speed times adjustment factor
m= [1.7e-24 1.7e-24 9e-31]';
charges = 1.6e-19*[1 1 -1]';


dt = 0.5e-19;

xresult = [];

for i = 1:4000,
    nbBodies = size(x,1);
    dimX = size(x,2);
    positionDifferences =  kron3(reshape(x, [nbBodies, 1, dimX]), ones(1, nbBodies)) - kron3(reshape(x, [1, nbBodies, dimX]), ones(nbBodies,1));
    distances = sqrt(sum(positionDifferences.^2, 3));
    distances += diag(ones(1,nbBodies)); % avoid 0's in the diagonal prior to division to avoid NaN
    accelerations = coulombCoeff * kron3(charges, ones(1, nbBodies, dimX)) .* kron3(charges', ones(nbBodies, 1, dimX)) ./ kron3(m, ones(1, nbBodies, dimX)) .* positionDifferences ./ kron3(ones(1,1,dimX), distances.^3);
    accelerations .*= kron3(~diag(ones(1,nbBodies)), ones(1,1,dimX)); %zero out acceleration contribution from self
    xpp = reshape(sum(accelerations,2), nbBodies, dimX);
    xp = xp + xpp * dt;
    x = x + xp * dt;
    xresult = [xresult, reshape(x', [dimX, 1, nbBodies])];
endfor

hold off
plot(xresult(1, :, 1), xresult(2, :, 1),'x');
hold on
plot(xresult(1, :, 2), xresult(2, :, 2),'x');
plot(xresult(1, :, 3), xresult(2, :, 3));
plot(xresult(1, :, 4), xresult(2, :, 4));

