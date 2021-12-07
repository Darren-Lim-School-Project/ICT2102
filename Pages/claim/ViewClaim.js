import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,

  TouchableOpacity,
  FlatList,
} from "react-native";

import Header from "../../Template/header";
import db from "../../firebase";
import { auth } from "../../firebase";


var cs,ct,c,fn,sb;

const SetClaimData = () => {
  db.collection('Employee')
  .doc(auth.currentUser.uid)
  .collection('Claim')
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      if(doc.data().ClaimId == 20002){
        cs= doc.data().ClaimStatus;
        ct = doc.data().ClaimType;
        c = doc.data().Comments;
        fn = doc.data().FileName;
        sb = doc.data().ServiceBy;
      }
    })
  });  
};

const FlatListBasics  = () => {
  SetClaimData();
  return (
    <View style={styles.listcontainer}>
      <FlatList style={{
        flexGrow:0,
        borderColor:"black",
        borderWidth:2,
        borderRadius:6
      }}
        data={[
          {key: '1', claimstatus:"Pending", claimtype:"Others",comments:"WGT",filename:"Unknown.png",serviceby:"DARREN from HR"},
          {key: '2', claimstatus:"Pending", claimtype:"Transport",comments:"HUEHUE",filename:"Unknown.png",serviceby:"JX from HR"},
          {key: '3', claimstatus:"Pending", claimtype:"Medical",comments:"KO KEN",filename:"Unknown.png",serviceby:"KEN from HR"},
          {key: '4', claimstatus:cs, claimtype:ct,comments:c,filename:fn,serviceby:sb}
        ]}
        renderItem={({item}) => <Text style={styles.item}>
          ClaimType: {item.claimtype}{"\n"}
          Status: {item.claimstatus}{"\n"}
          Comments: {item.comments}{"\n"}
          Filename: {item.filename}{"\n"}
          ServiceBy: {item.serviceby}{"\n"}
        </Text>}
      />
    </View>
  );
}


const ViewClaimScreen = ({ navigation }) => {
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
                View Claim
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
        <FlatListBasics/>
      </View>
      <View style={styles.viewContainer}>
              <TouchableOpacity
              onPress={() => {
                navigation.navigate("Claim");
              }}
              style={{
                //marginTop: "5%",
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
    item: {
      marginTop:"10%",
      padding: 30,
      backgroundColor:'#FFFFFF',
      fontSize: 16,
      elevation: 8
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    header: {
      flex: 1,
    },
    firstRowContainer: {
      marginTop: "1%",
      width: "100%",
      flex: 1,
      alignItems: "stretch",
      justifyContent: "space-evenly",
      flexDirection: "row",
    },
    text: {
      fontSize: 42,
    },
    listcontainer: {
      marginTop: "0%",
      width: "85%",
      flex: 6,
      marginLeft: "4%",
      height:"60%",
    },
    viewContainer: {
      marginTop: "10%",
      width: "100%",
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    }

  });
  
  export default ViewClaimScreen;