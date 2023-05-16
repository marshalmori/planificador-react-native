import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Alert,
  Pressable,
  Image,
  Text,
  Modal,
} from 'react-native';
import Header from './src/components/Header';
import NuevoPresupuesto from './src/components/NuevoPresupuesto';
import ControlPresupuesto from './src/components/ControlPresupuesto';
import FormularioGasto from './src/components/FormularioGasto';
import ListadoGastos from './src/components/ListadoGastos';
import {generarId} from './src/helpers';

const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);

  const handleNuevoPresupuesto = presupuesto => {
    if (Number(presupuesto) > 0) {
      setIsValidPresupuesto(true);
    } else {
      Alert.alert('Error', 'El Presupuesto no puede ser 0 o menor', [
        {text: 'OK'},
      ]);
    }
  };

  const handleGasto = gasto => {
    if (Object.values(gasto).includes(' ')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [{text: 'OK'}]);
      return;
    }

    // Anadir el nuevo gasto al state

    gasto.id = generarId();
    console.log({gasto});

    setGastos([...gastos, gasto]);
    setModal(!modal);
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Header />
        {isValidPresupuesto ? (
          <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
        ) : (
          <NuevoPresupuesto
            handleNuevoPresupuesto={handleNuevoPresupuesto}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
          />
        )}
      </View>

      {isValidPresupuesto && <ListadoGastos />}

      {modal && (
        <Modal
          animationType="slide"
          visible={modal}
          onRequestClose={() => {
            setModal(!modal);
          }}>
          <FormularioGasto setModal={setModal} handleGasto={handleGasto} />
        </Modal>
      )}

      {isValidPresupuesto && (
        <Pressable onPress={() => setModal(!modal)}>
          <Image
            style={styles.imagen}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
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
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default App;
