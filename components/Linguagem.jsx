import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const Linguagem = ({ dados, salvarDados }) => {

  const [valor, setValor] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select your language:</Text>
      
      <Picker
        selectedValue={valor}
        onValueChange={(itemValue) => setValor(itemValue)}
      >
        <Picker.Item style={styles.picker} label="Português" value="PT" />
        <Picker.Item style={styles.picker} label="English" value="EN" />
        <Picker.Item style={styles.picker} label="Español" value="ES" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight:'bold',
    fontSize: 18
  },
  picker: {
    fontSize:18  
  }
});

