import React from 'react';

import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        <NuevoPresupuesto />
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
