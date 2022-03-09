import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {BASESTYLE, COLORS, FONTS} from '../../Constants';
import {normalizeFont, scaleHeight, scaleWidth} from '../../Utils/responsive';

const styles = StyleSheet.create({
  btnView: {
    width: scaleWidth(100),
    paddingVertical: scaleHeight(12),
    backgroundColor: 'rgba(32, 209, 103, 0.07)',
    ...BASESTYLE.inCenter,
    marginTop: scaleHeight(24),
    borderRadius: scaleHeight(4),
  },
  amountText: {
    fontSize: normalizeFont(12),
    color: COLORS.GREEN,
    lineHeight: scaleHeight(18),
    fontFamily: FONTS.AVENIR_NEXT_SEMI_BOLD,
  },
});

function SpendLimitOptionBtn({amount, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => onPress(amount)}
      style={styles.btnView}>
      <Text style={styles.amountText}>S$ {amount}</Text>
    </TouchableOpacity>
  );
}
export default SpendLimitOptionBtn;
