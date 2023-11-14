import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firebase from "../src/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebase);

const AddCollectorScreen = () => {
  const [name, setName] = useState('');
  const [field, setField] = useState('');
  const [id, setID] = useState('');

  const handleSaveCollector = async () => {
    try {
        if (!name || !field || !id) {
          console.error('Please fill in all fields');
          return;
        }
  
        const docRef = await addDoc(collection(db, 'collectors'), {
          name,
          field,
          id,
        });
  
        console.log('Collector saved with ID: ', docRef.id);
      } catch (error) {
        console.error('Error saving collector:', error);
      }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Datos del nuevo colector</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Rubro"
          value={field}
          onChangeText={(text) => setField(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Id del colector"
          value={id}
          onChangeText={(text) => setID(text)}
        />
        <Button title="Agregar Colector" onPress={handleSaveCollector} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddCollectorScreen;

