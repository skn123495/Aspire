import {StyleSheet} from 'react-native';
import {BASESTYLE, COLORS, FONTS} from '../../Constants';
import {
  normalizeFont,
  scaleHeight,
  scaleWidth,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../Utils/responsive';

export const styles = StyleSheet.create({
  upperView: {
    paddingHorizontal: scaleWidth(24),
  },
  titleView: {
    flexDirection: 'row',
    ...BASESTYLE.spaceBetween,
  },
  titleText: {
    fontSize: normalizeFont(24),
    color: COLORS.WHITE,
    lineHeight: scaleHeight(32),
    marginTop: scaleHeight(32),
    fontFamily: FONTS.AVENIR_NEXT_BOLD,
  },
  homeIcon: {
    width: scaleWidth(25),
    height: scaleWidth(25),
    tintColor: COLORS.GREEN,
    marginTop: scaleHeight(16),
  },
  availableBalance: {
    fontSize: normalizeFont(14),
    color: COLORS.WHITE,
    lineHeight: scaleHeight(16),
    marginTop: scaleHeight(24),
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
  },
  dollerView: {
    width: scaleWidth(40),
    paddingVertical: scaleHeight(4),
    borderRadius: scaleHeight(4),
    ...BASESTYLE.inCenter,
    backgroundColor: COLORS.GREEN,
    marginTop: scaleHeight(15),
  },
  dollerText: {
    fontSize: normalizeFont(12),
    color: COLORS.WHITE,
    lineHeight: scaleHeight(16),
    fontFamily: FONTS.AVENIR_NEXT_BOLD,
  },
  amount: {
    fontSize: normalizeFont(24),
    color: COLORS.WHITE,
    lineHeight: scaleHeight(33),
    marginTop: scaleHeight(15),
    marginLeft: scaleWidth(10),
    fontFamily: FONTS.AVENIR_NEXT_BOLD,
  },
  ScrollableView: {
    position: 'absolute',
    zIndex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  outterView: top => ({
    alignItems: 'center',
    width: SCREEN_WIDTH,
    marginTop: top + scaleHeight(243),
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: scaleHeight(24),
    borderTopRightRadius: scaleHeight(24),
  }),
  moveViewUp: {
    top: scaleHeight(-106),
  },
});
