import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback>
          <View style={styles.button}>
            <FontAwesome name={props.icon} size={18} color={props.color} />
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { color: "black", fontSize: 15 },
});

export default IconButton;
