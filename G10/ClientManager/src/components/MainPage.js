// MainPage.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ClientCard from './ClientCard';
import axios from 'axios';

const MainPage = () => {
    const [clients, setClients] = useState([]);

    const fetchData = async () => {
        const fetchClients = async () => {
            const options = {
                method: 'GET',
                url: 'https://randomuser.me/api/',
                params: {
                    results: 10,
                },
            };

            try {
                const response = await axios.request(options);
                return response.data.results;
            } catch (error) {
                console.error(error);
                return [];
            }
        };

        const data = await fetchClients();
        setClients(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                {clients.map((client, index) => (
                    <ClientCard key={index} client={client} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default MainPage;
