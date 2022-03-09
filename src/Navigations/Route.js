import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '../Services/NavigationServices';
import MainAppStack from './MainStack';

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainAppStack />
    </NavigationContainer>
  );
};

export default React.memo(AppNavigation);
