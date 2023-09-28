import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableWithoutFeedback, View, Image, FlatList, Pressable,
} from "react-native";
import ReservationCard from "./src/components/ReservationCard";
import AddIcon from "./src/img/addIcon.png";
import CloseIcon from "./src/img/closeIcon.png";
import Form from "./src/components/Form";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [reservations, setReservations] = useState([]);
  const [shownForm, saveForm] = useState(false);

  useEffect(() => {
    const getStorage = async () => {
      try {
        const reservationsStorage = await AsyncStorage.getItem("reservations");
        if (reservationsStorage)
          setReservations(JSON.parse(reservationsStorage));
      } catch (error) {
        console.log(error);
      }
    };

    getStorage();
  }, []);

  const showForm = () => {
    saveForm(!shownForm);
  };

  const saveStorage = async (reservationsJSON) => {
    try {
      await AsyncStorage.setItem("reservations", reservationsJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback>
      <View className="flex-1 bg-[#444a6d]">
        <View className="my-10 mx-5">
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-2xl font-bold">Reservaciones</Text>
            <Pressable onPress={() => showForm()}>
              {shownForm ? (
                <Image source={CloseIcon} className="w-9 h-12" />
              ) : (
                <Image source={AddIcon} className="w-9 h-12" />
              )}
            </Pressable>
          </View>

          <View className="">
            {shownForm ? (
              <>
                <Form reservations={reservations} setReservations={setReservations}
                  showForm={showForm} saveStorage={saveStorage}
                />
              </>
            ) : (
              <>
                <Text className="text-white my-5 text-center text-base">
                  {reservations.length > 0
                    ? "Reservaciones registradas"
                    : "No hay reservaciones"}
                </Text>
                <FlatList className="mb-52" data={reservations} renderItem={({ item }) => (
                    <ReservationCard reservation={item} />
                  )}
                ></FlatList>
              </>
            )}
          </View>

          <StatusBar style="auto" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
