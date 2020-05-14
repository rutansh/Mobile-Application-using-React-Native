import React from 'react';
import {View,Text,StyleSheet,TouchableWithoutFeedback,Keyboard,FlatList,TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import data from '../data.json';
import Card from '../shared/card';

export default function ReviewDetails({navigation})
{
    const facilityName=navigation.getParam('name');
    let data_array=data["Sheet1"];
    data_array = data_array.filter(function(item){
        return item.facAddr == facilityName;
     });
    console.log(data_array);
     

// console.log(data_json);
//     React.useEffect(() => {
//     fetch('../data.json',{mode: 'no-cors'})
//       .then(Sheet1 => Sheet1.json())
//       .then(data => {
//         const {name} = data.Sheet1[0];
//         setFirstName(name.primaryName);
//         setLastName(name.facAddr);
//       });
//   }, []); // <-- Have to pass in [] here!
  
const message='Loading';
    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
          }}>
        <View  style={globalStyles.container}>
            <Text style={globalStyles.textStyle}>List of facilities</Text>
            <FlatList 
            data={data_array}
            renderItem={({item})=>(
                <TouchableOpacity onPress=
                {()=>navigation.navigate('FilterFacility',item)}>
                    <Card>
                    <Text style={globalStyles.textStyle}>Primary Name: {item.primaryName}</Text>
                    </Card>
                </TouchableOpacity>)}
                />
    </View>
        </TouchableWithoutFeedback>
        
    );
}
