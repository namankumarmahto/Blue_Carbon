import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, FlatList, Platform } from 'react-native';
import { COLORS, SP, TYPO } from '../theme';

const ROLES = [
  { key: 'admin', label: 'Admin', icon: '⚙️' },
  { key: 'field', label: 'Field User', icon: '👤' },
  { key: 'verifier', label: 'Verifier', icon: '🔍' },
  { key: 'buyer', label: 'Buyer', icon: '💰' }
];

export default function RolePicker({ value, onSelect, placeholder = 'Select Role' }: any) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TouchableOpacity activeOpacity={0.9} onPress={() => setOpen(true)} style={styles.selectBtn}>
        <Text style={[styles.selectTxt, !value && { color: '#9AA4AE' }]}>{value ? `${value.icon}  ${value.label}` : placeholder}</Text>
        <Text style={styles.chev}>▾</Text>
      </TouchableOpacity>

      <Modal visible={open} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <FlatList
              data={ROLES}
              keyExtractor={(i) => i.key}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => { onSelect(item); setOpen(false); }}>
                  <Text style={styles.roleIcon}>{item.icon}</Text>
                  <Text style={styles.roleLabel}>{item.label}</Text>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.sep} />}
            />
            <TouchableOpacity style={styles.closeBtn} onPress={() => setOpen(false)}>
              <Text style={styles.closeTxt}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  selectBtn: { backgroundColor: COLORS.card, borderRadius: 12, paddingVertical: SP.sm, paddingHorizontal: SP.md, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth:1, borderColor:'#eef2f6' },
  selectTxt: { fontSize: TYPO.body, color: COLORS.text }, chev: { color: '#9AA4AE', fontSize: 18 },
  modalOverlay: { flex:1, backgroundColor:'rgba(8,12,18,0.35)', justifyContent:'center', alignItems:'center' },
  modalCard: { width: Platform.OS === 'web' ? 480 : '90%', maxHeight:420, borderRadius:12, backgroundColor:COLORS.card, paddingVertical:8, shadowColor:'#000', shadowOpacity:0.08, shadowRadius:12, elevation:6, ...(Platform.OS==='web'?{boxShadow:'0 8px 24px rgba(15,23,36,0.12)'}:{}) },
  row: { paddingVertical:14, paddingHorizontal:18, flexDirection:'row', alignItems:'center' },
  roleIcon: { fontSize:20, marginRight:12 }, roleLabel:{ fontSize: TYPO.body, color: COLORS.text },
  sep: { height:1, backgroundColor:'#f4f6f9' }, closeBtn:{ padding:12, alignItems:'center'}, closeTxt:{ color: COLORS.brand, fontWeight:'600' }
});
