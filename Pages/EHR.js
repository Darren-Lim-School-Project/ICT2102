import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
  Alert,
} from "react-native";

import Header from "../Template/header";

const onPressMobileNumber = (number) => {
  let phoneNumber = "";
  if (Platform.OS === "android") {
    phoneNumber = `tel:${number}`;
  } else {
    phoneNumber = `telprompt:${number}`;
  }
  Linking.openURL(phoneNumber);
};

const EHRScreen = ({ navigation }) => {
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
              paddingLeft: "10%",
              justifyContent: "center",
            }}
          >
            <Text style={styles.helpdeskText}>Helpdesk</Text>
          </View>
        </View>
        <View style={styles.contentBody}>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>
              How do I Change my password?
            </Text>
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={styles.answerText}>
              You can change your password by sending a request to
              itsupport@tabcc.org
            </Text>
          </View>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>
              When will my claims be approved?
            </Text>
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={styles.answerText}>
              Claims are usually approved on a case-by-case basis within 7
              working days.
              {"\n\n"}The reimbursement will then be credited within 2 to 3
              business days after your application has been approved.
            </Text>
          </View>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>
              How do I suggest a company event?
            </Text>
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={styles.answerText}>
              You can either discuss your idea with your supervisor, or drop an
              email to ehr@tabcc.org!
            </Text>
          </View>
          <View style={styles.questionTextContainer}>
            <Text style={styles.questionText}>I still have some doubts!</Text>
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={styles.answerText}>
              You may try chatting with Sally, our HR chatbot, or contact the HR
              department at 6666 6666
            </Text>
          </View>
        </View>

      <View style = {styles.buttonContainer}>
        <View style= {styles.chatbotButtonContainer}>
          <TouchableOpacity onPress = {() => Alert.alert("Opps!","Chatbot is under maintenance! \n\nIf urgent, do contact HR at: 6666 6666!")}  style = {{alignItems:'center'}}>
            <Image style ={{
              height:40,
              width:40,
              tintColor: "#5078B9",
            }} source = {require("../assets/ehrPic/robot-icon.png")}/>
            <Text style = {{ color: "#5078B9"}}> Sally (Chatbot) </Text>
          </TouchableOpacity>
        </View>
        <View style= {styles.callButtonContainer}>
        <TouchableOpacity onPress = {() => onPressMobileNumber("66666666")} style = {{alignItems:'center'}}>
            <Image style ={{
              height:40,
              width:40,
              tintColor: "#F00",
            }} source = {require("../assets/ehrPic/phone-icon.png")}/>
            <Text style = {{ color: "#F00"}}> HR Hotline </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {{flex:2,}}></View>
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
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  firstRowContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
  },
  helpdeskText: {
    fontSize: 20,
    color: "#000",
    fontFamily: "sans-serif-light",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  contentBody: {
    flex: 7,
    backgroundColor: "#F00",
  },
  questionTextContainer: {
    width: "100%",
    height: 40,
    backgroundColor: "#DDD",
    justifyContent: "center",
  },
  questionText: {
    paddingLeft: 10,
    fontSize: 18,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  answerTextContainer: {
    flex:1,
    backgroundColor: "#EEE",
  },
  answerText: {
    paddingLeft: 10,
    fontSize: 15,
  },
  buttonContainer: {
    flex: 2,
    flexDirection:"row",
  },
  callButtonContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  chatbotButtonContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default EHRScreen;
