import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BuyerMarketplace from '../screens/BuyerMarketplace';
import BuyerPortfolio from '../screens/BuyerPortfolio';
import BuyerOrders from '../screens/BuyerOrders';
import Placeholder from '../screens/Placeholder';

const Tab = createBottomTabNavigator();

export default function BuyerTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 68,
          paddingVertical: 6,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 8
        },
        tabBarLabelStyle: { fontSize: 12 }
      }}
    >
      <Tab.Screen name="Marketplace" component={BuyerMarketplace} options={{ tabBarIcon: () => <Text style={{fontSize:18}}>🛒</Text> }} />
      <Tab.Screen name="Portfolio" component={BuyerPortfolio} options={{ tabBarIcon: () => <Text style={{fontSize:18}}>📦</Text> }} />
      <Tab.Screen name="Orders" component={BuyerOrders} options={{ tabBarIcon: () => <Text style={{fontSize:18}}>🧾</Text> }} />
      <Tab.Screen name="Help" component={Placeholder} options={{ tabBarIcon: () => <Text style={{fontSize:18}}>❓</Text> }} />
    </Tab.Navigator>
  );
}
