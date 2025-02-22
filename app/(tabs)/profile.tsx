import Screen from "@/components/Screen";
import { ScrollView, Text } from "react-native";

const profile = () => {
  return (
    <Screen>
      <ScrollView
        style={{
          padding: 16,
        }}
      >
        <Text>Profile screen </Text>
      </ScrollView>
    </Screen>
  );
};

export default profile;
