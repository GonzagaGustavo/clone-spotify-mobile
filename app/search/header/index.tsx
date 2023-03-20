import React from "react";
import theme from "../../styles/theme";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export default function HeaderSearch() {
  return (
    <>
      <TitleWrapper>
        <Text>Search</Text>
      </TitleWrapper>

      <InputWrapper>
        <InputContainer>
          <IconWrapper>
            <AntDesign name="search1" size={24} color="black" />
          </IconWrapper>

          <Input placeholder="What do you want to listen to?" />
        </InputContainer>
      </InputWrapper>
    </>
  );
}
const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  /* padding-left: 5%; */
  /* padding-right: 5%; */
  margin-bottom: 6%;
`;

const Text = styled.Text`
  font-family: "CircularStd-Medium";
  font-size: 22px;
  color: ${theme.pallete.color};
`;

const InputWrapper = styled.View`
  width: 100%;
  margin: 1% 0;
`;
const InputContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  padding: 1%;
`;
const IconWrapper = styled.View`
  margin: 0 5px;
`;
const Input = styled.TextInput`
  width: 100%;
  font-size: 15px;
  font-family: ${theme.pallete.fontFamily};

  padding: 1%;
`;
