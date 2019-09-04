import { createStackNavigator } from 'react-navigation-stack';

import SignInScene from '../../scenes/SignInScene';
import SignUpScene from '../../scenes/SignUpScene';

const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScene,
    navigationOptions: { header: null },
  },
  SignUp: {
    screen: SignUpScene,
    navigationOptions: { header: null },
  },
});

export default AuthStack;
