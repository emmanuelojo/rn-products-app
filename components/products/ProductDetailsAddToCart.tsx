import { Feather } from "@expo/vector-icons";
import { Dimensions, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const ProductDetailsAddToCart = () => {
  return (
    <View
      style={{
        height: 100,
        width: width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        backgroundColor: "white",
        borderRadius: 16,
        padding: 16,
      }}
    >
      <View>
        <Text style={{ fontSize: 14, color: "gray" }}>Total Price</Text>
        <Text style={{ fontSize: 14 }}>$83.97</Text>
      </View>

      <View
        style={{
          height: 50,
          width: 200,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          backgroundColor: "brown",
          borderRadius: 32,
        }}
      >
        <Feather name="shopping-bag" size={24} color="white" />
        <Text style={{ color: "white" }}>Add to Cart</Text>
      </View>
    </View>
  );
};

export default ProductDetailsAddToCart;
