import { AsyncStorage } from 'react-native';

function marketJualID() {
  return {
    saveJualID: async (jualID: string) => {
      AsyncStorage.setItem('tes-mobile-jualid', jualID);
    },
    getJualID: () => {
      return AsyncStorage.getItem('tes-mobile-jualid');
    },
    removeJualID: () => {
      return AsyncStorage.removeItem('tes-mobile-jualid');
    },
  };
}

export default marketJualID();
