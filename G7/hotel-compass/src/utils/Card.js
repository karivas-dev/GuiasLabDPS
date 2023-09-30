import {Image, Text, View} from "react-native";

const Card = (props) => {
    const { title, img } = props;

    return (
        <View className={"bg-[#f2eae6] p-6 rounded-xl"}>

            <Text>{ img }</Text>
        </View>
    );
}

export default Card;