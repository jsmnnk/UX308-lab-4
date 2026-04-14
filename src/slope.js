// input x1, y1, x2, y2
export function slope(x1, y1, x2, y2) {
    // processing
    let rise = y2 - y1;
    let run = x2 - x1;
    let slp = rise / run;

    // output
    return slp;
}

// developer test
if (import.meta.main) {
    console.log(`slope(1, 2, 3, 6) = ${slope(1, 2, 3, 6)}`);
}