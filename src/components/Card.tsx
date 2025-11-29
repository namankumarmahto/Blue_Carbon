import React from 'react'; import { View, StyleSheet } from 'react-native';
export default function Card({ children }: any) { return <View style={styles.card}>{children}</View>; }
const styles = StyleSheet.create({ card: { backgroundColor:'#fff', padding:16, borderRadius:18, marginBottom:12, elevation:2, shadowColor:'#000', shadowOpacity:0.06, shadowRadius:12 } });
