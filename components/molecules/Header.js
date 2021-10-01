import React from "react";
import { View, StyleSheet, Text } from "react-native";

import CustomIcon from "../atoms/CustomIcon";

const Header = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.left}>
          <CustomIcon style={styles.notification} icon={props.tasks} />
          <Text style={styles.text}>1/5</Text>
        </View>
        <View style={styles.right}>
          <CustomIcon style={styles.search} icon={props.search} />
          <CustomIcon style={styles.notification} icon={props.notification} />
          <CustomIcon icon={props.settings} />
        </View>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ed0c48",
    paddingTop: 60,
    paddingBottom: 10,
    flexDirection: "row",
  },
  left: { flexDirection: "row", justifyContent: "flex-start" },
  right: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 180,
  },
  search: {},
  notification: {},
  text: {
    color: "white",
  },
});

export default Header;
