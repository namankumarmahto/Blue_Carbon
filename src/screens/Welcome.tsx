import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BCButton from '../components/BCButton';
import ScreenContainer from '../components/ScreenContainer';
import { COLORS } from '../theme';

export default function Welcome({ navigation }: any) {
  return (
    <ScreenContainer>
      <View style={styles.box}>
        <Text style={styles.title}>Blue Carbon Registry</Text>
        <Text style={styles.tagline}>Secure · Transparent · Collaborative</Text>
        <View style={{height:24}} />
        <BCButton title="Login" onPress={() => navigation.navigate('LoginStyled')} />
        <View style={{height:12}} />
        <BCButton title="Open Field User (Demo)" onPress={() => navigation.navigate('FieldUser')} />
        <View style={{height:12}} />
        <BCButton title="Open Admin Portal (Demo)" onPress={() => navigation.navigate('Admin')} />
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  box: { padding:20, alignItems:'center', gap:12 },
  title: { fontSize:28, fontWeight:'800', color: COLORS.brand, textAlign:'center' },
  tagline: { fontSize:16, color:'#95A0AB', textAlign:'center' }
});
