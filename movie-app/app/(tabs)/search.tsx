import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants/images";

const search = () => {
  return (
    <View className="flex-1 bg-primary">
      <Image
        className="flex-1 absolute z-0"
        source={images.bg}
        resizeMode="cover"
      />
    </View>
  );
};

export default search;
