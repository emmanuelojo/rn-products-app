import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TripleChevron = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#000000" />
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#00000050" />
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#00000025" />
    </View>
  );
};

export default TripleChevron;
