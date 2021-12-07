import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import Header from "../../Template/header";

const ViewSalaryScreen = ({ navigation }) => {
  console.log("> Loading View Salary page");
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
                View Salary
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              justifyContent: "flex-end",
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
        <View style={styles.viewContainer}>
          <Image
            source={require("../../assets/salaryPic/mock-salary.png")}
            style={styles.salaryImg}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Salary");
              }}
              style={{
                marginTop: "10%",
                alignItems: "center",
                justifyContent:"center",
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
                navigation.navigate("EHR");
              }}
              style={{
                marginTop: "10%",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: "80%",
                  borderRadius: 20,
                  backgroundColor: "#50C878",
                  alignItems:'center',
                }}
              >
                <Image
                  source={require("../../assets/tabPic/ehr-icon.png")}
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
                  Contact HR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: "8%",
    width: "100%",
    flex: 12,
    flexDirection: "column",
    alignItems: "center",
  },
  salaryImg: {
    borderColor: "#888888",
    borderWidth: 3,
  },
});

export default ViewSalaryScreen;
