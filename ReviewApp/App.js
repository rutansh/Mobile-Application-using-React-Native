import React,{useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer'


const getFonts=()=> Font.loadAsync({
    'sen-regular':require('./assets/fonts/Sen-Regular.ttf'),
    'sen-bold':require('./assets/fonts/Sen-Bold.ttf'),
  });

export default function App() {
  const[fontsLoaded,setfontsLoaded]=useState(false);
  if(fontsLoaded)
  {
    return (
      <Navigator/>
    );
  }
  else
  {
    return(
      <AppLoading 
    startAsync={getFonts}
    onFinish={()=>setfontsLoaded(true)}
    />
    )
    
  }
}