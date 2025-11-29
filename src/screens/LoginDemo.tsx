import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import TopHeader from '../components/TopHeader';
import Input from '../components/Input';
import BCButton from '../components/BCButton';
import Card from '../components/Card';
import ScreenContainer from '../components/ScreenContainer';

export default function LoginDemo({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    // demo: navigate to Dashboard (no real auth yet)
    navigation.replace('Dashboard');
  };

  return (
    <ScreenContainer>
      <TopHeader title="BlueCarbon" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.wrap}>
        <View style={styles.center}>
          <Card>
            <Text style={styles.title}>Sign in</Text>
            <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <BCButton title="Login" onPress={onLogin} />
          </Card>

          <View style={{ marginTop: 12 }}>
            <BCButton title="Back to Welcome" onPress={() => navigation.goBack()} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, width: '100%' },
  center: { alignItems: 'center', marginTop: 24 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12 }
});
