import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

import Header from "../Template/header";


const NewsTitle = ({ children, numberOfLines = 2, size = 18}) => {
  return (
      <Text 
          numberOfLines={numberOfLines} 
          style={{fontWeight: 'bold', fontSize: size, textDecorationLine: "underline",}}
      >
          {children}
      </Text>
  );
};

const SubtitleNews = ({ children, numberOfLines = 3, size = 15 }) => {
  return (
      <Text 
          numberOfLines={numberOfLines} 
          style={{ fontSize: size }}
      >
          {children}
      </Text>
  );
};

const NewsScreen = ({ navigation }) => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Header/>
      </View>
      <View style={styles.body}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.newsContainer, {marginVertical: 15}}>
          <Image source={require('../assets/newsPic/covidbanner.jpg')} style={styles.image}/>
          <View style={styles.contentContainer}>
              <NewsTitle>Company COVID19 Update</NewsTitle>
              <SubtitleNews>Due to the increase of COVID19 cases around Singapore, the company has decided to impose measures to maintain a safe working environment.</SubtitleNews>
          </View>
        </View>
        <View style={styles.newsContainer, {marginVertical: 15}}>
          <Image source={require('../assets/newsPic/salary.jpg')} style={styles.image}/>
          <View style={styles.contentContainer}>
              <NewsTitle>Salary Review Next Month</NewsTitle>
              <SubtitleNews>With the rapid changes in the economy, the company plans to review it's employees' salaries to show appreciation for the work they've done.</SubtitleNews>
          </View>
        </View>
        <View style={styles.newsContainer, {marginVertical: 15}}>
          <Image source={require('../assets/newsPic/bcp.jpg')} style={styles.image}/>
          <View style={styles.contentContainer}>
              <NewsTitle>Business Continuity Plans</NewsTitle>
              <SubtitleNews>As the COVID situation progresses, the company has decided to make changes to its BCP in different departments.</SubtitleNews>
          </View>
        </View>
        <View style={styles.newsContainer, {marginVertical: 15}}>
          <Image source={require('../assets/newsPic/covidbanner.jpg')} style={styles.image}/>
          <View style={styles.contentContainer}>
              <NewsTitle>Company COVID19 Update</NewsTitle>
              <SubtitleNews>Due to the increase of COVID19 cases around Singapore, the company has decided to impose measures to maintain a safe working environment.</SubtitleNews>
          </View>
        </View>
        </ScrollView>
        </View>
        <View style={styles.lastRowContainer}>
          {/*DO NOT TOUCH SPACE FOR FOOTER NAV BAR*/}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#fff",
  },
  header:{
    flex:1,
  },
  newsContainer:{
    backgroundColor: "#fff",
    width: '100%',
    overflow: 'hidden',

  },
  image:{
    width: '100%',
    height: 100,
    borderColor:"#000",
    borderWidth:1,
  },
  contentContainer:{
    padding: 5,
    borderWidth:2,
    borderColor:"#CCC"
  },
  scrollView:{
    marginHorizontal: 10,
  },
  body: {
    flex: 5,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
  },
  lastRowContainer: {
    width: "100%",
    flex: 1,
  },
});

export default NewsScreen;
