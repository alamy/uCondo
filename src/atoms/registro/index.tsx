import { View, Text } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { resgitros } from './style';


type Resgitro = {
    id: string;
    name: string;
    color: string
}
const Registro = (props: Resgitro) => {
    return (
        <View style={resgitros.registro}>
            <View style={resgitros.text}>
                <Text style={{color: props.color,  
                fontSize:20,
                fontFamily: 'Roboto'
                }}>
                    {props.id} - {props.name}
                </Text>
            </View>
            <Ionicons style={resgitros.icon} name="trash-outline" size={22} color="#C4C4D1" />
        </View>
    )
}

export default Registro

