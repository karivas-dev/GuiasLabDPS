import { StatusBar } from "expo-status-bar";
import { FlatList, Image, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { useState } from "react";

export default function App() {
  async function loadCustomFont() {
    await Font.loadAsync({
      Caveat: require("./assets/fonts/CaveatBrush-Regular.ttf"),
    });
  }

  loadCustomFont();

  const rooms = [
    {
        title: "Students life",
        img: require("./assets/chair-storage.png"),
    },
    {
        title: "Chill on sofa",
        img: require("./assets/small-sofa.png"),
    },
    {
      title: "Dinning with urself",
      img: require("./assets/eating-table.png"),
    },
    {
      title: "4 Office",
      img: require("./assets/desktop.png"),
    },
    {
      title: "Book lovers",
      img: require("./assets/bookshelf-sofa.png"),
    },
  ];

  const Item = ({ title, img }) => (
    <View className="bg-[#f2eae6] rounded-2xl p-6 mr-3">
      <View className="absolute bottom-4 right-4 z-10 backdrop-blur-xl bg-white/60 p-2 rounded">
        <Text className="">Tipo de habitación</Text>
        <Text className="text-lg font-bold text-right">{title}</Text>
      </View>

      <View className="w-48">
        <Image source={img} resizeMode="cover" className="w-44 h-48"/>
      </View>
    </View>
  );

  return (
    <View className={"bg-[#b0d0d6] flex-1"}>
      <View className="items-center justify-center relative mx-5 my-10">
        <View className={"absolute top-0 left-0 flex-row "}>
          <Image
            source={require("./assets/compass.png")}
            className={"w-14 h-14"}
          />
          <Text
            className={"ml-2 self-center text-3xl font-[CaveatBrush]"}
            style={{ fontFamily: "Caveat" }}
          >
            Hotel Compass
          </Text>
        </View>

        <View className={"mt-20 self-start h-80"}>
          <Text>Lista de cuartos disponibles</Text>

          <FlatList
            data={rooms}
            horizontal={true}
            renderItem={({ item }) => (
              <Item title={item.title} img={item.img} />
            )}
            className="mt-4"
          />
        </View>

        <View className={"mt-8 self-start"}>
          <Text>Servicios disponibles</Text>
        </View>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
