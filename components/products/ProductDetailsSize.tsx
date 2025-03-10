import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

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
          backgroundColor: selectedSize === size ? Colors.greenPrimary : "white",
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
          minWidth: 30,
          width: "auto",
          height: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          backgroundColor: colour,
        }}
      >
        <View
          style={{
            minWidth: 15,
            width: "auto",
            height: 15,
            borderRadius: "100%",
            backgroundColor: selectedColour === colour ? "white" : colour,
          }}
        ></View>
      </View>
    </Pressable>
  );

  return (
    <View style={{ flexDirection: "column", gap: 24 }}>
      <View style={{ flexDirection: "column", gap: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Select Size</Text>

        <View style={{ flexDirection: "row", gap: 8, overflow: "scroll" }}>
          {sizes.map((size) => (
            <SizesButton size={size} key={size} />
          ))}
        </View>
      </View>

      <View style={{ flexDirection: "column", gap: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: 600, textTransform: "capitalize" }}>Select Colour:</Text>

          <Text style={{ fontSize: 17, fontWeight: 300, textTransform: "capitalize" }}>{selectedColour}</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 8 }}>
          {colours.map((colour) => (
            <ColoursButton colour={colour} key={colour} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProductDetailsSize;
