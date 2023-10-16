import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import axios from "axios";
import Card from "../components/Card";

export default function Cat(props) {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await axios.create().get('https://api.thecatapi.com/v1/images/search?limit=5&has_breeds=1&api_key=live_BRgxnSbmzamso3YScK8M0Eyut4xruPnbx7TdO36YFSXxy0Zijz2gsqQx7YFxfnyr');
        if (response.status == 200) {
            setData(await response.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data?.map((cat, index) =>
                <Card key={index} url={cat.url} name={cat.breeds[0].name} origin={cat.breeds[0].origin}/>
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