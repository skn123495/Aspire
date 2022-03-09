import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {IMAGES, TEXT} from '../../Constants';
import {goBack} from '../../Services/NavigationServices';
import {styles} from './styles';

function SpendLimitUpperView() {
  return (
    <View style={styles.upperMainView}>
      <View style={styles.backBtnView}>
        <TouchableOpacity activeOpacity={1} onPress={goBack}>
          <Image source={IMAGES.ARROW_BACK} style={styles.backArrow} />
        </TouchableOpacity>
        <Image source={IMAGES.HOME} style={styles.homeIcon} />
      </View>
      <Text style={styles.spendingLimitText}>{TEXT.SPENDING_LIMIT}</Text>
    </View>
  );
}
export default SpendLimitUpperView;
