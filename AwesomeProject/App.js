import React, { useState } from 'react';
import { Card, StyleSheet, Text, View, Button, Pressable, Modal } from 'react-native';
import Formulario from './src/components/Formulario';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  console.log(modalVisible);



  const nuevaCita = () => {
    console.log('presione el boton')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Aministrador de Citas <Text style={styles.tituloBold}>veterinaria</Text>
      </Text>
      <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.btnnuevacita}>
        <Text style={styles.btntextnuevascitas}>Nueva cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible}         setModalVisible={setModalVisible}>
      </Formulario>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundcolor: '#f3f4f6',
    flex: 1,
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontsize: 30,
    textTransform: 'uppercase',
    fontweight: 6000,
    color: '#3741551',
    taxtAlign: 'center'
  },
  tituloBold: {
    fontweight: 900,
    color: '#6D28D9',
  },
  btnnuevacita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btntextnuevascitas: {
    textAlign: 'center',
    color: '#fff',
    fontsize: 20,
    fontweight: 900,
    textTransform: 'uppercase',
  },
});