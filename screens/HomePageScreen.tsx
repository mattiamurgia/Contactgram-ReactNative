import React, { useState, useEffect, useMemo, useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { Card } from "../components/Card";
import axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./../Types";
import { Foundation } from "@expo/vector-icons";

export type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    thumbnail: string;
    large: string;
  };
  dob: {
    date: string;
  };
  location: {
    city: string;
    country: string;
  };
  login: { username: string };
};

type Props = {
  route: HomePageScreenRouteProp;
  navigation: HomePageScreenNavigationProp;
};

type HomePageScreenRouteProp = RouteProp<RootStackParamList, "HomePage">;
type HomePageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HomePage"
>;

export const HomePageScreen: React.FC<Props> = ({ navigation }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const memoizedUsers = useMemo(() => users, [users]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=24");
      const { results } = response.data;
      setUsers(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    setInterval(fetchUsers, 120000);
  }, []);

  const handleCardPress = (user: User) => {
    setSelectedUser(user);
    navigation.navigate("Detail", { user });
  };

  return (
    <View style={{ backgroundColor: "#F6EBE6", flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: 15,
          fontWeight: "bold",
        }}
      >
        Contactgram{" "}
        <Foundation name="social-instagram" size={24} color="black" />
      </Text>

      <FlatList
        style={{ flex: 1, backgroundColor: "#F6EBE6" }}
        data={memoizedUsers}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <Card
              name={item.name.first}
              surname={item.name.last}
              username={item.login.username}
              photo={item.picture.large}
              id={index}
              onPress={() => handleCardPress(item)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
