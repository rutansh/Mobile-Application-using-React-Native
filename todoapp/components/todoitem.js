import React,{useState} from 'react';
import { StyleSheet, Text,TouchableOpacity, View, FlatList } from 'react-native';

export default function TodoItem({item, pressHandler}) {
  
   
    return (
      <TouchableOpacity onPress={()=>pressHandler(item.key)}>
          <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    );
  }
  const styles=StyleSheet.create({
      item:{
          padding:16,
          marginTop:16,
          width:300,
          borderColor:'#bbb',
          borderWidth:1,
          borderStyle:'dashed',
          borderRadius:10,

      }
  })
  