import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FieldUserHome from '../screens/FieldUserHome';
import Projects from '../screens/Placeholder';
import Payments from '../screens/Placeholder';
import Reports from '../screens/Placeholder';
import Help from '../screens/Placeholder';

const Tab = createBottomTabNavigator();

export default function FieldUserTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 72,
          paddingVertical: 6,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 8
        },
        tabBarLabelStyle: { fontSize: 12 }
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={FieldUserHome}
        options={{ title: 'Home', tabBarIcon: () => <Text style={{fontSize:20}}>🏠</Text> }}
      />
      <Tab.Screen
        name="ProjectsTab"
        component={Projects}
        options={{ title: 'Projects', tabBarIcon: () => <Text style={{fontSize:20}}>📁</Text> }}
      />
      <Tab.Screen
        name="PaymentsTab"
        component={Payments}
        options={{ title: 'Payments', tabBarIcon: () => <Text style={{fontSize:20}}>💰</Text> }}
      />
      <Tab.Screen
        name="ReportsTab"
        component={Reports}
        options={{ title: 'Reports', tabBarIcon: () => <Text style={{fontSize:20}}>📋</Text> }}
      />
      <Tab.Screen
        name="HelpTab"
        component={Help}
        options={{ title: 'Help', tabBarIcon: () => <Text style={{fontSize:20}}>❓</Text> }}
      />
    </Tab.Navigator>
  );
}
