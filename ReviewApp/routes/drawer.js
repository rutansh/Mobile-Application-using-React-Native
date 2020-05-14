import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import MapScreen from './mapStack';
import HomeStack from './homeStack';

const RootDrawerNavigator=createDrawerNavigator({

    Home:{
        screen:HomeStack,
    },
    MapScreen:{
        screen:MapScreen,
    }
});

export default createAppContainer(RootDrawerNavigator);