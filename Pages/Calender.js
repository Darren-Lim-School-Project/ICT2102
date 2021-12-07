// Agenda Example Code

import React, { useImperativeHandle, Component, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import Header from "../Template/header";

// @ts-expect-error
import { Agenda } from 'react-native-calendars';
import moment from 'moment';

const INITIAL_DATE = moment().format("YYYY-MM-DD");

function rsvp(name, nativeID) {
  Alert.alert(
    "RSVP",
    "Will you be attending " + name + "?",
    [
      {
        text: "No",
        style: "cancel"
      },
      {
        text: "Yes",
        onPress: () => rsvpSuccess(name)
      }
    ]
  );
}

function rsvpSuccess(name) {
  Alert.alert(
    name,
    "See you there!",
  )
}

export default class AgendaScreen extends React.Component {

  state = {
    items: {
      '2021-11-11': [{ name: 'Monthly Townhall', subtext: '3:00pm - 4:00pm'}],
      '2021-11-15': [{ name: 'Marketing Team Lunch', subtext: '12:00pm - 1:00pm' }],
      '2021-11-19': [{ name: 'Weekly Team Meeting', subtext: '10:00am - 11:00am' }],
      '2021-11-26': [{ name: 'Weekly Team Meeting', subtext: '10:00am - 11:00am' }, { name: 'Monthly Team Dinner', subtext: '8:00pm - 10:00pm' }],
      '2021-11-30': [{ name: 'Off-boarding for Marcus (Internship)', subtext: '4:30am - 5:00pm' }],
      '2021-12-3': [{ name: 'Weekly Team Meeting', subtext: '10:00am - 11:00am' }],
      '2021-12-6': [{ name: 'On-boarding for Jeremy (Internship)', subtext: '9:30am - 11:00am' }],
      '2021-12-10': [{ name: 'Weekly Team Meeting', subtext: '10:00am - 11:00am' }],
      '2021-12-17': [{ name: 'Weekly Team Meeting', subtext: '10:00am - 11:00am' }],
      '2021-12-24': [{ name: 'Weekly Team Meeting', subtext: '10:00am - 11:00am' }, { name: 'Approved Leave Jenny', subtext: '9:00am - 6:00pm' }, { name: 'Christmas Lunch', subtext: '12:00pm - 2:00pm' }],
      '2021-12-27': [{ name: 'Approved Leave Sarah', subtext: '9:00am - 6:00pm' }],
      '2021-12-31': [{ name: 'Happy Friday', subtext: 'Don\'t forget to leave at 5:00pm!' }],
      '2022-01-01': [{ name: 'Happy New Year!', subtext: 'New Year, New Goals!' }],
      '2022-01-03': [{ name: 'New Year Lunch!', subtext: '12:00pm - 2:00pm' }],
      '2022-01-07': [{ name: 'Happy Friday', subtext: 'Don\'t forget to leave at 5:00pm!' }],
      // Empty dates have to be hard coded as the code reads from this array if there is any events
      // If there is no events, the method to renderEmptyDates does not create any view
      '2021-11-12': [], '2021-11-13': [], '2021-11-14': [], '2021-11-16': [], '2021-11-17': [], '2021-11-18': [], '2021-11-20': [],
      '2021-11-21': [], '2021-11-22': [], '2021-11-23': [], '2021-11-24': [], '2021-11-25': [], '2021-11-27': [], '2021-11-28': [],
      '2021-11-29': [], '2021-12-01': [], '2021-12-02': [], '2021-12-04': [], '2021-12-05': [], '2021-12-07': [], '2021-12-08': [],
      '2021-12-09': [], '2021-12-11': [], '2021-12-12': [], '2021-12-13': [], '2021-12-14': [], '2021-12-15': [], '2021-12-16': [],
      '2021-12-18': [], '2021-12-19': [], '2021-12-20': [], '2021-12-21': [], '2021-12-22': [], '2021-12-23': [], '2021-12-25': [],
      '2021-12-26': [], '2021-12-28': [], '2021-12-29': [], '2021-12-30': [],
    },
    markedDates: {
      '2021-11-11': { marked: true },
      '2021-11-15': { marked: true },
      '2021-11-19': { marked: true },
      '2021-11-26': { marked: true },
      '2021-11-30': { marked: true },
      '2021-12-3': { marked: true },
      '2021-12-6': { marked: true },
      '2021-12-10': { marked: true },
      '2021-12-17': { marked: true },
      '2021-12-24': { marked: true },
      '2021-12-27': { marked: true },
      '2021-12-31': { marked: true },
      '2022-01-01': { marked: true },
      '2022-01-03': { marked: true },
      '2022-01-07': { marked: true },
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <View
            style={{
              paddingLeft: "30%",
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "sans-serif-light",
                color: "#000",
                fontWeight: 'bold',
              }}>Upcoming Events</Text>
          </View>
          <Agenda
            testID={'agenda'}
            items={this.state.items}
            selected={INITIAL_DATE}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            renderItem={this.renderItem.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            showClosingKnob={true}
            markedDates={this.state.markedDates}
            pastScrollRange={50}
            theme={{
              selectedDayBackgroundColor: '#50C878',
              selectedDayTextColor: '#ffffff',
              dotColor: '#50C878',
              todayTextColor: '#50C878',
              agendaTodayColor: '#50C878',
            }}
          />
          <View style={styles.footer}>
          </View>
        </View>
      </View>
    );
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name, item.subtext)}
      >
        <View style={styles.container}>
          <View style={styles.firstRowContainer}>
            <View
              style={{
                flex: 1,
              }}
            >
              <View>
                <Text>
                  {item.name}
                </Text>

              </View>
            </View>
            <TouchableOpacity
              onPress={() => rsvp(item.name, item.id)}
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "1%",
                paddingLeft: "1%",
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
                backgroundColor: "#64c850",
              }}>
              <Text>
                RSVP
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondRowContainer}>
            <View>
              <Text>
                {item.subtext}
              </Text>
            </View>
          </View>
        </View>

      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <TouchableOpacity
        style={styles.item}>
        <Text>There is no event today!</Text>
      </TouchableOpacity>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    borderColor: 'black',
    borderWidth: 1,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 6,
    backgroundColor: "white",
    marginTop: 0,
  },
  calendar: {
    marginTop: 100,
  },
  footer: {
    flex: .22,
    backgroundColor: 'white',
  },
  alert: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  button: {
    alignItems: "flex-end"
  },
  firstRowContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  secondRowContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
});