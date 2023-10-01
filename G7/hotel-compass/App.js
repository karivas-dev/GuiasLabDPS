import { StatusBar } from "expo-status-bar";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import * as Font from "expo-font";

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
      <View className="absolute bottom-4 right-0 z-10 backdrop-blur-xl bg-white/60 p-2 rounded">
        <Text className="text-right">Tipo de habitación</Text>
        <Text className="text-lg font-bold text-right">{title}</Text>
      </View>

      <View className="w-48">
        <Image source={img} resizeMode="cover" className="w-44 h-48" />
      </View>
    </View>
  );

  return (
    <ScrollView className={"bg-[#b0d0d6] flex-1"}>
      <View className="items-center justify-center relative mx-5 mt-10 mb-5">
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
          <Text className="mb-5 text-lg font-semibold">Lista de cuartos disponibles</Text>

          <FlatList
            data={rooms}
            horizontal={true}
            renderItem={({ item }) => (
              <Item title={item.title} img={item.img} />
            )}
          />
        </View>

        <View className={"mt-8 self-start"}>
          <Text className="mb-5 text-lg font-semibold">Servicios disponibles</Text>

          <View className=" flex flex-row items-center justify-center space-x-2 space-y-1 flex-wrap">
            <Text className="bg-[#f46e33]/30 backdrop-blur-xl p-2 px-4 rounded-full">
              Estacionamiento
            </Text>
            <Text className="bg-[#69aec3]/60 backdrop-blur-xl p-2 px-4 rounded-full">
              Servicio de habitaciones
            </Text>
            <Text className="bg-[#69aec3]/60 backdrop-blur-xl p-2 px-4 rounded-full">
              Amenidades de Habitación
            </Text>
            <Text className="bg-[#f46e33]/30 backdrop-blur-xl p-2 px-4 rounded-full">
              Pet-Friendly
            </Text>
            <Text className="bg-[#f46e33]/30 backdrop-blur-xl p-2 px-4 rounded-full">
              Seguridad y Protección
            </Text>
            <Text className="bg-[#69aec3]/60 backdrop-blur-xl p-2 px-4 rounded-full">
              Lavandería
            </Text>
          </View>
        </View>

        <View className={"mt-8 flex w-full"}>
          <Text className="mb-5 text-lg font-semibold">Lugares de interés</Text>

          <View className="space-y-2">
            <View className="bg-[#f2eae6]/60 backdrop-blur-xl p-2 px-4 rounded-xl flex-row">
              <Image source={require("./assets/square.png")} className="w-24" />
              <View className="flex ml-2 justify-center shrink">
                <Text className="font-semibold">Plaza las Mariposas</Text>
                <Text className="">
                  Plaza con esculturas de mariposas coloridas y fuentes en el
                  centro.
                </Text>
              </View>
            </View>

            <View className="bg-[#69aec3]/50 backdrop-blur-xl p-2 px-4 rounded-xl flex-row">
              <View className="flex mr-2 justify-center items-end shrink">
                <Text className="font-semibold">Museo de las Estrellas</Text>
                <Text className="text-right">
                  Exhibe obras de arte y objetos de interés relacionados con
                  figuras históricas olvidadas.
                </Text>
              </View>

              <Image
                source={require("./assets/cathedral.png")}
                className="w-24"
              />
            </View>

            <View className="bg-[#f2eae6]/60 backdrop-blur-xl p-2 px-4 rounded-xl flex-row">
              <Image
                source={require("./assets/library.png")}
                className="w-24"
              />
              <View className="flex ml-2 justify-center shrink">
                <Text className="font-semibold">Librería Encantada</Text>
                <Text className="">
                  Una librería repleta de estanterías de libros antiguos y
                  raros.
                </Text>
              </View>
            </View>

            <View className="bg-[#69aec3]/50 backdrop-blur-xl p-2 px-4 rounded-xl flex-row">
              <View className="flex mr-6 justify-center items-end shrink">
                <Text className="font-semibold">Teatro de las Sombras</Text>
                <Text className="text-right">
                Teatro de títeres que ofrece actuaciones nocturnas únicas con sombras y marionetas.
                </Text>
              </View>

              <Image
                source={require("./assets/theather.png")}
                className="w-20"
              />
            </View>

          </View>
        </View>
        <Text className="mt-5">Library icon by Icons8</Text>
        <Text>App develop by Karen Rivas</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
