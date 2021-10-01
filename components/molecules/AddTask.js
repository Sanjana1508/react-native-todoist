import React, { useState } from "react";
import { View, TextInput, StyleSheet, Modal } from "react-native";
import IconButton from "../atoms/IconButton";
import FontIconButton from "../atoms/FontIconButton";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const AddTask = (props) => {
  const [inputTodo, setInputTodo] = useState(null);
  const [inputDesc, setInputDesc] = useState("");

  return (
    <Modal
      animationType="slide"
      visible={props.visible}
      presentationStyle="formSheet"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          onChangeText={(todo) => setInputTodo(todo)}
        />
        <TextInput
          placeholder={props.description}
          style={styles.input}
          onChangeText={(desc) => setInputDesc(desc)}
        />
        <View style={styles.buttonContainer}>
          <IconButton
            icon={props.calendar}
            color={props.inboxColor}
            buttonText={props.calendarText}
          />
          <FontIconButton
            icon={props.inbox}
            color={props.inboxColor}
            buttonText={props.inboxText}
          />
        </View>
        <View>
          <View style={styles.iconContainer}>
            <View>
              <Ionicons
                style={styles.icon}
                name="ios-pricetag-outline"
                size={23}
                color="grey"
              />
            </View>
            <View>
              <SimpleLineIcons
                style={styles.icon}
                name="flag"
                size={22}
                color="grey"
              />
            </View>
            <View>
              <Ionicons
                style={styles.icon}
                name="alarm-outline"
                size={24}
                color="grey"
              />
            </View>
            <View style={styles.next}>
              {inputTodo != null ? (
                <Ionicons
                  name="arrow-up-circle"
                  size={27}
                  color="red"
                  onPress={() => {
                    if (inputTodo) {
                      props.next();
                      setInputTodo(null);
                    }
                  }}
                />
              ) : (
                <Ionicons name="arrow-up-circle" size={27} color="lightcoral" />
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 10,
  },
  input: {
    fontSize: 18,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    paddingTop: 100,
    paddingBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
  },
  next: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 240,
  },
  icon: {
    paddingRight: 10,
  },
});

export default AddTask;
