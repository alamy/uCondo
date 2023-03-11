import { TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { resgitros } from './style';


type Resgitro = {
    id: number;
    name: string;
    color: string
}
const Registro = (props: Resgitro) => {
    return (
        <View style={resgitros.registro}>
            <Text style={resgitros.text}>{props.id} - {props.name}</Text>
            <Ionicons style={resgitros.icon} name="trash-outline" size={22} color="#C4C4D1" />
        </View>
    )
}

export default Registro