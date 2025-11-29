import 'react-native-gesture-handler';
import React, { useRef, useEffect } from 'react';
import { Platform, BackHandler } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import SplashScreen from './screens/SplashScreen';
import LoginStyled from './screens/LoginStyled';
import Dashboard from './screens/Dashboard';
import FieldUserTabs from './navigation/FieldUserTabs';
import BuyerTabs from './navigation/BuyerTabs';
import AdminHome from './screens/AdminHome';

// linking config
const prefix = Linking.createURL('/');
const linking = {
  prefixes: [prefix],
  config: {
    initialRouteName: 'Splash',
    screens: {
      Splash: 'splash',
      LoginStyled: '',
      Dashboard: 'dashboard',
      FieldUser: 'field',
      Buyer: 'buyer',
      Admin: 'admin'
    }
  }
};

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef: any = useRef(null);

  // Android hardware back: pop when possible; if not, navigate to Login or exit
  useEffect(() => {
    if (Platform.OS !== 'android') return;
    const onBackPress = () => {
      const nav = navigationRef.current;
      if (!nav) return false;
      try {
        // If can go back -> pop
        if (nav.canGoBack()) {
          nav.goBack();
          return true;
        }

        // no stack to pop: decide fallback
        const route = nav.getCurrentRoute && nav.getCurrentRoute();
        // if we are on login or splash — exit app
        if (!route || route.name === 'LoginStyled' || route.name === 'Splash') {
          BackHandler.exitApp();
          return true;
        }

        // otherwise navigate to Login (or Dashboard) as a safe fallback
        nav.dispatch(CommonActions.navigate({ name: 'LoginStyled' }));
        return true;
      } catch (e) {
        return false;
      }
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  // Web: keep URL in sync (fallback)
  const onStateChange = () => {
    try {
      if (Platform.OS === 'web' && typeof window !== 'undefined') {
        const route = navigationRef.current?.getCurrentRoute?.();
        const path = (() => {
          if (!route) return '/';
          if (route.name === 'LoginStyled') return '/';
          if (route.name === 'FieldUser') return '/field';
          if (route.name === 'Buyer') return '/buyer';
          if (route.name === 'Admin') return '/admin';
          if (route.name === 'Dashboard') return '/dashboard';
          return '/';
        })();
        if (window.location.pathname !== path) window.history.replaceState({}, '', path);
        document.title = route?.name ? `BlueCarbon — ${route.name}` : 'BlueCarbon';
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <NavigationContainer ref={navigationRef} linking={linking} onStateChange={onStateChange} fallback={<></>}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginStyled" component={LoginStyled} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="FieldUser" component={FieldUserTabs} />
        <Stack.Screen name="Buyer" component={BuyerTabs} />
        <Stack.Screen name="Admin" component={AdminHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
