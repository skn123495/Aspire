import React from 'react';

import MainContainer from '../../Components/Container/MainContainer';
import {COLORS} from '../../Constants';
import SpendingLimitContentView from './ContentView';
import SpendLimitUpperView from './UpperView';

function SpendingLimit() {
  return (
    <MainContainer bgColor={COLORS.PRIMARY}>
      <SpendLimitUpperView />
      <SpendingLimitContentView />
    </MainContainer>
  );
}
export default SpendingLimit;
