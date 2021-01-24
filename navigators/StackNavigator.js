import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainMenu from '../screens/MainMenu';
import GameScreen from '../screens/GameScreen';
// import Screen1 from '../screens/Screen1';
// import Void from '../screens/Void';
// import Panel1 from '../screens/Panel1';
// import Screen_login from '../screens/Screen_login';
//import FeedbackScreen from '../screens/FeedbackScreen';

const Navigator = createStackNavigator({
    MainMenu: {
        screen: MainMenu
    },
    GameScreen: {
        screen: GameScreen
    }
}, {
    initialRouteName: 'MainMenu'
});

const StackNavigator = createAppContainer(Navigator);

export default StackNavigator;