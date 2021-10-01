import React from "react";
import { StyleSheet } from "react-native";

import Header from "../molecules/Header";

const HeaderOrg = (props) => {
  return (
    <Header
      search={props.search}
      notification={props.notification}
      settings={props.settings}
      tasks={props.tasks}
    />
  );
};

const styles = StyleSheet.create({});

export default HeaderOrg;
