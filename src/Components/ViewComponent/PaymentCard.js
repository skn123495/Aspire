import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {BASESTYLE, COLORS, FONTS, IMAGES, TEXT} from '../../Constants';
import {
  normalizeFont,
  scaleHeight,
  scaleWidth,
  SCREEN_WIDTH,
} from '../../Utils/responsive';
import {getCardNumberSplit} from '../../Utils/UtilFunctions';

const styles = StyleSheet.create({
  cardViewPayment: {
    width: SCREEN_WIDTH - 48,
  },
  showHideBtn: {
    paddingHorizontal: scaleWidth(15),
    paddingTop: scaleHeight(8),
    paddingBottom: scaleHeight(20),
    backgroundColor: COLORS.WHITE,
    width: scaleWidth(154),
    alignSelf: 'flex-end',
    bottom: scaleHeight(-14),
    borderRadius: scaleHeight(6),
    ...BASESTYLE.inRow,
    justifyContent: 'center',
  },
  hideShowText: {
    fontSize: normalizeFont(12),
    lineHeight: scaleHeight(20),
    color: COLORS.GREEN,
    marginLeft: scaleWidth(6),
    fontFamily: FONTS.AVENIR_NEXT_MEDIUM,
  },
  cardPayment: {
    width: '100%',
    borderRadius: scaleHeight(16),
    padding: scaleWidth(24),
    backgroundColor: COLORS.GREEN,
  },
  homeIcon: {
    tintColor: COLORS.WHITE,
  },
  appNameText: {
    fontSize: normalizeFont(16),
    lineHeight: scaleHeight(21),
    color: COLORS.WHITE,
    marginLeft: scaleWidth(6),
  },
  appNameView: {
    alignSelf: 'flex-end',
  },
  cardHolderName: {
    fontSize: normalizeFont(22),
    lineHeight: scaleHeight(30),
    color: COLORS.WHITE,
    marginTop: scaleHeight(24),
    fontFamily: FONTS.AVENIR_NEXT_BOLD,
  },
  cardHolderNumber: {
    fontSize: normalizeFont(14),
    lineHeight: scaleHeight(18),
    color: COLORS.WHITE,
    marginRight: scaleWidth(24),
    marginTop: scaleWidth(24),
    fontFamily: FONTS.AVENIR_NEXT_SEMI_BOLD,
  },
  exiryDate: {
    marginRight: scaleWidth(32),
    marginTop: scaleHeight(15),
  },
});

function PaymentCard({customViewStyle}) {
  const [CardNoVisible, setCardNoVisible] = React.useState(false);
  const CardNumber = getCardNumberSplit('5647341124132020');

  const showHideCardNo = () => setCardNoVisible(!CardNoVisible);

  return (
    <View style={{...styles.cardViewPayment, ...customViewStyle}}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={showHideCardNo}
        style={styles.showHideBtn}>
        <Image source={CardNoVisible ? IMAGES.NOT_VISIBLE : IMAGES.VISIBLE} />
        <Text style={styles.hideShowText}>
          {CardNoVisible ? 'Hide' : 'Show'} {TEXT.CARD_NUMBER}
        </Text>
      </TouchableOpacity>
      <View style={styles.cardPayment}>
        <View style={styles.appNameView}>
          <Image source={IMAGES.ASPIRE_LOGO} />
        </View>
        <Text style={styles.cardHolderName}>Mark Heny</Text>
        <View style={BASESTYLE.inRow}>
          {CardNumber.map((splitNumber, index) => (
            <Text key={index} style={styles.cardHolderNumber}>
              {CardNoVisible || index === CardNumber.length - 1
                ? splitNumber
                : '••••'}
            </Text>
          ))}
        </View>
        <View style={BASESTYLE.inRow}>
          <Text style={{...styles.cardHolderNumber, ...styles.exiryDate}}>
            Thru: 12/20
          </Text>
          <Text style={{...styles.cardHolderNumber, ...styles.exiryDate}}>
            CVV: 456
          </Text>
        </View>
        <Image source={IMAGES.VISA_LOGO} style={styles.appNameView} />
      </View>
    </View>
  );
}
export default React.memo(PaymentCard);
