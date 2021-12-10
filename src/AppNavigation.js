import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, SecondScreen, ThirtScreen, FourthScreen } from './screens/index';
import { createAppContainer } from 'react-navigation';

const appNavigator = createStackNavigator(
    {
        HomeScreen,
        SecondScreen,
        ThirtScreen,
        FourthScreen
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none'
    }
)
export default createAppContainer(appNavigator);