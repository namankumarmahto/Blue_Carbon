import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TopHeader from '../components/TopHeader';

export default function Dashboard() {
  return (
    <ScreenContainer>
      <TopHeader title="BlueCarbon" />
      <View style={styles.content}>
        <Text style={styles.h}>Dashboard (demo)</Text>
        <Text>Wallet balance, projects and activity will appear here.</Text>
      </View>
    </ScreenContainer>
  );
}
const styles = StyleSheet.create({ content:{ padding:20 }, h:{ fontSize:20, fontWeight:'700', marginBottom:8 } });
