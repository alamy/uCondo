
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Cadastrar from './screens/cadastrar';
import { Button, TouchableHighlight } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


function MyStack() {
  const Stack = createStackNavigator();
const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{ headerStyle: { 
          backgroundColor: '#622490',
          borderBottomColor: '#622490'  
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 22,
          fontFamily: 'Roboto',
        },
      }}>
      <Stack.Screen 
        name="Plano de Contas" 
        component={Home}  
        options={{
          headerRight: () => (
            <TouchableHighlight 
            onPress={() => navigation.navigate('Inserir Conta')}
            >
              <Ionicons name="add-outline" size={32} color="#fff" />
            </TouchableHighlight >
          ),
        }}/>
      <Stack.Screen 
        name="Inserir Conta" 
        component={Cadastrar} 
        options={{
          headerRight: () => (
            <TouchableHighlight 
            onPress={() => navigation.navigate()}
            >
              <Ionicons name="checkmark-outline" size={32} color="#fff" />
            </TouchableHighlight >
          ),
        }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
            <MyStack />
      </NavigationContainer>
    
  );
}

