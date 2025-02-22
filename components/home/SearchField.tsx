// import Colors from "@/constants/Colors";
// import FontSize from "@/constants/FontSize";
// import Spacing from "@/constants/Spacing";
// import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

const SearchField = () => {
  return (
    <View
      style={{
        height: 48,
        flexDirection: "row",
        flex: 1,
        gap: 8,
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 12,
        borderRadius: 12,
        marginVertical: 20,
      }}
    >
      <Feather name="search" size={24} color="rgba(25,33,38,0.5)" />
      <TextInput
        placeholder="Search"
        placeholderTextColor="rgba(25,33,38,0.5)"
        style={{
          fontSize: 14,
          fontFamily: "Inter_400Regular",
          width: "80%",
          outline: "none",
          color: "rgba(25,33,38,0.5)",
        }}
      />
    </View>
  );
};

export default SearchField;
