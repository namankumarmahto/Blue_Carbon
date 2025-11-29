import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Platform
} from 'react-native';
import ScreenContainer from '../components/ScreenContainer';
import TopHeader from '../components/TopHeader';
import { COLORS } from '../theme';

/**
 * Responsive marketplace:
 * - mobile: stacked cards (touch targets)
 * - wide (tablet/web): two-column layout with table-like list and filters
 */

function ProjectCard({ item, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.9} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.projTitle}>{item.project}</Text>
        <Text style={styles.muted}>{item.location}</Text>
      </View>

      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.credits}>{item.credits}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={[styles.status, item.status === 'Approved' ? { color: '#0F9D58' } : { color: '#1E88E5' }]}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  );
}

function TableRow({ item }: any) {
  return (
    <View style={styles.tableRow}>
      <View style={{ flex: 2 }}>
        <Text style={styles.projTitle}>{item.project}</Text>
        <Text style={styles.muted}>{item.location}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.credits}>{item.credits}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={[styles.status, item.status === 'Approved' ? { color: '#0F9D58' } : { color: '#1E88E5' }]}>{item.status}</Text>
      </View>
    </View>
  );
}

export default function BuyerMarketplace({ navigation }: any) {
  const { width } = useWindowDimensions();
  const isWide = width >= 900 || (Platform.OS === 'web' && width > 700);

  const [projects] = useState([
    { id:1, project: 'Mangrove Restoration', location:'Odisha', credits:1000, price:'$10/₹880', status:'Approved' },
    { id:2, project: 'Peatland Conservation', location:'Goa', credits:500, price:'$12/₹1057', status:'Verified' },
    { id:3, project: 'Wetland Protection', location:'West Bengal', credits:2000, price:'$8/₹705', status:'Approved' },
    { id:4, project: 'Seagrass Rehabilitation', location:'India', credits:750, price:'$15/₹1332', status:'Verified' }
  ]);

  return (
    <ScreenContainer>
      <TopHeader title="Buyers Portal" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <View style={[styles.content, isWide && styles.contentWide]}>
          {/* Left / Primary column */}
          <View style={[styles.left, isWide && styles.leftWide]}>
            <Text style={styles.h1}>Available Carbon Credit</Text>

            {/* Mobile: stacked cards */}
            {!isWide && (
              <View style={{ marginBottom: 8 }}>
                {projects.map(p => <ProjectCard key={p.id} item={p} onPress={() => {}} />)}
              </View>
            )}

            {/* Wide: table-like presentation */}
            {isWide && (
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.hCell, { flex: 2 }]}>Project</Text>
                  <Text style={[styles.hCell, { flex: 1, textAlign: 'center' }]}>Verified Credits</Text>
                  <Text style={[styles.hCell, { flex: 1, textAlign: 'center' }]}>Price/Credit</Text>
                  <Text style={[styles.hCell, { flex: 1, textAlign: 'center' }]}>Status</Text>
                </View>

                {projects.map(p => <TableRow key={p.id} item={p} />)}
              </View>
            )}

            {/* Cards row below table for actions (both mobile & wide) */}
            <View style={styles.rowWrap}>
              <View style={[styles.cardBox, { flex: isWide ? 1.2 : 1 }]}>
                <Text style={styles.cardTitle}>My Purchase / Portfolio</Text>
                <Text style={styles.muted}>Project</Text>
                <Text style={styles.cardText}>Mangrove Restoration — 500 credits</Text>
                <Text style={[styles.muted, { marginTop: 8 }]}>Purchased Date : 24-09-2024</Text>
                <TouchableOpacity style={styles.primaryBtn}>
                  <Text style={styles.primaryBtnTxt}>Download Certificate</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.cardBox, isWide ? { width: 260, marginLeft: 12 } : { marginLeft: 0, marginTop: 12 }]}>
                <Text style={styles.cardTitle}>Purchase Options</Text>
                <Text style={styles.muted}>Number of Credits</Text>
                <TextInput placeholder="e.g. 100" keyboardType="numeric" style={[styles.input, { marginTop: 8 }]} />
                <TouchableOpacity style={[styles.primaryBtn, { marginTop: 12 }]}>
                  <Text style={styles.primaryBtnTxt}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Right / Filters column (only show as side column on wide screens) */}
          {isWide ? (
            <View style={styles.rightWide}>
              <View style={styles.filterCard}>
                <Text style={styles.cardTitle}>Filter & Search</Text>
                <Text style={styles.muted}>Location</Text>
                <TextInput placeholder="All" style={styles.input} />
                <Text style={[styles.muted, { marginTop: 8 }]}>Price Range</Text>
                <TextInput placeholder="$0 - $10" style={styles.input} />
                <Text style={[styles.muted, { marginTop: 8 }]}>Project Type / Ecosystem</Text>
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.checkbox}>☐ Mangroves</Text>
                  <Text style={styles.checkbox}>☐ Seagrass</Text>
                  <Text style={styles.checkbox}>☐ Wetlands</Text>
                </View>
              </View>

              <View style={[styles.filterCard, { marginTop: 12 }]}>
                <Text style={styles.cardTitle}>Sort by</Text>
                <Text style={styles.muted}>Lowest Price</Text>
                <Text style={[styles.muted, { marginTop: 8 }]}>Credit Availability</Text>
              </View>
            </View>
          ) : (
            // On mobile show filters as an inline section below content
            <View style={{ marginTop: 12 }}>
              <View style={styles.filterCard}>
                <Text style={styles.cardTitle}>Filter & Search</Text>
                <Text style={styles.muted}>Location</Text>
                <TextInput placeholder="All" style={styles.input} />
                <Text style={[styles.muted, { marginTop: 8 }]}>Price Range</Text>
                <TextInput placeholder="$0 - $10" style={styles.input} />
              </View>
            </View>
          )}
        </View>

        {/* big buy CTA */}
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyTxt}>Buy Carbon Credit</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: { paddingBottom: 32 },
  content: { gap: 12 },
  contentWide: { flexDirection: 'row', alignItems: 'flex-start', gap: 16 },

  left: { flex: 1 },
  leftWide: { flex: 1.4 },

  h1: { fontSize: 20, fontWeight: '800', marginBottom: 12, color: COLORS.text },

  /* Mobile card style */
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#eef0f3'
  },
  projTitle: { fontWeight: '700' },
  muted: { color: '#7b8794' },
  credits: { fontWeight: '700' },
  price: { color: '#6b7280', marginTop: 6 },
  status: { marginTop: 6, fontWeight: '700' },

  /* Table (wide) */
  table: { borderRadius: 10, borderWidth: 1, borderColor: '#ddd', overflow: 'hidden', backgroundColor: '#fff' },
  tableHeader: { flexDirection: 'row', padding: 12, backgroundColor: '#fafafa', borderBottomWidth: 1, borderColor: '#eee' },
  hCell: { fontWeight: '700', color: '#6b6b6b' },
  tableRow: { flexDirection: 'row', padding: 14, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },

  /* cards & controls */
  rowWrap: { flexDirection: 'row', gap: 12, marginTop: 12, flexWrap: 'wrap' },
  cardBox: { backgroundColor: '#fff', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: '#e6e6e6', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 3, marginBottom: 12 },

  cardTitle: { fontWeight: '800', fontSize: 16, marginBottom: 8 },
  cardText: { fontSize: 14, marginTop: 4 },

  input: { borderWidth: 1, borderColor: '#eee', padding: 10, borderRadius: 8, marginTop: 6 },

  primaryBtn: { marginTop: 12, backgroundColor: '#4776E6', paddingVertical: 10, borderRadius: 10, alignItems: 'center' },
  primaryBtnTxt: { color: '#fff', fontWeight: '700' },

  filterCard: { backgroundColor: '#fff', borderRadius: 12, padding: 12, borderWidth: 1, borderColor: '#e6e6e6' },
  checkbox: { marginTop: 6, color: '#555' },

  rightWide: { width: 320 },

  buyBtn: { marginTop: 18, backgroundColor: '#4776E6', paddingVertical: 14, borderRadius: 12, alignItems: 'center', marginHorizontal: 12 },
  buyTxt: { color: '#fff', fontWeight: '800', fontSize: 18 }
});
