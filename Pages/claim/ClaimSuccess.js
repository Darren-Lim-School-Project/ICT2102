import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../Template/header";

const ClaimSuccessScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
      <View style={styles.header}>
          <Header/>
      </View>
      <View style = {styles.body}>
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
            <View style = {styles.box}>
            <View style={styles.drawSubmitCircle}>
                <Image
                    source={require("../../assets/checkinPic/tick-icon.png")}
                    style={styles.submitIcons}
                  />
            </View>
                <View style = {styles.innerText}>
                    <Text style={{fontWeight:"bold"}}>Claim Submitted Successfully!</Text>
                </View>
            </View>
        </View>
       
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    header:{
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
    box:{
      flex:6,
      justifyContent:"center",
      //paddingBottom:"40%"
    },submitIcons: {
      width: 90,
      height: 90,
      tintColor: "#FFF",
      //paddingTop:"40%"
    },
    drawSubmitCircle: {
      position: "absolute",
      left: 40,
      width: 130,
      height: 130,
      borderRadius: 65,
      backgroundColor: "#50C878",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#000000",
      borderWidth: 2,
    },
    innerText:{
      paddingTop:"40%",
      
    }
  });
  

  export default ClaimSuccessScreen;