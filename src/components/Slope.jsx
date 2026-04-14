import {
    Text,
    View,
} from 'react-native';
import { slope } from "../slope.js";

// input x1, y1, x2, y2
export function Slope({ x1, y1, x2, y2 }) {
    // processing
    let slp = slope(x1, y1, x2, y2);

    // output
    return (
        <View>
            <Text>
                slope(({x1}, {y1}) to ({x2}, {y2})) = {slp}
            </Text>
        </View>
    );
}