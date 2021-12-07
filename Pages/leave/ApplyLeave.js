import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import CalenderPicker from "../../Components/CalendarPicker";

import moment from "moment";

import { Picker } from "@react-native-picker/picker";

import { auth } from "../../firebase";
import Header from "../../Template/header";
import db from "../../firebase";
import { FlatList } from "react-native-gesture-handler";

const ApplyLeaveScreen = ({ navigation }) => {
  const onScreenLoad = () => {
    getRemainingLeave();
  };

  useEffect(() => {
    onScreenLoad();
  }, []);

  console.log("> Loading apply leave page");

  const Init = [
    {
      id: 1,
      value: "",
      visible: false,
    },
    {
      id: 2,
      value: "",
      visible: false,
    },
  ];

  const [onLoadRemainingLeave, setRemainingLeave] = useState("");
  const [editableDaysInput, setEditableDays] = useState(false);
  const [noOfDays, setNoOfDays] = useState();
  const [selectedLeaves, setSelectedLeaves] = useState("Annual Leave");
  const [isDateVisible, setIsDateVisible] = React.useState(false);
  const [Data, SetData] = useState(Init);
  //selectedLeaves, onLoadRemainingLeave, Data, noOfDays
  const [review, setReview] = useState([
    {
      leaveChoice: "",
      remainingLeave: "",
      startDate: "",
      endDate: "",
      numOfDays: "",
    },
  ]);

  useEffect(() => {
    setReviewState();
  }, [noOfDays]);

  useEffect(() => {
    setReviewState();
  }, [selectedLeaves]);

  let initial = new Date(Date.now() + 3600 * 1000 * 25);

  // handles DateConfirmation
  const handleDateConfirm = (data, index) => {
    let temp = [...Data];
    temp[index].value = moment(data).format("DD/MM/YYYY");
    temp[index].visible = false;
    SetData(temp);
    console.log("handleDateConfirm Date[0]: " + Data[0].value);
    console.log("handleDateConfirm Date[1]: " + Data[1].value);

    if (Data[0].value != "" && Data[1].value != "") {
      let diff = moment(Data[1].value, "DD/MM/YYYY").diff(
        moment(Data[0].value, "DD/MM/YYYY")
      );
      let duration = moment.duration(diff);
      let conversionDay = diff / 86400000;
      if (conversionDay < 0) {
        setNoOfDays(conversionDay);
      } else {
        setNoOfDays(conversionDay + 1);
      }
    } else if (Data[1].value == "") {
      console.log("handleDateConfirm empty Data[1].value");
    }
  };

  const setReviewState = () => {
    const overallState = [
      {
        leaveChoice: selectedLeaves,
        remainingLeave: onLoadRemainingLeave,
        startDate: Data[0].value,
        endDate: Data[1].value,
        numOfDays: noOfDays,
      },
    ];
    setReview(overallState);
  };

  // Executed onCancel
  const onCancel = (index) => {
    let temp = [...Data];
    temp[index].visible = false;
    SetData(temp);
  };

  // Executed when user opens a modal
  const onOpen = (index) => {
    try {
      let temp = [...Data];
      temp[index].visible = true;
      SetData(temp);
      console.log(temp);
      console.log("onOpen Date[0]: " + Data[0].value);
      console.log("onOpen Date[1]: " + Data[1].value);
    } catch (error) {
      console.log(error);
    }
  };

  const submitLeaveApplication = () => {
    if (Data[0].value == "" || Data[1].value == "") {
      alert("Please select your Start Date and End Date before you proceed!");
    } else if (noOfDays <= 0) {
      alert("End Date must be the same or later than Start Date!");
      return false;
    } else if (
      moment(new Date().getDate(), "DD/MM/YYYY").diff(
        moment(Data[0].value, "DD/MM/YYYY")
      ) > 0
    ) {
      console.log(
        "current Date: " + moment(new Date().getDate(), "DD/MM/YYYY")
      );
      console.log("start Date: " + moment(Data[0].value, "DD/MM/YYYY"));
      console.log(
        "difference: " +
          moment(new Date().getDate(), "DD/MM/YYYY").diff(
            moment(Data[0].value, "DD/MM/YYYY")
          )
      );
      alert(
        "Start Date must start from " +
          moment(new Date().getDate(), "DD/MM/YYYY").format("DD/MM/YYYY") +
          "!"
      );
      return false;
    } else if (noOfDays > onLoadRemainingLeave) {
      alert("You only have " + onLoadRemainingLeave + " days of leave left!");
      return false;
    } else {
      setReviewState();
      return true;
    }
  };

  const getRemainingLeave = () => {
    console.log("Display Remaining Leave");

    db.collection("Employee")
      .doc(auth.currentUser.uid)
      .get()
      .then((documentSnapshot) => documentSnapshot.data().remainingLeave)
      .then((remainingLeave) => {
        setRemainingLeave(remainingLeave);
      });
  };

  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      {/* Start of body */}
      <View style={styles.body}>
        {/* First Row, 'Apply Leaves' and home button */}
        <View style={styles.firstRowContainer}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
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
                  paddingLeft: "10%",
                }}
              >
                Apply Leaves
              </Text>
              <Text style = {{
              color: "#A00",
              paddingLeft: "15%",
            }}> * Fields in this color must be filled</Text>
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
        {/* End of first row */}

        <View style={styles.typeRowContainer}>
          <Text
            style={{
              paddingRight: "5%",
            }}
          >
            Type of Leaves:
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#A00",
            }}
          >
            <Picker
              selectedValue={selectedLeaves}
              style={{ height: 38, width: 190 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLeaves(itemValue)
              }
            >
              <Picker.Item label="Annual Leave" value="Annual Leave" />
              <Picker.item label="Medical Leave" value="Medical Leave" />
              <Picker.item label="Emergency Leave" value="Emergency Leave" />
            </Picker>
          </View>
        </View>

        {/* End of type row */}

        <View style={styles.remainingRowContainer}>
          <Text style = {{ paddingRight: 15,}}>Remaining Leaves: </Text>
          <View
            style={{
              width: 50,
              height: 38,
              borderWidth: 1,
              borderColor: "#000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              {onLoadRemainingLeave}{" "}
            </Text>
          </View>
        </View>

        {/* End of remaining row */}

        <View style={styles.dateRange}>
          <Text
            style={{
              fontSize: 15,
              textDecorationLine: "underline",
              fontWeight: "bold",
            }}
          >
            Date range selection
          </Text>
        </View>

        {/* End of Date Range */}

        <View style={styles.startRowContainer}>
          <Text
            style={{
              paddingRight: 19,
            }}
          >
            From:{" "}
          </Text>
          <View
            style={{
              height: 38,
              width: 100,
              borderWidth: 1,
              borderColor: "#A00",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{Data[0].value}</Text>
          </View>
          <View
            style={{
              paddingLeft: "5%",
            }}
          >
            <CalenderPicker
              isDateVisible={Data[0].visible}
              mode={"date"}
              handleDateConfirm={(data) => handleDateConfirm(data, 0)}
              onCancel={() => onCancel(0)}
            />
            <Button title="Select Start Date" onPress={() => onOpen(0)} />
          </View>
        </View>

        {/* End of from date row */}

        <View style={styles.endRowContainer}>
          <Text
            style={{
              paddingRight: 38,
            }}
          >
            To:{" "}
          </Text>
          <View
            style={{
              height: 38,
              width: 100,
              borderWidth: 1,
              borderColor: "#A00",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{Data[1].value} </Text>
          </View>
          <View
            style={{
              paddingLeft: "5%",
            }}
          >
            <CalenderPicker
              isDateVisible={Data[1].visible}
              mode={"date"}
              handleDateConfirm={(data) => handleDateConfirm(data, 1)}
              onCancel={() => onCancel(1)}
            />
          </View>
          <Button title="Select End Date" onPress={() => onOpen(1)} />
        </View>

        {/* End of to date row */}

        <View style={styles.noOfDaysRowContainer}>
          <Text
            style={{
              paddingRight: 15,
            }}
          >
            No of Days:
          </Text>
          <View
            style={{
              width: 40,
              height: 38,
              borderWidth: 1,
              borderColor: "#000",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
            >
              {noOfDays}
            </Text>
          </View>
        </View>

        {/* End of No of days row */}
      </View>

      <View style={styles.viewContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Leave");
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

        <FlatList
          data={review}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (submitLeaveApplication()) {
                  navigation.navigate("ReviewLeave", item);
                }
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
                  alignItems: "center",
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
                  Review
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
    flex: 2,
  },
  body: {
    flex: 10,
    backgroundColor: "#FFF",
  },
  firstRowContainer: {
    marginTop: "1%",
    width: "100%",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  typeRowContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  dateRange: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: "10%",
  },
  remainingRowContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: "5%",
    alignItems: "center",
  },
  startRowContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5%",
  },
  endRowContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5%",
  },
  noOfDaysRowContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "5%",
  },
  viewContainer: {
    marginTop: "10%",
    width: "100%",
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ApplyLeaveScreen;
