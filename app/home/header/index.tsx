import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export default function Header() {
  return (
    <Wrapper>
      <HeaderText>Good afternoon</HeaderText>
      <IconsWrapper>
        <Ionicons name="ios-notifications-outline" size={24} color="black" />
        <Octicons name="history" size={24} color="black" />
        <AntDesign name="setting" size={24} color={theme.pallete.color} />
      </IconsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 10%;
`;
const HeaderText = styled.Text`
  color: ${theme.pallete.color};
  font-family: "CircularStd-Medium";
  font-size: 25px;
`;

const IconsWrapper = styled.View``;
