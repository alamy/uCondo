import {  View, Text, ScrollView, TextInput, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { corpo } from './style';
import Registro from '../../atoms/registro';
import dbTotal from '../../db/base.json';
import db from '../../db/db.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';


const clear = dbTotal;

export type Teste ={
     key: string
}

const Corpo = () => {
    const navigation = useNavigation();
    const [registro, setRegistro] = useState();
    const [keys, setKeys] = useState('')
    const [total, setTotal]:any = useState([]);
    const [text, onChangeText] = useState('');

   async function preeencher() {
        const te:any = []
        const response = await AsyncStorage.getAllKeys()
        for(var i = 0; i < response.length; i++) {
            const res =  await AsyncStorage.getItem(response[i])
            const t = JSON.parse(res)
            te.push(t)
            setRegistro(total.length)
            navigation.navigate('Plano de Contas')
        }
        setTotal(te)
        
    }

    function search(){
        if(text.length === 0){
            preeencher()
        }
        const updatedData = total.filter((item:any) => {
            const item_data = item.codigo;
            const text_data = text;
            let data:any
            if(item_data === text_data){
                data = item
            }
    
            return data;
          });

          setTotal(updatedData);
        
    }
    

    /*async function alimentar() {
        for(let e = 0; e < clear.length; e++) {
            await AsyncStorage.setItem(clear[e].codigo, JSON.stringify(clear[e]))
        }
    }*/
    useEffect(() => {
        RefreshControl
        preeencher()
      //  alimentar()
    },[]);
    
    return (
        <>
        <View style={corpo.input}>
            <Ionicons style={corpo.lupa} name="search-outline" size={22} color="#C4C4D1" />
            
            <TextInput
            style={corpo.campo}
            onChangeText={onChangeText}
            onBlur={search}
            value={text}
            placeholder="Digite o codigo"
            placeholderTextColor="#C4C4D1"
            />
        </View>
        <View style={corpo.resultado}>

           <Text style={corpo.titulo}>Listagem</Text>
           <Text style={corpo.registro}>{registro} registro</Text>
<ScrollView>
           {total.map((total:any)=> {
            let resultado;
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
           
            return resultado
        })} 
        </ScrollView>   
        </View>
        </>
    )
}

export default Corpo

