import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function BCButton({ title, onPress, style }: any) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} activeOpacity={0.9}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: COLORS.brand,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#2f54eb',
    shadowOpacity: 0.14,
    shadowRadius: 10
  },
  txt: { color: '#fff', fontWeight: '700', fontSize: 16 }
});
