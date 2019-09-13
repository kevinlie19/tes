import { AsyncStorage } from 'react-native';

function token() {
  return {
    saveToken: (userToken: string) => {
      AsyncStorage.setItem('tes-mobile-token', userToken);
    },
    getToken: () => {
      return AsyncStorage.getItem('tes-mobile-token');
    },
    removeToken: () => {
      return AsyncStorage.removeItem('tes-mobile-token');
    },
  };
}

export default token();
