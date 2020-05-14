import{createStackNavigator} from 'react-navigation-stack';
import MapScreen from '../screens/map';
import Header from '../shared/header';
import React from 'react';
import FilterFacility from '../screens/filterFacility';


const screens={
    MapScreen:{
        screen:MapScreen,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='Map'/>,
                headerStyle:{backgroundColor:'#eee'}
            }
        }    
    },
    FilterFacility:{
        screen:FilterFacility,
        navigationOptions:{
            title:'Add Score',
            // headerStyle:{backgroundColor:'#eee'}
            }
    },
}

const AboutStack=createStackNavigator(screens,
    {
        defaultNavigationOptions:{
            headerTintColor:'#444',
            headerStyle:{backgroundColor:'#eee',height:60}
        }
    });
export default AboutStack;