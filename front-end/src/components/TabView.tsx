import React, { useMemo } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { TabView as TabViewNative, TabBar } from 'react-native-tab-view';

import { WHITE, GREY, CUSTOM_BLACK } from '../constants/color';

type Tab = {
  title: string;
  render: () => JSX.Element;
};

type Props = {
  tabs: Array<Tab>;
  index: number;
  onChange: (newIndex: number) => void;
};

export default function TabView(props: Props) {
  let { tabs, index, onChange } = props;

  let routes = useMemo(() => {
    return tabs.map((tab, index) => ({
      key: index.toString(),
      title: tab.title,
    }));
  }, [tabs]);

  let navigationState = useMemo(() => ({ index, routes }), [index, routes]);

  let renderScene = (index: number) => {
    return tabs[index].render;
  };

  return (
    <TabViewNative
      navigationState={navigationState}
      renderScene={renderScene(index)}
      renderTabBar={renderTabBar}
      onIndexChange={onChange}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  );
}

let renderTabBar = (props: any) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.container}
      activeColor={WHITE}
      inactiveColor={GREY}
    />
  );
};

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: WHITE,
  },
  container: {
    backgroundColor: CUSTOM_BLACK,
  },
});
