import React from 'react';
import {View,Text,StyleSheet,Dimensions,Alert} from 'react-native';
import data from '../data.json';
import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      navigation:props.navigation,
      isLoading: true,
      markers: [],
      data_array:data["Sheet1"],
      selectedFacility:null,
    };
  }
  componentDidMount() {
    this.setState({ 
      isLoading: false,
      markers: this.state.data_array, 
    });
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputField}>
        <Text>THIS IS MAP</Text>
        </View>
        
    <MapView
    style={styles.mapStyle}
    region={{
      latitude: 38.13635,
      longitude: -121.14877,
      latitudeDelta: 2.0,
      longitudeDelta: 2.0,
    }}
>
        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
     const coords = {
         latitude: parseFloat(marker.latitude),
         longitude: parseFloat(marker.longitude),
     };
     return (
         <MapView.Marker
         
            key={index}
            coordinate={coords}
            title={"Facility Address: "+marker.facAddr}
            description={"GEOID: "+marker.GEOID}
            onPress={() => 
              {
                Alert.alert("Details about selected items",'Name is :'+JSON.stringify(marker['primaryName']),[
                  {text:'Okay',onPress:()=>this.state.navigation.navigate('FilterFacility',marker)},
                  {text:'Cancel',onPress:()=>console.log('Cancel Pressed')}
                ])     
                 
              }}
            
         />
     );
  })}
</MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create
(
  {
  container: 
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
  },
  inputField:{
    marginTop:60
  }
});
