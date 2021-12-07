import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";
import Header from "../../Template/header";
import db from "../../firebase";
import { auth } from "../../firebase";

class City {
  constructor(name, state, country) {
    this.name = name;
    this.state = state;
    this.country = country;
  }
  toString() {
    return this.name + ", " + this.state + ", " + this.country;
  }
}

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
};

//Main return function
const SubmitClaimScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("Medical");
  const [selectedFile, setFileText] = useState("");
  const [value, onChangeText] = React.useState("Add your Comments");
  var filename = "";

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result.name);
    filename = result.name;
    setFileText(filename);
  };

  //Handle form submission
  const handleClaimSubmit = () => {
    // Add a new document in collection "Claim"
    console.log("Submit Claim Entry point");

    db.collection("Employee")
      .doc(auth.currentUser.uid)
      .collection("Claim")
      .add({
        ClaimId: 20001,
        ClaimStatus: "Pending",
        ClaimType: selectedValue,
        Comments: value,
        FileName: selectedFile,
        ServiceBy: "YK",
      });
  };

  //Go success page
  const goClaimSuccess = () => {
    navigation.navigate("ClaimSuccess");
  };

  //Submit and go sucess page
  const submitAndPass = () => {
    validateInput();
    console.log("Filename:", selectedFile);
    console.log("Comments:", value);
    console.log("ClaimType:", selectedValue);
  };

  //input validation
  const validateInput = () => {
    //Check for the selectedValue Input
    if (!selectedValue.trim()) {
      alert("Please select ClaimType");
      return;
    }
    //Check for the File Input
    if (!selectedFile.trim()) {
      alert("Please attach file");
      return;
    }
    //Checked Successfully
    console.log("Claim pass validation:");
    handleClaimSubmit();
    goClaimSuccess();
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
                Submit Claims
              </Text>
              <Text
                style={{
                  color: "#A00",
                  paddingLeft: "15%",
                }}
              >
                {" "}
                * Fields in this color must be filled
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

        <View style={styles.viewContainer}>
          <Text>1. Please select claim type</Text>
          <View style={styles.pickerStyle}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 330, paddingBottom: "20%" }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
            >
              <Picker.Item label="Medical" value="Medical" />
              <Picker.Item label="Transport" value="Transport" />
              <Picker.Item label="Others" value="Others" />
            </Picker>
          </View>

          <Text
            style={{
              paddingTop: 15,
            }}
          >
            2. Any additional comments(Optional)
          </Text>
          <View
            style={{
              backgroundColor: value,
              borderBottomColor: "#000000",
              borderRightWidth: 1,
              borderLeftWidth: 1,
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }}
          >
            <UselessTextInput
              multiline
              numberOfLines={4}
              onChangeText={(text) => onChangeText(text)}
              value={value}
              style={{ padding: 10 }}
            />
          </View>
          <Text
            style={{
              paddingTop: 15,
              color:"#A00"
            }}
          >
            3. Please upload supporting documents
          </Text>
          <View style={styles.uploadbutton}>
            <TouchableOpacity>
              <Button
                title="Choose file"
                color="#0000FF"
                onPress={pickDocument}
              />
            </TouchableOpacity>
            <Text style={styles.fileNameText}>{selectedFile}</Text>
          </View>
          <View style={styles.lastRowContainer}>
            <Button
              title="Cancel"
              color="#FF0000"
              onPress={() => navigation.navigate("Claim")}
            />
            <View style={styles.cancelbutton}>
              <Button
                title="Submit"
                color="#50C878"
                style={styles.confirmationbutton}
                onPress={() => submitAndPass()}
              />
            </View>
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
  file: {
    color: "black",
    marginHorizontal: 245,
  },
  uploadbutton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 6,
    backgroundColor: "#FFF",
  },
  confirmationbutton: {
    alignContent: "flex-left",
  },
  cancelbutton: {
    paddingLeft: "55%",
  },
  fileNameText: {
    textAlign: "left",
    fontSize: 18,
    paddingBottom: "5%",
    //paddingLeft:"40%",
  },
  firstRowContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  viewContainer: {
    paddingLeft: "10%",
    marginBottom: "40%",
    width: "90%",
    flex: 6,
  },
  pickerStyle: {
    borderWidth: 1,
    borderColor: "#A00",
  },
  lastRowContainer: {
    paddingTop: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default SubmitClaimScreen;
