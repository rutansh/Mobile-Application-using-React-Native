import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button,TouchableWithoutFeedback,Keyboard,FlatList,TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';


export default function Home({navigation})
{
    const [facilityName,setFacilityName]=useState('');
    const pressHandler=()=>{
        alert("\nFacility Name is: "+facilityName)     
        navigation.navigate('ReviewDetails',{name:facilityName})
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
          }}>
        <View  style={globalStyles.container}>
        
        <Text style={{marginLeft:10}}>Enter Facility Name: </Text>
        <TextInput 
        style={globalStyles.input}
        placeholder='Enter Facility Name'
        onChangeText={(val)=>setFacilityName(val)}
        />
        <Button style={{width:20}}title="Search" color='coral' onPress={pressHandler}/>
        
        </View>
        </TouchableWithoutFeedback>
    );
}
