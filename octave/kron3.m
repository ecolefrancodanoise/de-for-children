## Copyright 2006, Ange Optimization

## function K= kron3(M1,M2)
##
## Kronecker product in 3 dimensions

function K= kron3(M1,M2)

if length(size(M1))==2
[d11,d12] = size(M1);
d13=1;
else
[d11,d12,d13] = size(M1);
end

if length(size(M2))==2
[d21,d22] = size(M2);
d23=1;
else
[d21,d22,d23] = size(M2);
end

if any([d11,d12, d13, d21, d22, d23]==0); K = []; return; end

K = zeros(d11*d21, d12*d22, d13*d23);

for i1 = 1:d11,
  rng1 = (i1-1)*d21+1:i1*d21;
  for i2 = 1:d12,
    rng2 = (i2-1)*d22+1:i2*d22;
    for i3 = 1:d13,
      rng3 = (i3-1)*d23+1:i3*d23;
      K(rng1,rng2,rng3) = M1(i1,i2,i3)*M2;
    end
  end
end


