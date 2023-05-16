import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

type Props = { navigation: SignUpScreenNavigationProp };

export const SignUpScreen = ({ navigation }: Props) => {
  const handlePress = async () => {
    try {
      const existingUser = await AsyncStorage.getItem(email);
      if (existingUser !== null) {
        return showMessage({
          message: "Errore",
          description: "Email esistente o Password Errata",
          type: "danger",
          icon: "danger",
        });
      }
      const newUser = { email: email, password: password };
      await AsyncStorage.setItem(email, JSON.stringify(newUser));
      showMessage({
        message: "Modulo Inviato",
        description: "Modulo Inviato",
        type: "success",
        icon: "success",
        duration: 2000,
      });
      setTimeout(() => {
        navigation.navigate("SignIn");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePressLogin = () => {
    navigation.navigate("SignIn");
  };

  const [profileImage, setProfileImage] = useState<string>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [dateOfBirth, setDataBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationality, setNationality] = useState("");

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{ flex: 1, paddingTop: 5, backgroundColor: "#F6EBE6" }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Sign Up Contactgram{" "}
          <Foundation name="social-instagram" size={24} color="black" />
        </Text>
      </View>

      <View style={styles.container}>
        {profileImage && (
          <Image source={{ uri: profileImage }} style={styles.image} />
        )}
        <Text onPress={selectImage} style={styles.imageButton}>
          Upload Photos <Feather name="upload-cloud" size={15} color="black" />
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Surname"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
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
        <TextInput
          style={styles.TextInput}
          placeholder="City"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChangeText={(text) => setDataBirth(text)}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.TextInput}
          placeholder="Nationality"
          value={nationality}
          onChangeText={(text) => setNationality(text)}
        />
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.TouchableOpacity} onPress={handlePress}>
          <Text style={styles.buttonText}>
            Sign Up <AntDesign name="team" size={20} color="black" />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={handlePressLogin}
        >
          <Text style={styles.buttonText}>
            Login{" "}
            <AntDesign
              name="login"
              size={18}
              color="black"
              style={{ marginLeft: "10%" }}
            />
          </Text>
        </TouchableOpacity>
      </View>

      <FlashMessage position="center" />
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
  },
  TextInput: {
    width: "80%",
    height: 50,
    borderWidth: 1.2,
    borderColor: "#000000",
    borderRadius: 40,
    padding: 8,
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
    marginTop: 10,
    textAlign: "center",
    padding: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageButton: {
    width: "auto",
    textAlign: "center",
    height: "auto",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: "black",
    borderColor: "black",
    borderWidth: 2,
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 5,
    borderColor: "black",
    borderWidth: 3,
  },
});
