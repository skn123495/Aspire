import React from 'react';

import MainContainer from '../../Components/Container/MainContainer';
import {COLORS} from '../../Constants';
import ScrollableView from './ScrollableView';
import UpperView from './UpperView';

function DebitCard() {
  return (
    <MainContainer bgColor={COLORS.PRIMARY}>
      <UpperView />
      <ScrollableView />
    </MainContainer>
  );
}

export default DebitCard;
