import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";


import Header from "../../Template/header";
import { auth } from "../../firebase";
import db from "../../firebase";

const LeaveStatusScreen = ({ route, navigation }) => {

    var dataArray = [{ endDate: "12/11/2021", leaveID: 999, noOfDays: 3, startDate: "12/11/2021", status: 1, types: "Annual Leave" }];
    //var dataArray = [];
    var status = "";
    var cs, ct, c, fn, sb;

    const FlatListBasics = () => {
        loadLeaveStatus();
        return (
            <View style={styles.listcontainer}>
                <FlatList style={{
                    flexGrow: 0,
                    borderColor: "black",
                    borderWidth: 2,
                    borderRadius: 6
                }}
                    data={dataArray}
                    renderItem={({ item }) => {

                        if (item.status == 0) {
                            status = "Pending";
                        } else if (item.status == 1) {
                            status = "Rejected"
                        } else if (item.status == 2) {
                            status = "Accepted"
                        } else {
                            status = "Contact HR"
                        }

                        return (
                            <Text style={styles.item}>
                                Leave Types: {item.types}{"\n"}
                                Start Date: {item.startDate}{"\n"}
                                End Date: {item.endDate}{"\n"}
                                No of Days: {item.noOfDays}{"\n"}
                                Status: {status}{"\n"}
                            </Text>
                        )
                    }
                    }
                />
            </View>
        );
    }

    async function loadLeaveStatus() {
        console.log("saveToDB entry");
        console.log("auth.currentUser.uid: " + auth.currentUser.uid);

        const [documents, setDocuments] = useState();


        const events = db.collection('Employee')
            .doc(auth.currentUser.uid)
            .collection('Leave')

        const snapshot = await events.get();

        snapshot.forEach(doc => {
            dataArray.push(doc.data());
            console.log(doc.id, '==> ', doc.data());
        })

        console.log("dataArray: " + dataArray.length);
        //console.log("dataArray[10].leaveID: " + dataArray[0].leaveID);
    }

    const navigate = useNavigation();

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
                                    textDecorationLine: 'underline',
                                    fontWeight: 'bold',
                                }}
                            >
                                Leave Status
                            </Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate("Home") }}
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

                <FlatListBasics />

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
                            alignItems: 'center',
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
        backgroundColor: "#fff",
    },
    header: {
        flex: 1,
    },
    body: {
        flex: 6,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        flexDirection: "column",
    },
    firstRowContainer: {
        marginTop: "1%",
        width: "100%",
        flex: 1,
        alignItems: "stretch",
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    claimsRowContainer: {
        width: "100%",
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    leavesRowContainer: {
        width: "100%",
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    salaryRowContainer: {
        width: "100%",
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    lastRowContainer: {
        // DO NOT TOUCH SPACE FOR FOOTER
        marginTop: "1%",
        width: "100%",
        flex: 2,
        backgroundColor: "#fff",
    },
    drawCircle: {
        position: "absolute",
        left: 16,
        width: 120,
        height: 120,
        borderRadius: 70,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#fc036f",
        borderWidth: 2,
    },
    icons: {
        width: 85,
        height: 85,
        tintColor: "#8fcbbc",
    },
    contentContainer: {
        width: "81%",
        height: "70%",
        borderColor: "#fc036f",
        backgroundColor: "#eee",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    listcontainer: {
        marginTop: "0%",
        width: "85%",
        flex: 6,
        marginLeft: "4%",
        height: "60%",
    },
    item: {
        marginTop: "10%",
        padding: 30,
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        elevation: 8
    },
    viewContainer: {
      marginTop: "10%",
      width: "100%",
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    }
});

export default LeaveStatusScreen;
