import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../../Constants';

const styles = StyleSheet.create({
  mainContainer: (bgColor, paddingTop) => ({
    flex: 1,
    backgroundColor: bgColor || COLORS.WHITE,
    paddingTop,
  }),
});

function MainContainer(props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainContainer(props.bgColor, insets.top)}>
      {props.children}
    </View>
  );
}

export default React.memo(MainContainer);
