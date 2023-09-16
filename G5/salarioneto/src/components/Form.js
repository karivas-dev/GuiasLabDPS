import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../utils/colors";
export default function Form(props) {
  const { setName, setSalary } = props;
  return (
    <View style={styles.viewForm}>
      <View>
        <TextInput
          placeholder="Nombre"
          style={styles.input}
          onChange={(e) => setName(e.nativeEvent.text)}
        />
      </View>
      
      <View>
        <TextInput
          placeholder="Salario base"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setSalary(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR,
    borderRadius: 30,
    height: 150,
    justifyContent: "center",
  },
  
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: "100%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  }
});
