import {
    Text,
    View,
} from 'react-native';
import { airQuality } from "../airQuality.js";

// input AQI
export function AirQuality({ aqi }) {
    // processing
    let quality = airQuality(aqi);

    // output
    return (
        <View>
            <Text>airQuality({aqi}) = {quality}</Text>
        </View>
    );
}