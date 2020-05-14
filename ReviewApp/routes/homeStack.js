import{createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/home';
import ReviewDetails from'../screens/reviewDetails';
import FilterFacility from '../screens/filterFacility';
import Header from '../shared/header';
import React from 'react';
const screens={
    Home:{
        screen:Home,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='Custom Input'/>,
                headerStyle:{backgroundColor:'#eee'}
            }
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:
        {
            title:'Result',
        }
    },
    FilterFacility:{
        screen:FilterFacility,
        navigationOptions:
        {
            title:'Add Score',
            
        }
    },
}

const HomeStack=createStackNavigator(screens,
    {
        defaultNavigationOptions:{
            headerTintColor:'#444',
            headerStyle:{backgroundColor:'#eee',height:60}
        }
    });
export default HomeStack;