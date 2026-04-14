// input AQI
export function airQuality(aqi) {
    let quality = "";

    // processing
    if (aqi <= 50) {
        quality = "Good";
    } else if (aqi <= 100) {
        quality = "Moderate";
    } else if (aqi <= 150) {
        quality = "Unhealthy for Sensitive Groups";
    } else if (aqi <= 200) {
        quality = "Unhealthy";
    } else if (aqi <= 300) {
        quality = "Very Unhealthy";
    } else {
        quality = "Hazardous";
    }

    // output
    return quality;
}

// developer test
if (import.meta.main) {
    console.log(`airQuality(120) = ${airQuality(120)}`);
}