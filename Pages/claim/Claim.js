import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import Header from "../../Template/header";

const ClaimScreen = ({ navigation }) => {
  console.log("> Loading ClaimPage");
  
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
                Claims
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
        <View style={styles.claimsRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("SubmitClaim")}>
              <Text style={styles.bodyText}>Submit Claims</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../../assets/homepagePic/claims-icon.png")}
              style={styles.icons}
            />
          </View>
        </View>
        <View style={styles.leavesRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("ViewClaim")}>
              <Text style={styles.bodyText}>View Claims</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../../assets/homepagePic/leave-icon.png")}
              style={styles.icons}
            />
          </View>
        </View>

        <View style={styles.salaryRowContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("EditClaim")}>
              <Text style={styles.bodyText}>Edit Claims</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.drawCircle}>
            <Image
              source={require("../../assets/homepagePic/salary-icon.png")}
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
  lastRowContainer: {
    // DO NOT TOUCH SPACE FOR FOOTER
    marginTop: "1%",
    width: "100%",
    flex: 2,
  }
  /*
  viewContainer: {
    marginTop: "8%",
    width: "100%",
    flex: 12,
    flexDirection: "column",
    alignItems: "center",
  },
  */
}); 

export default ClaimScreen;
