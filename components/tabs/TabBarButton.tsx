import { StyleSheet, Pressable } from "react-native";
// import { icon } from "@/constants/Icon";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";

interface Props {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  label: string | any;
}

const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, label }: Props) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(typeof isFocused === "boolean" ? (isFocused ? 0 : 1) : isFocused, { duration: 350 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);

    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
    };
  });

  const animatedTextSyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return { opacity };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        styles.tabBarItem,
        { backgroundColor: isFocused ? "#BBF246" : "transparent", paddingHorizontal: isFocused ? 30 : 0 },
      ]}
    >
      {/* <Animated.View style={animatedIconStyle}>
        {icon[routeName]({
          color: isFocused ? "#192126" : "#FFFFFF",
        })}
      </Animated.View> */}

      <Animated.Text
        style={[{ display: isFocused ? "flex" : "none", color: isFocused ? "#192126" : "#FFFFFF" }, animatedTextSyle]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    width: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 6,
    borderRadius: 43,
  },
});
