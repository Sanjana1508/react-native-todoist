import React from "react";

import HomeTemplate from "../components/templates/HomeTemplate";
const HomeScreen = (props) => {
  return (
    <HomeTemplate
      search="search-outline"
      notification="notifications-outline"
      settings="settings-outline"
      tasks="pie-chart-outline"
      mainText="Get a clear view of the day ahead"
      subTextOne="All your tasks that are due today will show up here."
      subTextTwo="Tap + to add a task."
      add="add-circle"
      icon="lightbulb-on-outline"
      color="orange"
      buttonText="Establish a daily habit"
      placeholder={`eg.,Get pastries sun at 9 #Family`}
      description="Description"
      calendar="calendar-blank-outline"
      calendarColor="#1dbf43"
      calendarText="Today"
      inbox="envelope-open-o"
      inboxColor="#1dbf43"
      inboxText="  Inbox"
    />
  );
};

export default HomeScreen;
