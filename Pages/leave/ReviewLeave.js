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
import { auth } from "../../firebase";
import db from "../../firebase";

const ReviewLeaveScreen = ({ route, navigation }) => {

  const { leaveChoice, remainingLeave, startDate, endDate, numOfDays } = route.params;

  const saveToDB = () => {
    console.log("saveToDB entry");
    console.log("auth.currentUser.uid: " + auth.currentUser.uid);
    db.collection('Employee')
      .doc(auth.currentUser.uid)
      .collection('Leave')
      .add({
        leaveID: 1,
        types: leaveChoice,
        startDate: startDate,
        endDate: endDate,
        noOfDays: numOfDays,
        status: 0
      });

    db.collection('Employee')
      .doc(auth.currentUser.uid)
      .update({
        remainingLeave: remainingLeave - numOfDays
      });
  }

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
                Review Leave
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => { navigation.navigate("Home") }}
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

        <View style={styles.typeRowContainer}>
          <Text>Types of Leave: {leaveChoice}</Text>
          <Text>Remaining Leave: {remainingLeave}</Text>
          <Text>Start Date: {startDate}</Text>
          <Text>End Date: {endDate}</Text>
          <Text>Number of Days: {numOfDays}</Text>
          {/* <TouchableOpacity onPress={() =>
            saveToDB()
          }>
            <Text>
              Submit Leave
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.viewContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ApplyLeave");
          }}
          style={{
            //marginTop: "5%",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Image
            source={require("../../assets/back-icon.png")}
            style={{
              width: 30,
              height: 30,
              tintColor: "#F00",
            }}
          />
          <Text
            style={{
              color: "#F00",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            saveToDB();
            alert('Leave application has been submitted. Please give 3-5 business days for the application be processed.')
            navigation.navigate("Home");
          }}
          style={{
            //marginTop: "10%",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              width: "70%",
              borderRadius: 20,
              backgroundColor: "#50C878",
              alignItems: 'center',
            }}
          >
            <Image
              source={require("../../assets/leavePic/review-icon.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: "#FFFFFF",
              }}
            />
            <Text
              style={{
                color: "#FFFFFF",
              }}
            >
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    flexDirection: "column",
  },
  firstRowContainer: {
    marginTop: "1%",
    width: "100%",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  viewContainer: {
    marginTop: "10%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  typeRowContainer: {
    flex: 6,
    paddingLeft: "5%",
  }
});

export default ReviewLeaveScreen;
