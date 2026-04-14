//input
export function lawnMowingTime(width, length, rate) {

    //processing
    let area = width * length;
    let minutes = area / rate;

    //output
    return minutes;
}

//test
if (import.meta.main) {
    console.log(`lawnMowingTime(10, 5, 5) = ${lawnMowingTime(10, 5, 5)}`);
}