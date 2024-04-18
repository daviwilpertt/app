import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
// import CORES from './comum/constantes/cores.js'
import './App.css'
import BotaoCustom from './comum/componentes/BotaoCustom/BotaoCustom.js';


export default function App() {
  const [contador, setContador] = useState(0)

  let Somar = () => {
    setContador(contador + 1)
  }

  let Subtrair = () => {
    setContador(contador - 1)
  }

  return (
    <View style={styles.container}>
      <BotaoCustom onPress={Somar}>+</BotaoCustom>
      <Text>{contador}</Text>
      <BotaoCustom onPress={Subtrair}>-</BotaoCustom>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: CORES.PRIMARIA,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
