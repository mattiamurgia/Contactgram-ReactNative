import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./../Types";
import { HomePageScreen } from "../screens/HomePageScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { DetailScreen } from "../screens/DetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

export const NavigationProvider: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: true,
            headerTitle: "Sign up",
            tabBarIcon: () => <AntDesign name="team" size={20} color="black" />,
            tabBarShowLabel: true,
            tabBarLabel: "Sign Up",
          }}
        />

        <Tab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            headerShown: true,
            headerTitle: "Sign In",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="connection"
                size={24}
                color="black"
              />
            ),
            tabBarShowLabel: true,
            tabBarLabel: "Sign In",
          }}
        />

        <Tab.Screen
          name="HomePage"
          component={HomePageScreen}
          options={{
            headerShown: true,
            headerTitle: "Home Page",
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
            tabBarShowLabel: true,
            tabBarLabel: "Home Page",
          }}
        />

        <Tab.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: true,
            headerTitle: "Detail",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={24} color="black" />
            ),
            tabBarShowLabel: true,
            tabBarLabel: "Detail",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
