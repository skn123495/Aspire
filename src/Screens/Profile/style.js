import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../Constants';
import {normalizeFont, scaleHeight} from '../../Utils/responsive';

export const styles = StyleSheet.create({
  titleText: {
    fontSize: normalizeFont(18),
    color: COLORS.PRIMARY,
    lineHeight: scaleHeight(32),
    marginTop: scaleHeight(32),
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
  },
  descText: {
    fontSize: normalizeFont(12),
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
  },
});
