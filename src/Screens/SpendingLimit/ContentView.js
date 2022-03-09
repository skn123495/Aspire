import React from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';

import NormalButton from '../../Components/Button/NormalBtn';
import SpendLimitOptionBtn from '../../Components/Button/SpendLimitOptionBtn';
import {BASESTYLE, COLORS, IMAGES, MESSAGES, TEXT} from '../../Constants';
import {selectedSpendingLimit} from '../../Redux/Actions/DebitCard.actions';
import {goBack} from '../../Services/NavigationServices';
import {styles} from './styles';

function SpendingLimitContentView() {
  const [selectedAmount, setSelectedAmount] = React.useState('');
  const dispatch = useDispatch();

  const onSelectAmount = amount => setSelectedAmount(amount);

  const saveSelectedAmount = () => {
    goBack();
    dispatch(selectedSpendingLimit(selectedAmount));
  };

  return (
    <View style={BASESTYLE.flex1}>
      <View style={styles.contentView}>
        <View style={BASESTYLE.inRow}>
          <Image source={IMAGES.LIMIT_LOGO} />
          <Text style={styles.spendLimitText}>{MESSAGES.SPEND_LIMIT}</Text>
        </View>
        <View style={styles.showAmountView}>
          <View style={styles.dollerView}>
            <Text style={styles.dollerText}>S$</Text>
          </View>
          <Text style={styles.showAmountText}>{selectedAmount}</Text>
        </View>
        <Text style={styles.weeklyMeans}>{MESSAGES.WEEKLY_MEANS}</Text>
        <View style={{...BASESTYLE.inRow, ...BASESTYLE.spaceBetween}}>
          <SpendLimitOptionBtn amount={'5,000'} onPress={onSelectAmount} />
          <SpendLimitOptionBtn amount={'10,000'} onPress={onSelectAmount} />
          <SpendLimitOptionBtn amount={'20,000'} onPress={onSelectAmount} />
        </View>
      </View>
      <View style={{backgroundColor: COLORS.WHITE}}>
        <NormalButton
          label={TEXT.SAVE}
          disabled={selectedAmount === ''}
          customStyle={styles.customStyle}
          onPress={saveSelectedAmount}
        />
      </View>
    </View>
  );
}
export default SpendingLimitContentView;
