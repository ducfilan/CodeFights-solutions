Trap_Game = K => {
    t = [];
    n = 0;

    for (; ++n < 1001;)
        for (t[j=n] = n*n; j > 1; t[n] -= t[n/j--|0]);

    return K.map( h => (1 - t[h]/h/h).toFixed(4) )
}
