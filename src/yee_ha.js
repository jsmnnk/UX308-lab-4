// input number
export function yee_ha(num) {
    let result = "";

    // processing
    if (num % 3 === 0 && num % 7 === 0) {
        result = "Yee Ha";
    } else if (num % 3 === 0) {
        result = "Yee";
    } else if (num % 7 === 0) {
        result = "Ha";
    } else {
        result = "Nada";
    }

    // output
    return result;
}

// developer test
if (import.meta.main) {
    console.log(`yee_ha(21) = ${yee_ha(21)}`);
}