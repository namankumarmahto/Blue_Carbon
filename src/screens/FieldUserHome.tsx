import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  Platform
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TopHeader from '../components/TopHeader';
import { COLORS, TYPO, SP } from '../theme';

function LargeCard({ title, subtitle, emoji, onPress }: any) {
  return (
    <TouchableOpacity style={styles.largeCard} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.cardLeft}>
        <View style={styles.iconCircle}><Text style={styles.iconEmoji}>{emoji}</Text></View>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardTitle}>{title}</Text>
        {subtitle ? <Text style={styles.cardSubtitle}>{subtitle}</Text> : null}
      </View>
    </TouchableOpacity>
  );
}

function SmallTile({ title, emoji, onPress }: any) {
  return (
    <TouchableOpacity style={styles.smallTile} activeOpacity={0.9} onPress={onPress}>
      <View style={styles.tileIconWrap}><Text style={styles.tileIcon}>{emoji}</Text></View>
      <Text style={styles.tileLabel}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function FieldUserHome({ navigation }: any) {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === 'web' || width >= 900;
  const tileColumns = isWeb ? 3 : 3; // small tiles row count (desktop will show them centered because card width increases)
  return (
    <ScreenContainer>
      <TopHeader title="Field User" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.section}>
          <LargeCard title="Projects" subtitle="View assigned & created projects" emoji="📁" onPress={() => navigation.navigate('ProjectsTab')} />
          <LargeCard title="Create New Project" subtitle="Create new project" emoji="➕" onPress={() => {}} />
          <LargeCard title="Payments" subtitle="View earnings and withdrawal options" emoji="💰" onPress={() => navigation.navigate('PaymentsTab')} />
          <LargeCard title="Reports" subtitle="View field data submissions" emoji="📋" onPress={() => navigation.navigate('ReportsTab')} />
        </View>

        <Text style={styles.sectionTitle}>Field Data Entry</Text>
        <View style={[styles.tileRow, isWeb && { justifyContent: 'flex-start' }]}>
          <SmallTile title="Upload Photos" emoji="📷" onPress={() => {}} />
          <SmallTile title="Capture GPS\nLocation" emoji="📍" onPress={() => {}} />
          <SmallTile title="Offline Mode\nSave Offline" emoji="⬇️" onPress={() => {}} />
        </View>

        <Text style={styles.sectionTitle}>Support Tools</Text>
        <View style={[styles.tileRow, isWeb && { justifyContent: 'flex-start' }]}>
          <SmallTile title="Quick Guides" emoji="⚡" onPress={() => {}} />
          <SmallTile title="FAQs" emoji="❓" onPress={() => {}} />
          <SmallTile title="Contact Support" emoji="☎️" onPress={() => {}} />
        </View>

        <View style={{ height: 72 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingBottom: 24 },
  section: { paddingHorizontal: 12, paddingTop: 16, gap: 12 },
  largeCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 10, elevation: 4
  },
  cardLeft: { width: 64, alignItems: 'center', justifyContent: 'center' },
  iconCircle: { width: 52, height: 52, borderRadius: 26, backgroundColor: '#2e8e84', alignItems: 'center', justifyContent: 'center' },
  iconEmoji: { fontSize: 22, color: '#fff' },
  cardRight: { flex: 1, paddingLeft: 12 },
  cardTitle: { fontSize: 18, fontWeight: '800', color: COLORS.text },
  cardSubtitle: { fontSize: 14, color: '#6b7280', marginTop: 6 },

  sectionTitle: { marginTop: 18, marginLeft: 12, marginBottom: 10, fontSize: 20, fontWeight: '800', color: COLORS.text },

  tileRow: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, gap: 12 },
  smallTile: {
    width: 110,
    height: 120,
    backgroundColor: COLORS.card,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 3
  },
  tileIconWrap: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#2e8e84', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
  tileIcon: { fontSize: 24, color: '#fff' },
  tileLabel: { textAlign: 'center', fontWeight: '700', marginTop: 4, color: COLORS.text, fontSize: 13 }
});
