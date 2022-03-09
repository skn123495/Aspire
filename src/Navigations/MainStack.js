import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import SpendingLimit from '../Screens/SpendingLimit';

const Stack = createStackNavigator();

export default function MainAppStack() {
  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="SpendingLimit" component={SpendingLimit} />
    </Stack.Navigator>
  );
}
