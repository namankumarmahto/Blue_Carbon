import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView, Platform } from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TopHeader from '../components/TopHeader';
import { COLORS } from '../theme';

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

export default function AdminHome() {
  const { width } = useWindowDimensions();
  const isWide = width >= 900 || (Platform.OS === 'web' && width > 700);

  return (
    <ScreenContainer>
      <TopHeader title="Admin" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.searchWrap}>
          <View style={styles.searchBox}>
            <Text style={styles.muted}>🔍  Search</Text>
          </View>
        </View>

        {/* stat cards */}
        <View style={[styles.statsRow, isWide && styles.statsRowWide]}>
          <StatCard label="Total Users" value="1,572" />
          <StatCard label="Projects Registered" value="48" />
          <StatCard label="Carbon Credits" value="15,320" />
          <StatCard label="Revenue Generated" value="$75,600" />
        </View>

        {/* growth chart placeholder */}
        <View style={styles.chartWrap}>
          <View style={styles.chartCard}>
            <Text style={styles.chartTitle}>Carbon Credits Growth Over Time</Text>
            <View style={styles.chartPlaceholder}>
              <Text style={{ color: '#9aa4ae' }}>[Line chart placeholder]</Text>
            </View>
          </View>
        </View>

        {/* recent activity + donut */}
        <View style={[styles.activityWrap, isWide && styles.activityWrapWide]}>
          <View style={styles.activityCard}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <View style={styles.activityItem}><Text style={styles.bullet}>👤</Text><Text style={styles.activityTxt}>User signups</Text></View>
            <View style={styles.activityItem}><Text style={styles.bullet}>💳</Text><Text style={styles.activityTxt}>Transactions</Text></View>
            <View style={styles.activityItem}><Text style={styles.bullet}>✅</Text><Text style={styles.activityTxt}>New project approvals</Text></View>
          </View>

          <View style={styles.donutWrap}>
            <View style={styles.donutCard}>
              <View style={styles.donutPlaceholder}><Text style={{ color: '#2F54EB' }}>[Donut chart]</Text></View>
            </View>
          </View>
        </View>

        <View style={{ height: 48 }} />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  scroll: { paddingBottom: 28 },

  searchWrap: { paddingHorizontal: 12, paddingTop: 16 },
  searchBox: { backgroundColor: '#f0f2f5', borderRadius: 24, paddingVertical: 12, paddingHorizontal: 18 },

  statsRow: { padding: 12, gap: 12, flexDirection: 'column' },
  statsRowWide: { flexDirection: 'row', justifyContent: 'space-between' },

  statCard: {
    backgroundColor: '#f7f8fa',
    borderRadius: 12,
    padding: 18,
    marginBottom: 10,
    minWidth: 140,
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2
  },
  statLabel: { color: '#5b6770', fontWeight: '700', marginBottom: 8 },
  statValue: { fontSize: 28, fontWeight: '900', color: '#111' },

  chartWrap: { paddingHorizontal: 12, paddingTop: 6 },
  chartCard: { backgroundColor: '#fff', borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#eef0f3', shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 8, elevation: 2 },
  chartTitle: { marginBottom: 10, fontWeight: '700', color: '#263238' },
  chartPlaceholder: { height: 160, borderRadius: 8, backgroundColor: '#fbfdff', borderWidth: 1, borderColor: '#f0f5ff', alignItems:'center', justifyContent:'center' },

  activityWrap: { padding: 12, marginTop: 12, gap: 12, flexDirection: 'column' },
  activityWrapWide: { flexDirection: 'row', alignItems: 'flex-start' },

  activityCard: { flex: 1, backgroundColor: '#f6f7f8', borderRadius: 12, padding: 14 },
  sectionTitle: { fontWeight: '800', fontSize: 16, marginBottom: 10 },
  activityItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 999, marginBottom: 8 },
  bullet: { marginRight: 12 },
  activityTxt: { fontWeight: '700', color: '#1f2937' },

  donutWrap: { width: 180, marginLeft: 12 },
  donutCard: { backgroundColor: '#fff', borderRadius: 12, padding: 12, alignItems: 'center', justifyContent: 'center', borderWidth:1, borderColor:'#eef0f3' },
  donutPlaceholder: { height: 120, width: 120, borderRadius: 999, backgroundColor: '#fbfdff', alignItems: 'center', justifyContent: 'center' }
});
