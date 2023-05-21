import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Cadastro } from './Screens/Cadastro';
import { Login } from './Screens/Login';
import { Home } from './Screens/Home';

export default function App() {
  //Criar a parte da navegação Stack ou Drawer???
  //Descomentar os caponentes para viazualização das telas, 
  //enquanto não criamos a parte de navegação!
  return (
   <Cadastro/>
  // <Login/>
    // <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
});
