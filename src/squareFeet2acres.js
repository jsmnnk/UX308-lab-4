//input
export function squareFeet2acres(sqft) {

    //processing
    let acres = sqft / 43560;

    //output
    return acres;
}

//test
if (import.meta.main) {
    console.log(`squareFeet2acres(43560) = ${squareFeet2acres(43560)}`);
}