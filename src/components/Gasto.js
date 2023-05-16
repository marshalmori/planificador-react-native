import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import globalStyles from '../styles';
import {formatearCantidad} from '../helpers';

const diccionarioIconos = {
  ahorro: require('../img/icono_ahorro.png'),
  comida: require('../img/icono_comida.png'),
  casa: require('../img/icono_casa.png'),
  gastos: require('../img/icono_gastos.png'),
  ocio: require('../img/icono_ocio.png'),
  salud: require('../img/icono_salud.png'),
  suscripciones: require('../img/icono_suscripciones.png'),
};

const Gasto = ({gasto}) => {
  const {nombre, categoria, cantidad, id} = gasto;
  return (
    <View style={styles.contenedor}>
      <View>
        <View>
          <Image source={diccionarioIconos[categoria]} />
          <View>
            <Text>{categoria}</Text>
            <Text>{nombre}</Text>
          </View>
        </View>

        <Text>{formatearCantidad(cantidad)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    marginBottom: 20,
  },
});

export default Gasto;
