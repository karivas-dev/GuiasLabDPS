import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Image, Text} from 'react-native-elements';

export default function (props) {
    return (
        <Card key={ props.id } containerStyle={styles.card}>
            <View style={styles.cardContent}>
                <Image source={ props.url } style={styles.cardImage}/>
                <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>{ props.name }</Text>
                    <Text style={styles.cardText}>{ props.origin }</Text>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
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
        height: 100,
        width: 125,
        marginRight: 20
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardText: {
        fontSize: 16,
    },
});