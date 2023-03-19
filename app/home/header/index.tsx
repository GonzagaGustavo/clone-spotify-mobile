import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export default function Header() {
  return (
    <Wrapper>
      <HeaderText>Good afternoon</HeaderText>
      <IconsWrapper>
        <Ionicons
          name="ios-notifications-outline"
          size={26}
          color={theme.pallete.color}
        />
        <Octicons name="history" size={26} color={theme.pallete.color} />
        <AntDesign name="setting" size={26} color={theme.pallete.color} />
      </IconsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 6%;
`;
const HeaderText = styled.Text`
  color: ${theme.pallete.color};
  font-family: "CircularStd-Medium";
  font-size: 24px;
`;

const IconsWrapper = styled.View`
  width: 35%;
  flex-direction: row;
  justify-content: space-around;
`;
