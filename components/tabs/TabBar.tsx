import { View, StyleSheet, Dimensions } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarButton from "./TabBarButton";
import Animated, { FadeInDown } from "react-native-reanimated";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { width } = Dimensions.get("window");

  return (
    <Animated.View
      entering={FadeInDown.delay(200).duration(1000).springify()}
      style={{
        position: "absolute",
        left: 10,
        right: 10,
        height: 64,
        bottom: 10,
        flexDirection: "row",
        gap: width < 500 ? 20 : 40,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#192126",
        paddingVertical: 16,
        paddingHorizontal: 15,
        borderRadius: 32,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            label={label}
          />
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 10,
    right: 10,
    height: 64,
    bottom: 10,
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#192126",
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 32,
  },
});
