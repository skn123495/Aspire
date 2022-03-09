import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BASESTYLE, COLORS} from '../../Constants';
import {normalizeFont, scaleHeight} from '../../Utils/responsive';

const styles = StyleSheet.create({
  btnStyle: disabled => ({
    height: scaleHeight(56),
    borderRadius: scaleHeight(30),
    backgroundColor: disabled ? COLORS.GRAY_EB : COLORS.GREEN,
    ...BASESTYLE.inCenter,
    width: '100%',
    boxWithShadow: {
      shadowColor: COLORS.DARK_BROWN,
      shadowOffset: {width: 0, height: 5},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
  }),
  labelStyle: {
    fontSize: normalizeFont(16),
    lineHeight: scaleHeight(22),
    color: COLORS.WHITE,
  },
});

function NormalButton({
  label,
  onPress,
  customStyle,
  customTextStyle,
  disabled,
}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      disabled={disabled}
      style={{...styles.btnStyle(disabled), ...customStyle}}>
      <Text style={{...styles.labelStyle, ...customTextStyle}}>{label}</Text>
    </TouchableOpacity>
  );
}
export default NormalButton;
