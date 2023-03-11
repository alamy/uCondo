import { TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { corpo } from './style';
import Registro from '../../atoms/registro';


const arrayRegistro = [
    {
        id: 1,
        pai: "Receita",
        nome: "Receita",
        tipo: "Receita",
        lancamento: true

    },
    {
        id: 1,
        pai: "Receita",
        nome: "Receita",
        tipo: "Receita",
        lancamento: true

    },
    {
        id: 1,
        pai: "Receita",
        nome: "Receita",
        tipo: "Receita",
        lancamento: true

    }
]

    const allRegistros: never[] = []


       

const Corpo = () => {
    const [registro, setRegistro] = useState(27);

  
    return (
        <View style={corpo.resultado}>
           
           <Text style={corpo.titulo}>Listagem</Text>
           <Text style={corpo.registro}>{registro} registro</Text>

            {allRegistros}
            {arrayRegistro.map((arrayRegistro,index)=> {
                return  <Registro id={arrayRegistro.id} name={arrayRegistro.nome} color="green"/>
            })}
        </View>
    )
}

export default Corpo


