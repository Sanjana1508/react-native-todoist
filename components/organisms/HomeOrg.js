import React, { useState } from "react";
import { View } from "react-native";

import HomeContent from "../molecules/HomeContent";
import Header from "../molecules/Header";
import AddTask from "../molecules/AddTask";

const HomeOrg = (props) => {
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <View>
      <Header
        search={props.search}
        notification={props.notification}
        settings={props.settings}
        tasks={props.tasks}
      />
      <HomeContent
        mainText={props.mainText}
        subTextOne={props.subTextOne}
        subTextTwo={props.subTextTwo}
        add={props.add}
        icon={props.icon}
        color={props.color}
        buttonText={props.buttonText}
        showAdd={() => setIsAddMode(!isAddMode)}
      />
      <AddTask
        visible={isAddMode}
        placeholder={props.placeholder}
        description={props.description}
        calendar={props.calendar}
        calendarColor={props.calendarColor}
        calendarText={props.calendarText}
        inbox={props.inbox}
        inboxColor={props.inboxColor}
        inboxText={props.inboxText}
        next={() => setIsAddMode(!isAddMode)}
      />
    </View>
  );
};

export default HomeOrg;
