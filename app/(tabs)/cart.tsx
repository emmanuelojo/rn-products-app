import Screen from "@/components/Screen";
import { Dimensions, ScrollView, Text } from "react-native";

const { height } = Dimensions.get("window");

const cart = () => {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flexDirection: "column",
          gap: 24,
          position: "relative",
          minHeight: height,
          padding: 16,
        }}
      >
        <Text>Cart screen </Text>
      </ScrollView>
    </Screen>
  );
};

export default cart;
