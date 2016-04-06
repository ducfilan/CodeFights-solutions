function z(r) {
    for (var f = 2; r > f; f++)
        if (r % f == 0) return !1;
    return !0
}

function factorial_fun(r) {
    for (var f = [], n = "", e = 2; r >= e; e++)
        if (z(e)) f[e] = 1;
        else {
            s = e;
            for (var o = 2; e > o; o++) s % o == 0 && (f[o]++, s /= o, o--)
        }
    for (var t = 2; t < f.length; t++) f[t] > 0 && (n += t + "(" + f[t] +
        ")*");
    return n.slice(0, -1)
}
