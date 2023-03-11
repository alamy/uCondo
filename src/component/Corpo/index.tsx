import { TextInput, View, Text } from 'react-native';
import React, { useState } from 'react';
import { corpo } from './style';
import Registro from '../../atoms/registro';
import dbTotal from '../../db/base.json';

const total = dbTotal;

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
    const [registro, setRegistro] = useState(total.length);
    
    return (
        <View style={corpo.resultado}>
           
           <Text style={corpo.titulo}>Listagem</Text>
           <Text style={corpo.registro}>{registro} registro</Text>

            {total.map((total)=> {
                let resultado ;
                console.log(total.codigo.charAt(0))

                switch (total.codigo.charAt(0)){
                    case '1':
                        resultado =  <Registro id={total.codigo} name={total.nome_da_conta} color='#1BA803' key={total.codigo}/>;
                    break;
                    case '2':
                        resultado = <Registro id={total.codigo} name={total.nome_da_conta} color='#E28856' key={total.codigo}/>;
                        break;
                    case '3':   
                        resultado = <Registro id={total.codigo} name={total.nome_da_conta} color='#4a4999' key={total.codigo}/>;
                        break;
                    default: 
                        resultado = <Registro id={total.codigo} name={total.nome_da_conta} color='gray' key={total.codigo}/>;
                }
               
                return  resultado
            })}
        </View>
    )
}

export default Corpo


