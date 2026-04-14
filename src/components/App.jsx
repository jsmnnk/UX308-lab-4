import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { SquareFeet2acres } from './SquareFeet2acres.jsx';
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
    </View>
  );
}

