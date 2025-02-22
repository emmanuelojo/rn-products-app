import Screen from "@/components/Screen";
import { ScrollView, Text } from "react-native";

const chats = () => {
  return (
    <Screen>
      <ScrollView
        style={{
          padding: 16,
        }}
      >
        <Text>Chats screen </Text>
      </ScrollView>
    </Screen>
  );
};

export default chats;
