import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'react-native';

// Page imports
import Tabs from "./Template/tabs";
import SubmitClaimScreen from './Pages/claim/SubmitClaim';
import EditClaimScreen from './Pages/claim/EditClaim';
import ClaimSuccessScreen from './Pages/claim/ClaimSuccess';
import ViewClaimScreen from './Pages/claim/ViewClaim';
import LoginScreen from "./Pages/Login";
import ClaimScreen from "./Pages/claim/Claim";
import LeaveScreen from "./Pages/leave/Leave";
import SalaryScreen from "./Pages/salary/Salary";
import ViewSalaryScreen from "./Pages/salary/ViewSalary";
import ApplyLeaveScreen from "./Pages/leave/ApplyLeave";
import ReviewLeaveScreen from "./Pages/leave/ReviewLeave";
import LeaveStatusScreen from "./Pages/leave/LeaveStatus";
import EHRScreen from "./Pages/EHR";
import CheckinScreen from "./Pages/checkinout/Checkin";
import CheckoutScreen from "./Pages/checkinout/Checkout";

const Stack =  createStackNavigator();

//Need to nest the tab inside a stack navigatior
const App = () => {
  return (
    
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {true}/>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="TabHome" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="SubmitClaim" component={SubmitClaimScreen} options={{headerShown:false}} />
        <Stack.Screen name="EditClaim" component={EditClaimScreen} options={{headerShown:false}} />
        <Stack.Screen name="ClaimSuccess" component={ClaimSuccessScreen} options={{headerShown:false}} />
        <Stack.Screen name="ViewClaim" component={ViewClaimScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Claim" component={ClaimScreen} options={{headerShown:false}} />
        <Stack.Screen name="Leave" component={LeaveScreen} options={{headerShown:false}} />
        <Stack.Screen name="Salary" component={SalaryScreen} options={{headerShown:false}} />
        <Stack.Screen name="ApplyLeave" component={ApplyLeaveScreen} options={{headerShown:false}} />
        <Stack.Screen name="ReviewLeave" component={ReviewLeaveScreen} options={{headerShown:false}} />
        <Stack.Screen name="LeaveStatus" component={LeaveStatusScreen} options={{headerShown:false}} />
        <Stack.Screen name="ViewSalary" component={ViewSalaryScreen} options={{headerShown:false}} />
        <Stack.Screen name="EHR" component={EHRScreen} options={{headerShown:false}} />
        <Stack.Screen name="Checkin" component={CheckinScreen} options={{headerShown:false}} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;
