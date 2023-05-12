import React from 'react';

import {View, StyleSheet, Alert} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      console.log('Presupuesto válido');
    } else {
      Alert.alert('Error', 'El Presupuesto no puede ser 0 o menor', [
        {text: 'OK'},
      ]);
    }
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto handleNuevoPresupuesto={handleNuevoPresupuesto} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3B82F6',
  },
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
});

export default App;
