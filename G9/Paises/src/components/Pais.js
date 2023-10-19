import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";

const Pais = ({ resultado, shortPais }) => {
    const [info, setInfo] = useState([]);
    const [nombre, setNombre] = useState();
    const [capital, setCapital] = useState();
    const [region, setRegion] = useState();
    const [lengua, setLengua] = useState([]);
    const [area, setArea] = useState();
    const [pais, setPais] = useState(null);

    useEffect(() => {
        setInfo(resultado);
        lengua.length = 0;
        setPais(shortPais);
        Object.values(resultado).map((e) => {
            setNombre(e.nome.abreviado);
            setCapital(e.governo.capital.nome);
            setRegion(e.localizacao.regiao.nome);
            setArea(e.area.total + " " + e.area.unidade.símbolo);

            Object.values(e.linguas).map((l) => {
                lengua.push(l.nome);
            });
        });
    });

    function Flag ({ shortPais }) {
        if (shortPais != null && shortPais.trim() != '') {
            return <Image source={`https://flagcdn.com/h24/${shortPais}.png`} style={{width: 28, height: 24}}/>;
        }
    }

    return (
        <Card>
            <View style={{ flexDirection: "row", justifyContent: "center", }}>

            <Flag shortPais={pais}/>
            <Card.Title style={{ marginLeft:10, }}>{ nombre }</Card.Title>
            </View>
            <Card.Divider/>
            <View style={{ justifyContent: "center" }}>
                <Text>Capital: { capital }</Text>
                <Text>Región: { region }</Text>
                <Text>Lengua: { lengua.toString() }</Text>
                <Text>Área: { area }</Text>
            </View>
        </Card>
    );
};

export default Pais;