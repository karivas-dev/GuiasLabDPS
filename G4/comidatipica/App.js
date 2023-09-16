import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';

const comidasSalvadorenas = [
  {
    id: 1,
    nombre: 'Pupusas',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/pupusas-comida.jpg',
    calorias: 255
  },
  {
    id: 2,
    nombre: 'Yuca Frita',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/yuca-frita-o-salcochada.jpg',
    calorias: 210
  },
  {
    id: 3,
    nombre: 'Sopa de Pata',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/sopa-de-pata.jpg',
    calorias: 360
  },
  {
    id: 4,
    nombre: 'Tamales Salvadoreños',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/tamales-comida.jpg',
    calorias: 275
  },
  {
    id: 5,
    nombre: 'Quesadilla Salvadoreña',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/quesadillas-comida.jpg',
    calorias: 290
  },
  {
    id: 6,
    nombre: 'Enchiladas Salvadoreñas',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/enchiladas-comida-1.jpg',
    calorias: 330
  },
  {
    id: 7,
    nombre: 'Atol de Elote',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/atol-bebida.jpg',
    calorias: 110
  },
  {
    id: 8,
    nombre: 'Riguas',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/riguas-comida.jpg',
    calorias: 245
  },
  {
    id: 9,
    nombre: 'Pastelitos',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/pasteles-fritos.jpg',
    calorias: 185
  },
  {
    id: 10,
    nombre: 'Chilate',
    imagenUrl: 'https://tipsparatuviaje.com/wp-content/uploads/2020/02/chilate-comida.jpg',
    calorias: 110
  }
];


const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Comidas típicas salvadoreñas</Text>
      {comidasSalvadorenas.map((comida) => (
        <Card key={comida.id} containerStyle={styles.card}>
          <View style={styles.cardContent}>
            <Image source={{ uri: comida.imagenUrl }} style={styles.cardImage} />
            
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{comida.nombre}</Text>
              <Text style={styles.cardText}>{comida.calorias} Calorías aprox.</Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  card: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    height: 125,
    width: 150,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
