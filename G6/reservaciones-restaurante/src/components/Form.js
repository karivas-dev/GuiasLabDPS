import { View, ScrollView, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import shortid from "react-id-generator";
import { RadioButton, Text } from "react-native-paper";
import DatePicker from "react-native-modern-datepicker";

const Form = ({ reservations, setReservations, showForm, saveStorage }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [zone, setZone] = useState("No fumadores");

  const addReservation = () => {
    if (name.trim() === "" || quantity.trim === "" || zone.trim === "") {
      Alert.alert("Error", "Todos los campos son obligatorios", [
        {
          text: "OK",
        },
      ]);
      return;
    }

    const reservation = { name, date, quantity, zone };
    reservation.id = shortid();

    const reservationTemp = [...reservations, reservation];
    setReservations(reservationTemp);

    saveStorage(JSON.stringify(reservationTemp));
    showForm(false);
    setName("");
    setQuantity("");
  };

  return (
    <>
      <Text className="text-white text-center my-5 text-base">
        Datos para nueva reservación
      </Text>
      <ScrollView className="mb-52">
        <View className="space-y-6 p-5 rounded-[20px] bg-[#54587e]">
          <View>
            <Text className="text-white font-bold">Nombre</Text>
            <TextInput
              className="text-white border-b border-slate-500"
              onChangeText={(text) => setName(text)}
            />
          </View>

          <View>
            <Text className="text-white font-bold">Cantidad de personas</Text>
            <TextInput
              className="text-white border-b border-slate-500"
              onChangeText={(text) => setQuantity(text)}
            />
          </View>

          <View>
            <Text className="text-white font-bold mb-2">Elige tu zona</Text>
            <RadioButton.Group
              onValueChange={(value) => setZone(value)}
              value={zone}
            >
              <View className="flex-row items-center">
                <RadioButton
                  value="No fumadores"
                  color="#fff"
                  uncheckedColor="white"
                />
                <Text className="text-white ml-2">No fumadores</Text>
              </View>

              <View className="flex-row items-center">
                <RadioButton
                  value="Fumadores"
                  color="#fff"
                  uncheckedColor="white"
                />
                <Text className="text-white ml-2">Fumadores</Text>
              </View>
            </RadioButton.Group>
          </View>

          <DatePicker
            onSelectedChange={(date) => setDate(date)}
            className="rounded-[20px] bg-slate-300"
          />

          <Pressable className="pt-2" onPress={() => addReservation()}>
            <Text className="bg-[#71c7e8] text-center py-4 rounded-full text-white uppercase font-bold">
              Añadir nueva reservación
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default Form;
