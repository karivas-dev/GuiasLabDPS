import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import firebase from '../src/firebase';

const db = getFirestore(firebase);

const CollectorListScreen = () => {
  const [collectors, setCollectors] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'collectors'), (snapshot) => {
      const collectorData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCollectors(collectorData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colectores registrados</Text>
      <FlatList
        data={collectors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.collectorItem}>
            <Text style={styles.collectorName}>{item.name}</Text>
            <Text>{`Rubro: ${item.field}`}</Text>
            <Text>{`ID: ${item.id}`}</Text>
          </View>
        )}
      />
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
    marginVertical: 20,
  },
  collectorItem: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  collectorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CollectorListScreen;
