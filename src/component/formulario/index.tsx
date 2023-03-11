import { TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { formulario } from './style';     



const Formulario = () => {
    const [contaPai, onContaPai] = useState('Useless Text');
    const [codigo, onCodigo] = useState('Useless Text');
    const [nome, onNome] = useState('Useless Text');
    const [tipo, onTipo] = useState('Useless Text');
    const [aceite, onAceite] = useState('Useless Text');
    return (
        <View style={formulario.resultado}>
            <Text style={formulario.titulo}>Conta pai</Text>
                <View style={formulario.campo}>
                    <TextInput  
                        onChangeText={onContaPai}
                        value={contaPai} 
                        placeholderTextColor="#C4C4D1" />
                </View>
            <Text style={formulario.titulo}>Código</Text>
                <View style={formulario.campo}>
                    <TextInput  
                        onChangeText={onCodigo}
                        value={codigo} 
                        placeholderTextColor="#C4C4D1" />
                </View>
            <Text style={formulario.titulo}>Nome</Text>
                <View style={formulario.campo}>
                    <TextInput  
                        onChangeText={onNome}
                        value={nome} 
                        placeholderTextColor="#C4C4D1" />
                </View>
            <Text style={formulario.titulo}>Tipo</Text>
                <View style={formulario.campo}>
                    <TextInput  
                        onChangeText={onTipo}
                        value={tipo} 
                        placeholderTextColor="#C4C4D1" />
                </View>
            <Text style={formulario.titulo}>Aceite laçamentos</Text>
                <View style={formulario.campo}>
                    <TextInput  
                        onChangeText={onAceite}
                        value={aceite} 
                        placeholderTextColor="#C4C4D1" />
                </View>    
        </View>
    )
}

export default Formulario


