import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  name: keyof typeof MaterialIcons.glyphMap; // keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

const IconButton = ({ style, size = 24, color = "black", name, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 40,
          width: 40,
          backgroundColor: "#ffffff",
          borderRadius: 99999,
          alignItems: "center",
          justifyContent: "center",
        },
        style,
      ]}
    >
      <MaterialIcons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
