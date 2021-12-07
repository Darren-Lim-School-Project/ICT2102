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

const LeavesScreen = ({ navigation }) => {
  console.log("> Loading Salary page");
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
                Salary (Past 3 months)
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

        <View style={styles.secondRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("ViewSalary")}>
              <Text style={styles.bodyText}>Nov 2021</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../../assets/salaryPic/salary-icon.png")}
              style={styles.icons}
            />
          </View>
        </View>
        <View style={styles.thirdRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("ViewSalary")}>
              <Text style={styles.bodyText}>Oct 2021</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../../assets/salaryPic/salary-icon.png")}
              style={styles.icons}
            />
          </View>
        </View>

        <View style={styles.fourthRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("ViewSalary")}>
              <Text style={styles.bodyText}>Sept 2021</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../../assets/salaryPic/salary-icon.png")}
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
    backgroundColor: "#FFFFFF",
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
  secondRowContainer: {
    width: "100%",
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thirdRowContainer: {
    width: "100%",
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  fourthRowContainer: {
    width: "100%",
    flex: 3,
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

export default LeavesScreen;
