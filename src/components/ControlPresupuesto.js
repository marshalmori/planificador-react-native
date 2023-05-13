import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image source={require('../img/grafico.jpg')} style={styles.imagen} />
      </View>

      <View>
        <Text>
          <Text>Presupuesto: </Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text>
          <Text>Disponible: </Text>
          {formatearCantidad(presupuesto)}
        </Text>

        <Text>
          <Text>Gastado: </Text>
          {formatearCantidad(presupuesto)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  centrarGrafica: {
    alignItems: 'center',
  },
  imagen: {
    width: 250,
    height: 250,
  },
});

export default ControlPresupuesto;
