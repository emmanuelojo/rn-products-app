import { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";

const ProductDetailsSize = () => {
  const sizes = ["s", "m", "l", "xl", "xxl", "xxxl"];
  const colours = ["brown", "red", "green", "blue"];
  const [selectedSize, setSelectedSize] = useState("s");
  const [selectedColour, setSelectedColour] = useState("");

  type SizesButtonProps = {
    size: string;
  };

  type ColoursButtonProps = {
    colour: string;
  };

  const SizesButton = ({ size }: SizesButtonProps) => (
    <Pressable onPress={() => setSelectedSize(size)} style={{ marginRight: 16 }}>
      <View
        style={{
          minWidth: 40,
          width: "auto",
          height: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 8,
          borderRadius: 10,
          backgroundColor: selectedSize === size ? "brown" : "white",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            color: selectedSize === size ? "white" : "black",
            textTransform: "uppercase",
          }}
        >
          {size}
        </Text>
      </View>
    </Pressable>
  );

  const ColoursButton = ({ colour }: ColoursButtonProps) => (
    <Pressable onPress={() => setSelectedColour(colour)} style={{ marginRight: 16 }}>
      <View
        style={{
          minWidth: 40,
          width: "auto",
          height: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 8,
          borderRadius: 10,
          backgroundColor: selectedColour === colour ? "brown" : "white",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            textAlign: "center",
            color: selectedColour === colour ? "white" : "black",
            textTransform: "capitalize",
          }}
        >
          {colour}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flexDirection: "column", gap: 24 }}>
      <View style={{ flexDirection: "column", gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Select Size</Text>

        <FlatList
          data={sizes}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <SizesButton size={item} />}
          keyExtractor={(item) => item}
        />
      </View>

      <View style={{ flexDirection: "column", gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 600, textTransform: "capitalize" }}>
          Select Colour: {selectedColour}
        </Text>

        <FlatList
          data={colours}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ColoursButton colour={item} />}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default ProductDetailsSize;
