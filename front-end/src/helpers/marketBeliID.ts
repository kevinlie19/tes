import { AsyncStorage } from 'react-native';

function marketBeliID() {
  return {
    saveBeliID: async (beliID: string) => {
      AsyncStorage.setItem('tes-mobile-beliid', beliID);
    },
    getBeliID: () => {
      return AsyncStorage.getItem('tes-mobile-beliid');
    },
    removeBeliID: () => {
      return AsyncStorage.removeItem('tes-mobile-beliid');
    },
  };
}

export default marketBeliID();
