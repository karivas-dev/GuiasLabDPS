// ClientCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClientCard = ({ client }) => {
    const { title, first, last } = client.name;
    const { postcode, country, state, city } = client.location;

    return (
        <View style={styles.card}>
            <Text>{title} {first} {last}</Text>
            <Text>Email: {client.email}</Text>
            <Text>Teléfono personal: {client.cell}</Text>
            <Text>Teléfono de trabajo: {client.phone}</Text>
            <Text>Dirección: {city}, {state}, {country}</Text>
            <Text>Código postal: {postcode}</Text>
            {
                (client.registered.age > 18) ?
                    (<Text style={styles.potentialTag}>Cliente potencial</Text>) :
                    (<Text style={styles.notPotentialTag}>Cliente no potencial</Text>)
            }
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        margin: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    potentialTag: {
        backgroundColor: 'green',
        color: 'white',
        padding: 4,
        borderRadius: 4,
        marginTop: 8,
    },
    notPotentialTag: {
        backgroundColor: 'red',
        color: 'white',
        padding: 4,
        borderRadius: 4,
        marginTop: 8,
    },
});

export default ClientCard;
