import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Minions from './componentes/Minions/Minions';
import { useState } from 'react';


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
      <Minions />
      <TouchableOpacity style={styles.botoes} onPress={Somar}>
        +
      </TouchableOpacity>
      <Text style={styles.contador}>{contador}</Text>

      <TouchableOpacity style={styles.botoes} onPress={Subtrair}>
        -
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contador: {
    color: 'red',
    fontSize: 200,
  },
  botoes: {
    backgroundColor: 'blue',
    fontSize: 100,
    padding: 20,
    borderRadius: 50
  },
});
