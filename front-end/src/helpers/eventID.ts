import { AsyncStorage } from 'react-native';

function eventID() {
  return {
    saveEventID: async (eventID: string) => {
      AsyncStorage.setItem('tes-mobile-eventid', eventID);
    },
    getEventID: () => {
      return AsyncStorage.getItem('tes-mobile-eventid');
    },
    removeEventID: () => {
      return AsyncStorage.removeItem('tes-mobile-eventid');
    },
  };
}

export default eventID();
