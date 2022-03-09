import React from 'react';
import {View, Text} from 'react-native';
import {BASESTYLE} from '../../Constants';

function HomeTab() {
  return (
    <View style={[BASESTYLE.flex1, BASESTYLE.inCenter]}>
      <Text>HomeTab</Text>
    </View>
  );
}
export default HomeTab;
