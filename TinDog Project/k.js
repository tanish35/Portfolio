x = [0]
l = 1;
m = 0;
for (i = 1; i < 10; i++) {
    [l, m] = [l + m, l]
    x.push(m)
}

console.log(x)