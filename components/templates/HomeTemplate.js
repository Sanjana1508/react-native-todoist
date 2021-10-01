import React from "react";

import HomeOrg from "../organisms/HomeOrg";

const HomeTemplate = (props) => {
  return (
    <HomeOrg
      search={props.search}
      notification={props.notification}
      settings={props.settings}
      tasks={props.tasks}
      mainText={props.mainText}
      subTextOne={props.subTextOne}
      subTextTwo={props.subTextTwo}
      add={props.add}
      icon={props.icon}
      color={props.color}
      buttonText={props.buttonText}
      placeholder={props.placeholder}
      description={props.description}
      calendar={props.calendar}
      calendarColor={props.calendarColor}
      calendarText={props.calendarText}
      inbox={props.inbox}
      inboxColor={props.inboxColor}
      inboxText={props.inboxText}
    />
  );
};

export default HomeTemplate;
