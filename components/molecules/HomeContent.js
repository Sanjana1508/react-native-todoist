import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";

import IconButton from "../atoms/IconButton";
import { Ionicons } from "@expo/vector-icons";

const HomeContent = (props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.maintext}>{props.mainText}</Text>
          <Text style={styles.subtext} numOfLines={2}>
            {props.subTextOne}
          </Text>
          <Text style={styles.subtext}>{props.subTextTwo}</Text>
        </View>

        <IconButton
          buttonText={props.buttonText}
          icon={props.icon}
          color={props.color}
        />
      </View>
      <View style={styles.add}>
        <TouchableNativeFeedback>
          <Ionicons
            name={props.add}
            size={50}
            color="red"
            onPress={props.showAdd}
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
  },
  maintext: { color: "#a6a09f", fontSize: 18, paddingBottom: 3 },
  subtext: {
    paddingHorizontal: 7,
    color: "#a6a09f",
    fontSize: 14,
    textAlign: "center",
    paddingBottom: 5,
  },
  add: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: 30,
  },
});

export default HomeContent;
