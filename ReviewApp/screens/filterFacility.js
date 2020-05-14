import React,{useState} from 'react';
import {View,Text,Button,TextInput,StyleSheet,TouchableWithoutFeedback,Keyboard,FlatList,TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import axios from 'axios';


export default function FilterFacility({navigation})
{
    const [score,setScore]=useState('');
    const url='localhost:3001/test';
    const pressHandler=()=>{
        alert("\nScore is: "+score)
        
        // const data = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       "appoid": "rut"
        //     }),
        //     headers: {
              
        //       'Content-Type':'application/json',
              
        //     },
        //     credentials:'include'
        //   }
        //   try{
        //     fetch('http://localhost:3001/test', data).catch( e => console.log("error is "));
              
        //   }
        //   catch(e)
        //   {
        //     console.log("error:"+e);
        //   }
        const data={
            "name":"rutansh"
        }
  fetch('https://webhook.site/da1bba5c-6ee9-4481-bcfb-a7dba0106df8', {
  method: 'post',
  mode:'no-cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    pgmSysId:navigation.getParam('pgmSysId'),
    PrimaryName:navigation.getParam('primaryName'),
    FacAddr:navigation.getParam('facAddr'),
    CityName:navigation.getParam('cityName'),
    StateName:navigation.getParam('stateName'),
    PostalCode:navigation.getParam('postalCode'),
    Latitude:navigation.getParam('latitude'),
    Longitude:navigation.getParam('longitude'),
    GEOID:navigation.getParam('GEOID'),
    CountyState1:navigation.getParam('CountyState1'),
    CountyState2:navigation.getParam('CountyState2'),
    Score:score
    
  })
}).catch(e=>(console.log(e)));
alert("Success...!");
        // axios.defaults.withCredentials = true;
        // axios.post('localhost:3001/test',data)
        //     .then(response=>{
        //         console.log("Status Code: ",response);
        //         if(response.status===200){
        //             console.log("Success")
        //         }
        //     }).catch(e=>(console.log(e)));
        // navigation.navigate('ReviewDetails',{score:score})
    }
    
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
          }}>
        <View  style={globalStyles.container}>
        
        <Text style={globalStyles.textStyle}>CountyState1: {navigation.getParam('CountyState1')}</Text>
        <Text style={globalStyles.textStyle}>CountyState2: {navigation.getParam('CountyState2')}</Text>
        <Text style={globalStyles.textStyle}>GEOID: {navigation.getParam('GEOID')}</Text>
        <Text style={globalStyles.textStyle}>City Name: {navigation.getParam('cityName')}</Text>
        <Text style={globalStyles.textStyle}>Facility Address: {navigation.getParam('facAddr')}</Text>
        <Text style={globalStyles.textStyle}>Latitude: {navigation.getParam('latitude')}</Text>
        <Text style={globalStyles.textStyle}>Longitude: {navigation.getParam('longitude')}</Text>
        <Text style={globalStyles.textStyle}>Postal Code: {navigation.getParam('postalCode')}</Text>
        <Text style={globalStyles.textStyle}>Primary Name: {navigation.getParam('primaryName')}</Text>
        <TextInput 
        style={globalStyles.textStyle,{marginTop:10,height:50}}
        placeholder='Enter Score'
        keyboardType='numeric'
        onChangeText={(val)=>setScore(val)}
        />
        <View>
        <Button style={{marginTop:10}} title="Add Data" color='coral' onPress={pressHandler}/>
        </View>
        
        
        </View>
        </TouchableWithoutFeedback>
    );
}
