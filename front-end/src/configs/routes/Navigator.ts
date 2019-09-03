import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import SplashScene from '../../scenes/SplashScene';

const AppNavigator = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
    Splash: SplashScene,
  },
  {
    initialRouteName: 'Splash',
  },
);

export default createAppContainer(AppNavigator);
