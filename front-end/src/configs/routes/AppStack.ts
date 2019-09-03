import { createStackNavigator } from 'react-navigation-stack';

import HomeScene from '../../scenes/HomeScene';
import WelcomeScene from '../../scenes/WelcomeScene';

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
