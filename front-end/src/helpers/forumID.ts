import { AsyncStorage } from 'react-native';

function forumID() {
  return {
    saveForumID: async (forumID: string) => {
      AsyncStorage.setItem('tes-mobile-forumid', forumID);
    },
    getForumID: () => {
      return AsyncStorage.getItem('tes-mobile-forumid');
    },
    removeForumID: () => {
      return AsyncStorage.removeItem('tes-mobile-forumid');
    },
  };
}

export default forumID();
