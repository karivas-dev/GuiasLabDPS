import { Text, View } from "react-native";

const ReservationCard = ({ reservation }) => {
  return (
    <View className="p-5 mt-3 rounded-[20px] bg-[#54587e]">
      <View className="flex-row">
        <Text className="text-white font-semibold">Nombre: </Text>
        <Text className="text-white">{reservation.name}</Text>
      </View>

      <View className="flex-row">
        <Text className="text-white font-semibold">Fecha y hora: </Text>
        <Text className="text-white">{reservation.date}</Text>
      </View>

      <View className="flex-row">
        <Text className="text-white font-semibold">Cantidad de personas: </Text>
        <Text className="text-white">{reservation.quantity}</Text>
      </View>

      <View className="flex-row">
        <Text className="text-white font-semibold">Zona: </Text>
        <Text className="text-white">{reservation.zone}</Text>
      </View>
    </View>
  );
};

export default ReservationCard;
