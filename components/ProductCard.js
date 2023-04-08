import { View, Text, Image, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ({ title, category, image, price, description }) {
  const [count, setCount] = useState(1);
  const { colorScheme } = useColorScheme();

  function addmore() {
    setCount(count + 1);
  }
  function addmenos() {
    setCount(count - 1);
  }

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

        <View className="flex-row justify-between my-3">
          <View className="flex-row gap-3 items-center">
            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={addmenos}
            />

            <Text className="text-xl dark:text-white">{count}</Text>

            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={addmore}
            />
          </View>
          <Text className="font-extrabold text-2xl dark:text-white">
            ${price * count}
          </Text>
        </View>

        <Text
          numberOfLines={3}
          className="text-sm text-black/60 dark:text-white/70 dark:text-white"
        >
          {description}
        </Text>

        <TouchableOpacity className=" flex-row justify-center  w-10/12 self-center bg-black rounded-full  dark:bg-white">
          <Text className="text-white dark:text-black font-bold p-3">
            Add to card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
