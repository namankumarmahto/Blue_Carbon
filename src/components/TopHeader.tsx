import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../theme';

export default function TopHeader({ title }: { title: string }) {
  const navigation: any = useNavigation();
  const canGoBack = typeof navigation?.canGoBack === 'function' && navigation.canGoBack();

  const handleBack = () => {
    try {
      if (canGoBack) {
        // prefer native goBack/pop
        navigation.goBack();
        return;
      }
      // fallback behaviour: try to navigate to a safe root
      // prefer Dashboard if it exists, otherwise go to Login
      if (navigation && typeof navigation.navigate === 'function') {
        if (navigation.isFocused && navigation.isFocused()) {
          // if already focused probably at root; send to Login
          navigation.navigate('LoginStyled');
        } else {
          navigation.navigate('Dashboard');
        }
      } else {
        // last resort: console a warning
        console.warn('TopHeader: unable to go back and navigation.navigate not available');
      }
    } catch (e) {
      console.warn('TopHeader handleBack error', e);
      try { navigation.navigate('LoginStyled'); } catch (_) {}
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {canGoBack ? (
          <TouchableOpacity onPress={handleBack} style={styles.backBtn} accessibilityLabel="Go back">
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleBack} style={styles.backBtn} accessibilityLabel="Go home">
            {/* show a subtle home/back if no back available */}
            <Text style={[styles.backArrow, {fontSize:20}]}>⌂</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.center}>
        <Text numberOfLines={1} style={styles.text}>{title}</Text>
      </View>

      <View style={styles.right}>
        <View style={styles.avatarPlaceholder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2f6'
  },
  left: { width: 56, alignItems: 'flex-start', justifyContent: 'center' },
  backBtn: { paddingHorizontal: 8, paddingVertical: 6, borderRadius: 8 },
  backArrow: { fontSize: 28, color: '#333', lineHeight: 28 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: '#111', fontSize: 18, fontWeight: '800' },
  right: { width: 56, alignItems: 'flex-end', justifyContent: 'center' },
  avatarPlaceholder: { width: 36, height: 36, borderRadius: 999, backgroundColor: '#f0f2f5' }
});
