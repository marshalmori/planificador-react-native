import React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import globalStyles from '../styles';

const Gasto = ({gasto}) => {
  const {nombre, categoria, cantidad, id} = gasto;
  return (
    <View>
      <Text>{nombre}</Text>
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
