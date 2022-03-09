import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BASESTYLE, COLORS, FONTS, TEXT} from '../../Constants';
import {normalizeFont, scaleHeight} from '../../Utils/responsive';

const styles = StyleSheet.create({
  debitSpendText: {
    fontSize: normalizeFont(13),
    lineHeight: scaleHeight(18),
    color: COLORS.DARK_BROWN,
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
  },
  progressBarView: {
    height: scaleHeight(15),
    width: '100%',
    borderRadius: scaleHeight(7.5),
    backgroundColor: 'rgba(32, 209, 103, 0.07)',
    marginTop: scaleHeight(6),
    overflow: 'hidden',
  },
  progressFilled: {
    width: '10%',
    height: '100%',
    backgroundColor: COLORS.GREEN,
  },
});

function ThickProgressBar() {
  return (
    <View style={{marginTop: scaleHeight(24)}}>
      <View style={[BASESTYLE.inRow, BASESTYLE.spaceBetween]}>
        <Text style={styles.debitSpendText}>
          {TEXT.DEBIT_CARD_SPENDING_LIMIT}
        </Text>
        <Text style={styles.debitSpendText}>
          <Text style={{color: COLORS.GREEN}}>$354</Text>{' '}
          <Text style={{color: COLORS.GRAY_D6}}>| $5,000</Text>
        </Text>
      </View>
      <View style={styles.progressBarView}>
        <View style={styles.progressFilled} />
      </View>
    </View>
  );
}

export default ThickProgressBar;
