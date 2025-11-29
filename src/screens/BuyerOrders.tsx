import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';

export default function BuyerOrders() {
  return (
    <ScreenContainer>
      <View style={styles.center}>
        <Text style={styles.h}>Orders</Text>
        <Text>Order history & invoices will appear here.</Text>
      </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({ center:{alignItems:'center',padding:20}, h:{fontSize:20,fontWeight:'700',marginBottom:8} });
