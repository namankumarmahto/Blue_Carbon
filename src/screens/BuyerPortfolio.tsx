import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

export default function BuyerPortfolio() {
  return (
    <ScreenContainer>
      <View style={styles.center}>
        <Text style={styles.h}>My Purchase / Portfolio</Text>
        <Text>Show purchased credits, certificates, download options here.</Text>
      </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({ center:{alignItems:'center',padding:20}, h:{fontSize:20,fontWeight:'700',marginBottom:8} });
