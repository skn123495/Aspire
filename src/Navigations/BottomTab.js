import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeTab from '../Screens/Home';
import {COLORS, IMAGES} from '../Constants';
import DebitCard from '../Screens/DebitCard';
import Payments from '../Screens/Payments';
import Credits from '../Screens/Credit';
import Profile from '../Screens/Profile';
import {normalizeFont, scaleHeight} from '../Utils/responsive';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hasNotch} from 'react-native-device-info';

const Tab = createBottomTabNavigator();

const TabIconColor = focused => ({
  tintColor: focused ? COLORS.GREEN : COLORS.GRAY_E0,
  resizeMode: 'contain',
});

const TabIconLabel = focused => ({
  color: focused ? COLORS.GREEN : COLORS.GRAY_E0,
  fontSize: normalizeFont(9),
  lineHeight: scaleHeight(12),
});

const BottomTab = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="DebitCard"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: hasNotch() ? insets.bottom : scaleHeight(8),
        },
        tabBarInactiveTintColor: COLORS.GRAY_E0,
        tabBarActiveTintColor: COLORS.GREEN,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={TabIconLabel(focused)}>Home</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image source={IMAGES.HOME} style={TabIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="DebitCard"
        component={DebitCard}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={TabIconLabel(focused)}>Debit Card</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image source={IMAGES.PAY} style={TabIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={Payments}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={TabIconLabel(focused)}>Payments</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image source={IMAGES.PAYMENTS} style={TabIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Credit"
        component={Credits}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={TabIconLabel(focused)}>Credit</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image source={IMAGES.CREDITS} style={TabIconColor(focused)} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={TabIconLabel(focused)}>Profile</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Image source={IMAGES.ACCOUNT} style={TabIconColor(focused)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default React.memo(BottomTab);
