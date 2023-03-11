import { TextInput, View, Text } from 'react-native';
import React from 'react';
import { cabecalho } from './style';
import Ionicons from '@expo/vector-icons/Ionicons';


 const Cabecalho = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
 

  return (
    <View>
      <View style={cabecalho.input}>
      <Ionicons style={cabecalho.lupa} name="search-outline" size={22} color="#C4C4D1" />
       <TextInput
       style={cabecalho.campo}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        placeholderTextColor="#C4C4D1"
      />
      </View>
      
  
    </View>
  );
}

export default Cabecalho