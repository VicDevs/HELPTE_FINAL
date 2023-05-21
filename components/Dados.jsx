import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export const Dados = ({ dados, salvarDados }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');

  const novosDados = { nome, email, idade, user, pass };

  useEffect(() => {
    salvarDados( novosDados );
  }, [nome, email, idade, user, pass]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your name"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your age"
        value={email}
        onChangeText={setEmail}
      />

<Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your age"
        value={idade}
        onChangeText={setIdade}
      />

    <Text style={styles.label}>User</Text>
        <TextInput
            style={styles.input}
            placeholder="Select your Username"
            value={user}
            onChangeText={setUser}
        />

    <Text style={styles.label}>Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Type your password"
            value={pass}
            onChangeText={setPass}
        />
    </View>
  );
};

let corBase = "#0149ab"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: "center",
  },
  button: {
    backgroundColor: corBase,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input:{
    width: "90%",
    borderBottomWidth : 2,
    backgroundColor: '#D9D9D9',
    borderBottomColor : corBase,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10
  },
});
