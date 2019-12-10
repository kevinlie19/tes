import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps, ScrollView } from 'react-navigation';

import { Text, Icon } from '../core-ui';
import { CUSTOM_BLACK, WHITE } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';

const CONTENT = {
  textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Urna et pharetra pharetra massa massa. Mi ipsum faucibus vitae aliquet nec. Maecenas ultricies mi eget mauris pharetra et ultrices. Massa tempor nec feugiat nisl pretium fusce id. Nisl nunc mi ipsum faucibus vitae. Lacus vel facilisis volutpat est velit egestas dui id ornare. Nunc mattis enim ut tellus elementum sagittis vitae. Eget nunc lobortis mattis aliquam faucibus purus in massa. Velit egestas dui id ornare arcu odio. Cursus eget nunc scelerisque viverra mauris. Ullamcorper velit sed ullamcorper morbi tincidunt. 
  
Etiam sit amet nisl purus in mollis nunc sed id. Eu tincidunt tortor aliquam nulla facilisi cras. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Adipiscing elit ut aliquam purus sit amet. Cursus risus at ultrices mi tempus. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Purus sit amet luctus venenatis lectus magna fringilla. Ac felis donec et odio. Aliquam ultrices sagittis orci a scelerisque purus. Odio morbi quis commodo odio aenean sed. In massa tempor nec feugiat. Ultricies tristique nulla aliquet enim tortor. Blandit aliquam etiam erat velit scelerisque in dictum. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Leo vel orci porta non. Lectus urna duis convallis convallis tellus id interdum velit. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Urna id volutpat lacus laoreet non.`,
};

type Props = NavigationScreenProps & {};

export default function PrivacyPolicyScene(props: Props) {
  let { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.navbarContainer}>
          <Icon
            name="arrowBack"
            customStyle={styles.arrowBack}
            onPress={() => navigation.goBack()}
          />

          <Text
            text="Privacy Policy"
            type="headerTitle"
            newTextStyle={styles.titleText}
          />
          <View />
        </View>
      </View>

      <ScrollView style={styles.body}>
        <Text
          style={{ flexWrap: 'wrap', textAlign: 'justify' }}
          text={CONTENT.textContent}
          type="medium"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: CUSTOM_BLACK,
  },
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: CUSTOM_BLACK,
    marginTop: STATUS_BAR_HEIGHT,
    paddingHorizontal: 16,
    height: 56,
  },
  arrowBack: {
    width: 24,
    height: 24,
  },
  titleText: {
    paddingRight: 20,
  },
  body: {
    flex: 7,
    paddingHorizontal: 16,
    marginVertical: 16,
    backgroundColor: WHITE,
  },
});
