import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,

  TouchableOpacity,
} from "react-native";


import Header from "../../Template/header";

const CheckinoutScreen = ({ navigation }) => {
  console.log("> Loading Checkedinout");
  const navigate = useNavigation();
  
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
                Check in/out
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingRight: "1%",
            }}
          >
            <Image
              source={require("../../assets/tabPic/home-icon.png")}
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
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkInContainer}>
          <View style={styles.checkInContentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Checkin")}>
              <Text style={styles.bodyText}>Check IN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCheckInCircle}>
            <Image
              source={require("../../assets/checkinPic/sunrise-icon.png")}
              style={styles.sunIcon}
            />
          </View>
        </View>
        <View style={styles.checkOutContainer}>
          <View style={styles.checkOutContentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
              <Text style={styles.bodyText}>Check OUT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCheckOutCircle}>
            <Image
              source={require("../../assets/checkinPic/moon-icon.png")}
              style={styles.moonIcon}
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
  checkInContainer: {
    width: "100%",
    paddingLeft:"5%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkOutContainer: {
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
  drawCheckInCircle: {
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
  drawCheckOutCircle: {
    position: "absolute",
    left: 16,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#5078B9",
    borderWidth: 2,
  },
  sunIcon: {
    width: 90,
    height: 90,
    tintColor: "#50C878",
  },
  moonIcon: {
    width: 90,
    height: 90,
    tintColor: "#5078B9",
  },
  checkInContentContainer: {
    width: "80%",
    height: "50%",
    borderColor: "#000000",
    backgroundColor: "#50C878",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
  },
  checkOutContentContainer: {
    width: "80%",
    height: "50%",
    borderColor: "#000000",
    backgroundColor: "#5078B9",
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

export default CheckinoutScreen;
