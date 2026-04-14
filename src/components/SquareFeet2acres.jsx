import {
    Text,
    View,
} from 'react-native';
import { squareFeet2acres } from "../squareFeet2acres.js";

//input
export function SquareFeet2acres({sqft}) {

    //processing
    let acres = squareFeet2acres(sqft);

    //output
    return (
        <view>
            <text>squareFeet2acres({sqft}) returned {acres}</text>
        </view>
    );
}