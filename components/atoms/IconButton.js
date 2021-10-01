import React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name={props.icon}
              size={21}
              color={props.color}
            />
            <Text style={styles.buttonText}>{props.buttonText}</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  buttonContainer: {
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  buttonText: { color: "black", fontSize: 15 },
});

export default IconButton;
