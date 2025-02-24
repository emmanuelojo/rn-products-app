import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          height: 72,
          backgroundColor: Colors.black,
          borderColor: "none",
          borderRadius: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "white" : "transparent",
                borderRadius: "50%",
              }}
            >
              <Feather name="home" color={focused ? Colors.greenPrimary : "white"} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "white" : "transparent",
                borderRadius: "50%",
              }}
            >
              <Feather name="shopping-bag" color={focused ? Colors.greenPrimary : "white"} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "white" : "transparent",
                borderRadius: "50%",
              }}
            >
              <Feather name="heart" color={focused ? Colors.greenPrimary : "white"} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "white" : "transparent",
                borderRadius: "50%",
              }}
            >
              <Feather name="message-square" color={focused ? Colors.greenPrimary : "white"} size={28} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "white" : "transparent",
                borderRadius: "50%",
              }}
            >
              <Feather name="user" color={focused ? Colors.greenPrimary : "white"} size={28} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
