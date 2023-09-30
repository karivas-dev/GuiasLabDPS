import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {useFonts} from "expo-font";
import Card from "./src/utils/Card";

export default function App() {
    let [fontsLoaded] = useFonts({
        'Caveat': require("./assets/fonts/CaveatBrush-Regular.ttf")
    });

    const rooms = [{
        title: "Student life",
        img: "./assets/chair-storage.png",
    }, {
        title: "Book lovers",
        img: "./assets/chair-storage.png",
    }]


    const Item = ({title, img}) => (
        <Card title={title} img={img}/>
    );

    return (
        <View className={"bg-[#b0d0d6] flex-1"}>
            <View className="items-center justify-center relative mx-5 my-10">
                <View className={"absolute top-0 left-0 flex-row "}>
                    <Image source={require("./assets/compass.png")} className={"w-14 h-14"}/>
                    <Text className={"ml-2 self-center text-3xl font-[CaveatBrush]"} style={{fontFamily: "Caveat"}}>Hotel
                        Compass</Text>
                </View>

                <View className={"mt-20 self-start"}>
                    <Text>Lista de cuartos disponibles</Text>
                    <ScrollView horizontal>

                    </ScrollView>

                    <FlatList
                        data={rooms}
                        horizontal={true}
                        renderItem={({item}) =>
                            <Item
                                title={item.title}
                                img={item.img}
                            />}
                    />
                </View>
                <StatusBar style="auto"/>
            </View>
        </View>
    )
        ;
}
