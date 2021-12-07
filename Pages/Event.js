import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import { auth } from "../firebase";

import Header from "../Template/header";

const EventScreen = ({ navigation }) => {
  const navigate = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <Text> Event Screen </Text>
        <Button title="Click here" onPress={() => alert("Clicked")} />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button title="Logout" onPress={handleSignOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#000",
  },
  header:{
    flex:1,
  },
  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});

export default EventScreen;
