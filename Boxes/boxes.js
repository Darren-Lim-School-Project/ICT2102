import React from "react"
import { StyleSheet,Text ,View , Button, Navigate, Alert} from "react-native"
import { withNavigation } from "@react-navigation/native";

const Boxes = ({ navigation }) => {
       return(
           <View style = {styles.container}>
               <View style = {styles.box}>
                    <View style = {styles.innerText}>
                        <Text>Check In</Text>
                        <Button
                        title="Go to Home"
                        onPress={() => Alert.alert('Pressed')}/>
                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerText}>
                        <Text>Company News</Text>
                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerText}>
                        <Text>View Calender</Text>
                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerText}>
                        <Text>View Leaves</Text>
                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerText}>
                        <Text>View Claims</Text>
                    </View>
                </View>
                <View style = {styles.box}>
                    <View style = {styles.innerText}>
                        <Text> Box 6</Text>
                    </View>
                </View>
           </View>
           
       );
   };


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: '85%',
        padding: 5,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:"#rgba(255, 255, 255, 0.5)",
        flexDirection:'column',
        justifyContent:'space-between',
        flex:5
    },
    box: {
        width:'100%',
        height:'15%',
        padding: 5,
        backgroundColor:'#rgba(255, 0, 255, 1.0)',
    },
    innerText: {
        position:'absolute',
        top: "5%",
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
}) 

export default Boxes;