import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScene from '../../scenes/WelcomeScene';
import HomeScene from '../../scenes/HomeScene';
import UpgradeMembershipScene from '../../scenes/UpgradeMembershipScene';
import ConfirmUpgradeMembershipScene from '../../scenes/ConfirmUpgradeMembershipScene';
import InboxScene from '../../scenes/InboxScene';
import MyAccountScene from '../../scenes/MyAccountScene';

const AppStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScene,
    navigationOptions: { header: null },
  },
  Home: {
    screen: HomeScene,
    navigationOptions: { header: null },
  },
  UpgradeMembership: {
    screen: UpgradeMembershipScene,
    navigationOptions: { header: null },
  },
  ConfirmUpgrade: {
    screen: ConfirmUpgradeMembershipScene,
    navigationOptions: { header: null },
  },
  Inbox: {
    screen: InboxScene,
    navigationOptions: { header: null },
  },
  MyAccount: {
    screen: MyAccountScene,
    navigationOptions: { header: null },
  },
});

export default AppStack;
