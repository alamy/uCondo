
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/component/Cabecalho';
import { body } from './style';
import { useFonts } from 'expo-font';
import Corpo from './src/component/Corpo';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  return (
    
    <View style={body.body}>
      <Cabecalho />
      <Corpo />
    </View>
  );
}

