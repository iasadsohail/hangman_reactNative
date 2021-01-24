import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainMenu from '../screens/MainMenu';
import LevelSelection from '../screens/LevelSelection';
import Level_1 from '../screens/Level_1';
import Level_2 from '../screens/Level_2';
import Level_3 from '../screens/Level_3';
import Level_4 from '../screens/Level_4';

const Navigator = createStackNavigator({
    MainMenu: {
        screen: MainMenu
    },
    LevelSelection: {
        screen: LevelSelection
    },
    Level_1: {
        screen: Level_1
    },
    Level_2: {
        screen: Level_2
    },
    Level_3: {
        screen: Level_3
    },
    Level_4: {
        screen: Level_4
    },
}, {
    initialRouteName: 'MainMenu'
});

const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;