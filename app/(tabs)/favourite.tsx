import Screen from "@/components/Screen";
import { ScrollView, Text } from "react-native";

const favourite = () => {
  return (
    <Screen>
      <ScrollView
        style={{
          padding: 16,
        }}
      >
        <Text>Favourites screen </Text>
      </ScrollView>
    </Screen>
  );
};

export default favourite;
