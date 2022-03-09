import {StyleSheet} from 'react-native';
import {BASESTYLE, COLORS} from '../../Constants';
import {
  normalizeFont,
  scaleHeight,
  scaleWidth,
  SCREEN_WIDTH,
} from '../../Utils/responsive';

export const styles = StyleSheet.create({
  upperMainView: {
    paddingHorizontal: scaleWidth(24),
    paddingBottom: scaleHeight(40),
  },
  backBtnView: {
    ...BASESTYLE.inRow,
    ...BASESTYLE.spaceBetween,
    paddingTop: scaleHeight(16),
    paddingBottom: scaleHeight(24),
  },
  backArrow: {
    tintColor: COLORS.WHITE,
  },
  homeIcon: {
    tintColor: COLORS.GREEN,
  },
  spendingLimitText: {
    fontSize: normalizeFont(24),
    color: COLORS.WHITE,
    lineHeight: scaleHeight(33),
  },
  contentView: {
    ...BASESTYLE.flex1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: scaleWidth(24),
    paddingBottom: scaleWidth(24),
    paddingTop: scaleWidth(32),
    borderTopLeftRadius: scaleHeight(24),
    borderTopRightRadius: scaleHeight(24),
  },
  spendLimitText: {
    fontSize: normalizeFont(14),
    color: COLORS.DARK_BROWN,
    lineHeight: scaleHeight(19),
    marginLeft: scaleWidth(12),
  },
  dollerView: {
    width: scaleWidth(40),
    paddingVertical: scaleHeight(4),
    borderRadius: scaleHeight(4),
    ...BASESTYLE.inCenter,
    backgroundColor: COLORS.GREEN,
  },
  dollerText: {
    fontSize: normalizeFont(12),
    color: COLORS.WHITE,
    lineHeight: scaleHeight(16),
  },
  showAmountView: {
    ...BASESTYLE.inRow,
    borderBottomColor: COLORS.GRAY_EB,
    borderBottomWidth: 1,
    paddingTop: scaleHeight(11),
    paddingBottom: scaleHeight(6),
  },
  showAmountText: {
    fontSize: normalizeFont(24),
    color: COLORS.DARK_BROWN,
    lineHeight: scaleHeight(33),
    marginLeft: scaleHeight(10),
  },
  weeklyMeans: {
    fontSize: normalizeFont(12),
    color: COLORS.GRAY_D6,
    lineHeight: scaleHeight(18),
    marginTop: scaleHeight(6),
  },
  customStyle: {
    width: scaleWidth(300),
    marginBottom: scaleHeight(24),
    alignSelf: 'center',
  },
});
