import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

type Props = { navigation: SignInScreenNavigationProp };

export const SignInScreen = ({ navigation }: Props) => {
  const handleSignIn = async () => {
    try {
      const userData = await AsyncStorage.getItem(email);
      if (userData == null) {
        return Alert.alert("Errore Utente", "Utente Non registrato");
      }

      const user = JSON.parse(userData);
      if (user.password !== password) {
        return Alert.alert("Errore Password", "Password non valida");
      }

      navigation.navigate("HomePage");
    } catch (error) {
      return Alert.alert("Errore Accesso", "Accesso non effettuato");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      style={{ flex: 1, paddingTop: 100, backgroundColor: "#F6EBE6" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Login Contactgram{" "}
          <Foundation name="social-instagram" size={24} color="black" />
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>
            Sign In{" "}
            <MaterialCommunityIcons name="connection" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6EBE6",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 200,
  },
  TextInput: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 40,
    padding: 10,
    marginBottom: 10,
  },
  TouchableOpacity: {
    width: "80%",
    height: 50,
    fontSize: 20,
    backgroundColor: "#6c4effc9",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    textAlign: "center",
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
