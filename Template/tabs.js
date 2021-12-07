import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import HomeScreen from "../Pages/Home";
import CalenderScreen from "../Pages/Calender";
import CheckinoutScreen from "../Pages/checkinout/Checkinout";
import EHRScreen from "../Pages/EHR";
import NewsScreen from "../Pages/News";

const Tab = createBottomTabNavigator();

const CustomCheckinButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#000000",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 10,
          right: 10,
          height: 90,
          backgroundColor: "#50C878",
          borderRadius: 25,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/tabPic/home-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              />
              <Text
                style={{ color: focused ? "#000000" : "#FFFFFF", fontSize: 12 }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/tabPic/calender-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              />
              <Text
                style={{ color: focused ? "#000000" : "#FFFFFF", fontSize: 12 }}
              >
                Calender
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Checkinout"
        component={CheckinoutScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/tabPic/checkin-icon.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomCheckinButton {...props} />,
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/tabPic/news-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              />
              <Text
                style={{ color: focused ? "#000000" : "#FFFFFF", fontSize: 12 }}
              >
                News
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="e-HR"
        component={EHRScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/tabPic/ehr-icon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#000000" : "#FFFFFF",
                }}
              />
              <Text
                style={{ color: focused ? "#000000" : "#FFFFFF", fontSize: 12 }}
              >
                Helpdesk
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",

    shadowOpacity: 0.6,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
