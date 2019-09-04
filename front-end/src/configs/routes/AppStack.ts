import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScene from '../../scenes/WelcomeScene';
import HomeScene from '../../scenes/HomeScene';

const AppStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScene,
    navigationOptions: { header: null },
  },
  Home: {
    screen: HomeScene,
    navigationOptions: { header: null },
  },
});

export default AppStack;
