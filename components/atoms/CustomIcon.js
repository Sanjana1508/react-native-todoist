import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./CustomHeaderButton";

const CustomIcon = (props) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title="Search" iconName={props.icon} onPress={() => {}} />
    </HeaderButtons>
  );
};

export default CustomIcon;
