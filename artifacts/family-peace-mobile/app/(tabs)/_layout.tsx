import { Feather, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View, useColorScheme } from "react-native";

import { useColors } from "@/hooks/useColors";

export default function TabLayout() {
  const colors = useColors();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const isIOS = Platform.OS === "ios";
  const isWeb = Platform.OS === "web";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: isIOS ? "transparent" : colors.background,
          borderTopWidth: isWeb ? 1 : 0,
          borderTopColor: colors.border,
          elevation: 0,
          ...(isWeb ? { height: 84 } : {}),
        },
        tabBarBackground: () =>
          isIOS ? (
            <BlurView
              intensity={100}
              tint={isDark ? "dark" : "light"}
              style={StyleSheet.absoluteFill}
            />
          ) : isWeb ? (
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: colors.background },
              ]}
            />
          ) : null,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
          letterSpacing: 0.3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) =>
            isIOS ? (
              <Ionicons name="home-outline" size={size} color={color} />
            ) : (
              <Feather name="home" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="rooms"
        options={{
          title: "Rooms",
          tabBarIcon: ({ color, size }) =>
            isIOS ? (
              <Ionicons name="bed-outline" size={size} color={color} />
            ) : (
              <Feather name="square" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          tabBarIcon: ({ color, size }) =>
            isIOS ? (
              <Ionicons name="images-outline" size={size} color={color} />
            ) : (
              <Feather name="image" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: "Experience",
          tabBarIcon: ({ color, size }) =>
            isIOS ? (
              <Ionicons name="sparkles-outline" size={size} color={color} />
            ) : (
              <Feather name="star" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) =>
            isIOS ? (
              <Ionicons name="mail-outline" size={size} color={color} />
            ) : (
              <Feather name="mail" size={size} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
