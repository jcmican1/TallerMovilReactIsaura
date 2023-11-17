import React, { useState } from 'react'
import { StyleSheet, Text, Button, Modal, TextInput, View, ScrollView, Pressable } from 'react-native';
import DataPicker from 'react-native-date-picker';

const Formulario = ({ modalVisible, setModalVisible }) => {

    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    return (
        <Modal animationType='slide' visible={modalVisible}>
            <View style={styles.contenido}>
                <ScrollView>

                    <Text style={styles.titulo}>
                        Nueva{''}
                        <Text style={styles.tituloBold}>
                            Cita
                        </Text>
                    </Text>
                    <Pressable style={styles.btnCancelar}
                        onLongPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.btnCancelarTexto}>x btnCancelar</Text>
                    </Pressable>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Nombre del Paciente
                        </Text>
                        <TextInput style={styles.input}
                            placeholder='Nombre del paciente'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}>

                        </TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Nombre del Propietario
                        </Text>
                        <TextInput style={styles.input}
                            placeholder='Nombre del Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}>

                        </TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Email propietario
                        </Text>
                        <TextInput style={styles.input}
                            placeholder='email'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}>

                        </TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Telefono propietario
                        </Text>
                        <TextInput style={styles.input}
                            placeholder='Nombre del paciente'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={10}>
                        </TextInput>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Fecha Alta
                        </Text>
                        {/* <View style={styles.fechacontenedor}>
                            <DataPicker date={fecha} locale='es'
                                onValueChange={(date) => setFecha(date)}>
                            </DataPicker>
                        </View> */}
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Sintomas
                        </Text>
                        <TextInput style={[styles.input, styles.sintomasInput]}
                            placeholder='Nombre del paciente'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLine={4}>
                        </TextInput>
                    </View>
                    <Pressable style={styles.btnNuevaCita}>
                        <Text style={styles.btnNuevaCitaTexto}>
                            Agregar paciente
                        </Text>
                    </Pressable>
                </ScrollView>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontweight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff'
    },
    tituloBold: {
        fontweight: '900',
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontweight: '600 ',
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
    },
    sintomasInput: {
        height: 100,
    },
    fechacontenedor: {
        backgroundcolor: '#FFF',
        borderRadius: 10,
    },
    btnCancelar: {
        marginVertical: 30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontweight: 900,
        fontSize: 16,
        textTransform: 'uppercase'
    },
    btnNuevaCita: {
        marginvertical: 50,
        backgroundcolor: '#F59E0B',
        paddingvertical: 10,
        paddingHorizonta1: 30,
        borderRadius: 10,
    },
    btnNuevaCitaTexto: {
        textAlign:'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontweight: '900',
        fontSize: 16,
    }
})

export default Formulario

