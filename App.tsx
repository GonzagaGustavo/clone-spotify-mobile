import React from "react";
import { MaterialIcons, Octicons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import Home from "./app/home";
import Library from "./app/library";
import Search from "./app/search";
import theme from "./app/styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "CircularStd-Black": require("./assets/fonts/CircularStd-Black.otf"),
    "CircularStd-Bold": require("./assets/fonts/CircularStd-Bold.otf"),
    "CircularStd-Medium": require("./assets/fonts/CircularStd-Medium.otf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "rgb(0, 0, 0, 0.1)",
            height: 60,
          },
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return focused ? (
                <MaterialIcons
                  name="home-filled"
                  size={size}
                  color={theme.pallete.color}
                />
              ) : (
                <Octicons
                  name="home"
                  size={size - 5}
                  color={theme.pallete.main}
                />
              );
            },
            header: () => null,
          }}
        />
        <Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return focused ? (
                <Ionicons
                  name="search"
                  size={size}
                  color={theme.pallete.color}
                />
              ) : (
                <Ionicons
                  name="search"
                  size={size}
                  color={theme.pallete.main}
                />
              );
            },
            header: () => null,
          }}
        />
        <Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return focused ? (
                <Ionicons
                  name="ios-library"
                  size={size}
                  color={theme.pallete.color}
                />
              ) : (
                <Ionicons
                  name="ios-library-outline"
                  size={size}
                  color={theme.pallete.main}
                />
              );
            },
            header: () => null,
            tabBarLabel: "Your Library",
          }}
        />
      </Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
