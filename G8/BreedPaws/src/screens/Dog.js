import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import axios from "axios";
import Card from "../components/Card";

export default function Dog(props) {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await axios.create().get('https://api.thedogapi.com/v1/images/search?limit=5&has_breeds=1&api_key=live_SFtAMp0uRPSRz5R3F85CL9K9fM9vh88P49tv2IXmGnAjHk4Z4uzkGQ9z0rcc9YDX');
        if (response.status == 200) {
            setData(await response.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data?.map((dog, index) =>
                <Card key={index} url={dog.url} name={dog.breeds[0].name} origin={dog.breeds[0].bred_for}/>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        padding: 10,
    }
});