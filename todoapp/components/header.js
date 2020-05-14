import React,{useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
  
    return (
      <View style={styles.header}>
          <Text style={styles.title}>
              My Todos
          </Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header:
    {
        height:80,
        paddingTop:28,
        backgroundColor:'coral',
        marginTop:30,
        width:500
    },
    title:
    {
        textAlign:'center',
        color:'#000',
        fontSize:20,
        fontWeight:'bold',
    }
    
  });
  