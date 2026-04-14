import {
    Text,
    View,
} from 'react-native';
import { yee_ha } from "../yee_ha.js";

// input number
export function YeeHa({ num }) {
    // processing
    let result = yee_ha(num);

    // output
    return (
        <View>
            <Text>yee_ha({num}) = {result}</Text>
        </View>
    );
}