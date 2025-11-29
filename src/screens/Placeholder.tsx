import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

export default function Placeholder({ route }: any) {
  return (
    <ScreenContainer>
      <View style={styles.center}>
        <Text style={styles.h}>Placeholder</Text>
        <Text>This is the {route?.name} screen. Replace with real UI.</Text>
      </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({ center:{alignItems:'center',padding:20}, h:{fontSize:22,fontWeight:'700',marginBottom:8} });
