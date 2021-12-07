import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

import moment from "moment";

import Header from "../Template/header";

const CheckinScreen = ({ navigation }) => {
  const [currentDateWithMoment, setCurrentDateWithMoment] = useState("");

  function getTime() {
    console.log("Retrieving time");
    var dateMoment = moment().format("DD/MM/YYYY hh:mm:ss a");
    setCurrentDateWithMoment(dateMoment);
  }

  useEffect(() => {
    getTime();
  }, []);

  const showLocationAlert = () =>
    Alert.alert("Location", "Location detected: 1 Raffles Quay", [
      {
        text: "OK",
      },
    ]);

  const showCheckedInAlert = () =>
    Alert.alert("Checked In", "Checked In Successful! \n\nHave a great day.\n\nYou'll be redirected to Homepage", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Home"),
      },
    ]);

  console.log("> Loading Checkin Page");
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
              paddingLeft: "10%",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "sans-serif-light",
                  color: "#000",
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                Check In
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
              source={require("../assets/tabPic/home-icon.png")}
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
        <View style={styles.clockRowContainer}>
          <View style={styles.clockContentContainer}>
            <TouchableOpacity
              onPress={getTime}
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/checkinPic/refresh-icon.png")}
                style={styles.refreshIcon}
              />
              <Text style={styles.clockText}>{currentDateWithMoment}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <TouchableOpacity onPress={getTime}>
              <Image
                source={require("../assets/checkinPic/clock-icon.png")}
                style={styles.icons}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.leavesRowContainer}>
          <View style={styles.locationContentContainer}>
            <TouchableOpacity onPress={showLocationAlert}>
              <Text style={styles.bodyText}>1 Raffles Quay</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <TouchableOpacity onPress={showLocationAlert}>
              <Image
                source={require("../assets/tabPic/checkin-icon.png")}
                style={styles.icons}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.submitRowContainer}>
          <View style={styles.submitContentContainer}>
            <TouchableOpacity onPress={showCheckedInAlert}>
              <Text style={styles.bodyText}>Check In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawSubmitCircle}>
            <TouchableOpacity onPress={showCheckedInAlert}>
              <Image
                source={require("../assets/checkinPic/tick-icon.png")}
                style={styles.submitIcons}
              />
            </TouchableOpacity>
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
    flex: 1,
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
  clockRowContainer: {
    width: "100%",
    paddingLeft: "5%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  leavesRowContainer: {
    width: "100%",
    paddingLeft: "5%",
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitRowContainer: {
    width: "100%",
    paddingLeft: "5%",
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
  drawSubmitCircle: {
    position: "absolute",
    left: 16,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FF0000",
    borderWidth: 2,
  },
  icons: {
    width: 90,
    height: 90,
    tintColor: "#50C878",
  },
  submitIcons: {
    width: 90,
    height: 90,
    tintColor: "#FF0000",
  },
  refreshIcon: {
    position: "absolute",
    top: "40%",
    left: "27%",
    width: 20,
    height: 20,
    tintColor: "#000000",
  },

  clockContentContainer: {
    width: "80%",
    height: "70%",
    borderColor: "#000000",
    backgroundColor: "#50C878",
    borderWidth: 0,
    justifyContent: "center",
    paddingLeft: "5%",
    borderRadius: 27,
  },
  locationContentContainer: {
    width: "80%",
    height: "70%",
    borderColor: "#000000",
    backgroundColor: "#50C878",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
  },
  submitContentContainer: {
    width: "80%",
    height: "70%",
    borderColor: "#000000",
    backgroundColor: "#FF0000",
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
  },
  clockText: {
    fontSize: 25,
    paddingLeft: "25%",
    fontFamily: "sans-serif-light",
    color: "#FFFFFF",
  },
  bodyText: {
    fontSize: 30,
    paddingLeft: "25%",
    fontFamily: "sans-serif-light",
    color: "#FFFFFF",
  },
});

export default CheckinScreen;
