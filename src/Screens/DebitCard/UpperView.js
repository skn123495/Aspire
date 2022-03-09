import React from 'react';
import {View, Text, Image} from 'react-native';
import {BASESTYLE, IMAGES, TEXT} from '../../Constants';
import {styles} from './styles';

function UpperView() {
  return (
    <View style={styles.upperView}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{TEXT.DEBIT_CARD}</Text>
        <Image source={IMAGES.HOME} style={styles.homeIcon} />
      </View>
      <Text style={styles.availableBalance}>{TEXT.AVAILABLE_BALANCE}</Text>
      <View style={BASESTYLE.inRow}>
        <View style={styles.dollerView}>
          <Text style={styles.dollerText}>S$</Text>
        </View>
        <Text style={styles.amount}>3,000</Text>
      </View>
    </View>
  );
}

export default UpperView;
