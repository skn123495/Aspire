import {StyleSheet} from 'react-native';

const BaseStyle = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});

export default BaseStyle;
