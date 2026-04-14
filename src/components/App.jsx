import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { SquareFeet2acres } from './SquareFeet2acres.jsx';
import { LawnMowingTime } from './LawnMowingTime.jsx';
import { AirQuality } from './AirQuality.jsx';
import { YeeHa } from './YeeHa.jsx';
import { Slope } from './Slope.jsx';

import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <SquareFeet2acres sqft={43560} />
      <SquareFeet2acres sqft={21780} />
      <SquareFeet2acres sqft={87120} />
      <LawnMowingTime width={10} length={5} rate={5} />
      <LawnMowingTime width={20} length={10} rate={10} />
      <LawnMowingTime width={30} length={20} rate={15} />
      <AirQuality aqi={25} />
      <AirQuality aqi={75} />
      <AirQuality aqi={125} />
      <AirQuality aqi={175} />
      <AirQuality aqi={250} />
      <AirQuality aqi={350} />
      <YeeHa num ={21} />
      <YeeHa num ={9} />
      <YeeHa num ={14} />
      <YeeHa num ={10} />
      <Slope x1={1} y1={2} x2={3} y2={6} />
      <Slope x1={2} y1={5} x2={4} y2={1} />
      <Slope x1={0} y1={0} x2={2} y2={1} />
    </View>
  );
}

