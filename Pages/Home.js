import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { auth } from "../firebase";

import Header from "../Template/header";


const HomeScreen = ({ navigation }) => {
  console.log("> Loading Homepage");
  const navigate = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .then(() => {
        console.log("Successfully logged out");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <View style={styles.firstRowContainer}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft:"10%",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "sans-serif-light",
                  color: "#000",
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                }}
              >
                Homepage
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={handleSignOut}
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "1%",
            }}
          >
            <Image
              source={require("../assets/logout-icon.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: "#f00",
              }}
            />
            <Text
              style={{
                color: "#f00",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.claimsRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Claim")}>
              <Text style={styles.bodyText}>Claims</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../assets/homepagePic/claims-icon.png")}
              style={styles.icons}
            />
          </View>
        </View>
        <View style={styles.leavesRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Leave")}>
              <Text style={styles.bodyText}>Leaves</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../assets/homepagePic/leave-icon.png")}
              style={styles.icons}
            />
          </View>
        </View>

        <View style={styles.salaryRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Salary")}>
              <Text style={styles.bodyText}>Salary</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../assets/homepagePic/salary-icon.png")}
              style={styles.icons}
            />
          </View>
        </View>

        <View style={styles.lastRowContainer}>
          {/*DO NOT TOUCH SPACE FOR FOOTER NAV BAR*/}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex:1,
  },
  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
  },
  firstRowContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  claimsRowContainer: {
    width: "100%",
    paddingLeft:"5%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  leavesRowContainer: {
    width: "100%",
    paddingLeft:"5%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  salaryRowContainer: {
    width: "100%",
    paddingLeft:"5%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  lastRowContainer: {
    // DO NOT TOUCH SPACE FOR FOOTER
    marginTop: "1%",
    width: "100%",
    flex: 2,
  },
  drawCircle: {
    position: "absolute",
    left: 16,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#50C878",
    borderWidth: 2,
  },
  icons: {
    width: 90,
    height: 90,
    tintColor: "#50C878",
  },
  contentContainer: {
    width: "80%",
    height: "50%",
    borderColor: "#000000",
    backgroundColor: "#50C878",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
  },
  bodyText: {
    fontSize: 30,
    paddingLeft: "25%",
    fontFamily: "sans-serif-light",
    color: "#FFFFFF",
  },
});

export default HomeScreen;
