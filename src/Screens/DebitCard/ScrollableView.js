import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import ImageTextToggleBtn from '../../Components/Button/ImageTextToggleBtn';
import ThickProgressBar from '../../Components/ProgressBar/ThickProgressBar';
import PaymentCard from '../../Components/ViewComponent/PaymentCard';
import {IMAGES, MESSAGES, TEXT} from '../../Constants';
import {selectedSpendingLimit} from '../../Redux/Actions/DebitCard.actions';
import {navigation} from '../../Services/NavigationServices';
import {styles} from './styles';

function ScrollableView() {
  const {SpendingLimitAmount} = useSelector(store => store.DebitCardReducer);
  const [spendLimitEnable, setSpendLimitEnable] = React.useState(false);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const navigateToSpendLimit = () => {
    if (!spendLimitEnable) {
      navigation('SpendingLimit');
    } else {
      setSpendLimitEnable(false);
      dispatch(selectedSpendingLimit(0));
    }
  };

  React.useEffect(() => {
    if (SpendingLimitAmount !== 0) {
      setSpendLimitEnable(true);
    }
  }, [SpendingLimitAmount]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.ScrollableView}
      bounces={false}>
      <View style={styles.outterView(insets.top)}>
        <PaymentCard customViewStyle={styles.moveViewUp} />
        <View style={styles.moveViewUp}>
          {spendLimitEnable && <ThickProgressBar />}
          <ImageTextToggleBtn
            image={IMAGES.TOP_UP}
            title={TEXT.TOP_UP_ACCOUNT}
            description={MESSAGES.TOP_UP_ACCOUNT}
          />
          <ImageTextToggleBtn
            image={IMAGES.WEEKLY_LIMIT}
            title={TEXT.WEEKLY_SPENDING_LIMIT}
            description={MESSAGES.WEEKLY_SPEND}
            showToggleBtn
            onPress={navigateToSpendLimit}
            enable={spendLimitEnable}
            onEnableDescription={
              MESSAGES.ENABLE_WEEKLY_SPEND + ' ' + SpendingLimitAmount
            }
          />
          <ImageTextToggleBtn
            image={IMAGES.FREEZE_CARD}
            title={TEXT.FREEZE_CARD}
            description={MESSAGES.FREEZE_CARD}
            showToggleBtn
          />
          <ImageTextToggleBtn
            image={IMAGES.NEW_CARD}
            title={TEXT.NEW_CARD}
            description={MESSAGES.NEW_CARD}
          />
          <ImageTextToggleBtn
            image={IMAGES.DEACTIVATE_CARD}
            title={TEXT.DEACTIVATE_CARD}
            description={MESSAGES.DEACTIVATED_CARDS}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default React.memo(ScrollableView);
