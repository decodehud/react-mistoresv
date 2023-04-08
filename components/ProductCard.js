import { View, Text, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ({ title, category, image, price, description }) {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();

  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl pb-8">
        <Image
          source={{ uri: image }}
          className="w-full h-72 "
          style={{ resizeMode: "contain" }}
        />
      </View>

      <View className="mt-5 space-y-2">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>

        <View>
          <AntDesign
            name="minuscircle"
            size={24}
            color={colorScheme === "light" ? "black" : "white"}
          />
        </View>

        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  );
}
