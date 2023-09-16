/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
import Result from "./src/components/Result";

export default function App() {
  const [name, setName] = useState(null);
  const [salary, setSalary] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (name && salary) calculate();
    else reset();
  }, [name, salary]);

  const calculate = () => {
    reset();

    if (!name) {
      setErrorMessage("Debes ingresar tu nombre");
    } else if (!salary) {
      setErrorMessage("Debes ingresar tu salario base");
    } else {
      const isss = salary * 0.03;
      const afp = salary * 0.04;
      const renta = salary * 0.05;

      setTotal({
        isss: (isss).toFixed(2),
        afp: (afp).toFixed(2),
        renta: (renta).toFixed(2),
        salarioNeto: (salary - (isss + afp + renta)).toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  };

  return (
    <View style={{ width: '100%'}}>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calculadora de salario</Text>
        <Form
          setName={setName}
          setSalary={setSalary}
        />
      </SafeAreaView>
      
      <Result
        name={name}
        salary={salary}
        totalNeto={total}
        errorMessage={errorMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  HeadApp: {
    fontSize: 25,
    fontWeigh: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
