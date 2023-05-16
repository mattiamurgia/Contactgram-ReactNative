import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./../Types";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;
type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Detail"
>;

type Props = {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
};

export const DetailScreen: React.FC<Props> = ({ route }) => {
  const { user } = route.params;
  const [isFavourite, setIsFavourite] = useState(false);

  const handleEmailPress = () => {
    if (user) {
      Linking.openURL(`mailto:${user.email}`);
    }
  };

  const handlePhonePress = () => {
    if (user) {
      Linking.openURL(`tel:${user.phone}`);
    }
  };

  if (!user) {
    return null;
  }

  const handleFavouritePress = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <View style={styles.containerContact}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>
          <FontAwesome name="user" size={30} color="#006aff" />{" "}
          {user.name.first} - {user.name.last}
        </Text>

        <Image source={{ uri: user.picture.large }} style={styles.image} />

        <TouchableOpacity onPress={handleFavouritePress} style={{ left: 130 }}>
          <FontAwesome
            name={isFavourite ? "bookmark" : "bookmark-o"}
            size={30}
            color="#6c4eff"
          />
        </TouchableOpacity>

        <View>
          <View style={{ padding: 10, alignItems: "center", marginTop: 20 }}>
            <Text style={styles.description}>
              <FontAwesome name="birthday-cake" size={18} color="#ff9100" />{" "}
              Date of birth: {user.dob.date.slice(0, 10)}
            </Text>
          </View>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.description}>
            <FontAwesome name="globe" size={20} color="#47d568" />{" "}
            {user.location.country} - {user.location.city}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleEmailPress}
          style={styles.containerText}
        >
          <Text style={styles.description}>
            <FontAwesome name="envelope" size={18} color="#cc4949" /> Email:{" "}
            {user.email}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePhonePress}
          style={styles.containerText}
        >
          <Text style={styles.description}>
            <FontAwesome name="phone" size={18} color="#000000" /> Phone:{" "}
            {user.phone}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContact: {
    flex: 1,
    backgroundColor: "#F6EBE6",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "#1cb028",
    borderWidth: 5,
  },
  title: {
    padding: 10,
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    bottom: 30,
  },
  containerText: {
    padding: 10,
    alignItems: "center",
  },
  description: {
    fontSize: 18,
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
