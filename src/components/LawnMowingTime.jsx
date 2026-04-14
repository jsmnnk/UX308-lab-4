import {
    Text,
    View,
} from 'react-native';
import { lawnMowingTime } from "../lawnMowingTime.js";

//input
export function LawnMowingTime({width, length, rate}) {

    //processing
    let minutes = lawnMowingTime(width, length, rate);

    //output
    return (
        <view>
            <text>
                lawnMowingTime({width}, {length}, {rate}) = {minutes} minutes
            </text>
        </view>
    );
}