import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Dados } from '../components/Dados';
import { Linguagem } from '../components/Linguagem';
import { Termos } from '../components/Termos';
import { TextLogo } from '../components/TextLogo';

export const Cadastro = () => {
    const [etapa, setEtapa] = useState(1);
    const [dados, setDados] = useState({});
    const totalEtapas = 3;
  
    const avancarEtapa = () => {
      if (etapa < totalEtapas) {
        setEtapa(etapa + 1);
      }
    };
  
    const retrocederEtapa = () => {
      if (etapa > 1) {
        setEtapa(etapa - 1);
      }
    };
  
    const salvarDados = (novosDados) => {
      setDados({ ...dados, ...novosDados });
    };

    const verificarDados = ()=> {
      return dados.nome && dados.email && dados.idade && dados.user && dados.pass ? true : false
    }
  
    const renderizarEtapa = () => {
      switch (etapa) {
        case 1:
          return <Dados dados={dados} salvarDados={salvarDados} />;
        case 2:
          return <Linguagem dados={dados} salvarDados={salvarDados} />;
        case 3:
          return <Termos dados={dados} salvarDados={salvarDados} />;
        default:
          return null;
      }
    };
  
    return (
      <View style={styles.container}>

        <TextLogo/>

        <View style={styles.progressContainer}>
          <View style={[styles.barraProgresso, { width: `${(etapa / totalEtapas) * 100}%` }]} />
        </View>
  
        {renderizarEtapa()}
  
        <View style={styles.buttonContainer}>
          {etapa > 1 && (
            <TouchableOpacity style={styles.button} onPress={retrocederEtapa}>
              <Text style={styles.buttonText}>◀</Text>
            </TouchableOpacity>
          )}
  
          <TouchableOpacity style={styles.button} onPress=
            {()=>{
              verificarDados() ?
              avancarEtapa() : 
              Alert.alert('Preencher todos os dados!')}
            }
          >
            <Text style={styles.buttonText}>{etapa === totalEtapas ? 'Done' : 'Next ▶'}</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  
  };

  let corBase = "#0149ab"

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    progressContainer: {
      height: 10,
      backgroundColor: '#F2F2F2',
      borderRadius: 5,
      marginBottom: 20,
    },
    barraProgresso: {
      height: '100%',
      backgroundColor: corBase,
      borderRadius: 5
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    button: {
      backgroundColor: corBase,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      elevation: 5
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  