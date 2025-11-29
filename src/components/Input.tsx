import React from 'react'; import { TextInput, StyleSheet } from 'react-native';
export default function Input(props: any){ return <TextInput style={styles.input} placeholderTextColor="#777" {...props} /> }
const styles = StyleSheet.create({ input: { borderWidth:1, borderColor:'#eee', padding:12, borderRadius:10, fontSize:16, backgroundColor:'#fff', marginBottom:12 }});
