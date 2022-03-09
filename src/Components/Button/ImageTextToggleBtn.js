import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, IMAGES} from '../../Constants';
import {
  dynamicSize,
  normalizeFont,
  scaleHeight,
  scaleWidth,
  SCREEN_WIDTH,
} from '../../Utils/responsive';

const styles = StyleSheet.create({
  mainContainer: {
    width: SCREEN_WIDTH - 48,
    flexDirection: 'row',
    paddingTop: scaleHeight(32),
    alignItems: 'center',
  },
  leftIconView: {
    width: '10%',
  },
  CenterIconView: showToggleBtn => ({
    width: showToggleBtn ? '80%' : '90%',
    paddingLeft: scaleWidth(12),
  }),
  titleText: {
    fontSize: normalizeFont(14),
    lineHeight: scaleHeight(19),
    color: COLORS.DARK_PURPLE,
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
  },
  DescriptionText: {
    fontSize: normalizeFont(12),
    lineHeight: scaleHeight(18),
    color: COLORS.DARK_BROWN,
    opacity: 0.4,
    marginTop: scaleHeight(2),
    fontFamily: FONTS.AVENIR_NEXT_REGULAR,
  },
});

function ImageTextToggleBtn({
  image,
  title,
  description,
  onEnableDescription,
  showToggleBtn,
  onPress,
  enable,
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftIconView}>
        <Image source={image} />
      </View>
      <View style={styles.CenterIconView(showToggleBtn)}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.DescriptionText}>
          {enable ? onEnableDescription : description}
        </Text>
      </View>
      {showToggleBtn && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={styles.leftIconView}>
          <Image
            source={enable ? IMAGES.ToggleOn : IMAGES.ToggleOff}
            style={{height: dynamicSize(20), width: dynamicSize(34)}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
export default React.memo(ImageTextToggleBtn);
