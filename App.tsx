import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SignUpScreen } from "./screens/SignUpScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { HomePageScreen } from "./screens/HomePageScreen";
import "react-native-gesture-handler";
import { NavigationProvider } from "./navigation";
import { DetailScreen } from "./screens/DetailScreen";




export default function App() {
  return (
    <>
      <NavigationProvider />
    </>
  );
}

