import React from 'react'; import { View, Text, Button } from 'react-native';
export default function Login({ navigation }: any) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Login</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
