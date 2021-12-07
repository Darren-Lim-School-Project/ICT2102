import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { auth } from "../firebase";

import db from "../firebase";
const Header = ({ navigation }) => {

  const [onLoadfnameText, setfnameText] = useState("");
  const [onLoaddeptText, setdeptText] = useState("");

  const onScreenLoad = () => {
    getfname();
    getdept();
  };

  useEffect(() => {
    onScreenLoad();
  }, []);

  const getfname = () => {
    console.log("Displaying fname");

    db.collection("Employee")
      .doc(auth.currentUser.uid)
      .get()
      .then((documentSnapshot) => documentSnapshot.data().fname)
      .then((fname) => {
        setfnameText(fname);
      });
  };

  const getdept = () => {
    console.log("Displaying Dept");
    db.collection("Employee")
      .doc(auth.currentUser.uid)
      .get()
      .then((documentSnapshot) => documentSnapshot.data().dept)
      .then((dept) => {
        setdeptText(dept);
      });
  };


  return (
    <View style={styles.header}>
      <View style={styles.profileImgContainer}>
        <TouchableHighlight style={styles.profileImg}>
          <Image
            source={require("../assets/profilePic/a.jpg")}
            style={styles.profileImg}
          />
        </TouchableHighlight>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerfnameText}>Hello {onLoadfnameText} !</Text>
        <Text style={styles.headerdeptText}>Dept: {onLoaddeptText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#50C878", //Color to change
    flexDirection: "row",
  },
  profileImg: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth:2,
    borderColor:"#000",
    alignItems:'center',
    justifyContent:'center',
  },
  headerTextContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerfnameText: {
    fontSize: 20,
    textTransform: "capitalize",
    fontFamily:"sans-serif",
    color:"#000000",
    fontWeight: 'bold',
  },
  headerdeptText: {
    fontSize: 15,
    fontFamily:"sans-serif",
    color:"#000000",
    fontWeight: 'bold',
  },
  profileImgContainer: {
    paddingRight: 15,
    
  },
});

export default Header;
