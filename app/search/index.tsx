import React from "react";
import styled from "styled-components/native";
import Layout from "../layout";
import theme from "../styles/theme";

export default function Search() {
  return (
    <Layout>
      <TitleWrapper>
        <Text>Search</Text>
      </TitleWrapper>

      <InputWrapper>
        <InputContainer>
          <Input placeholder="What do you want to listen to?" />
        </InputContainer>
      </InputWrapper>
    </Layout>
  );
}

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 6%;
`;

const Text = styled.Text`
  font-family: "CircularStd-Medium";
  font-size: 22px;
  color: ${theme.pallete.color};
`;

const InputWrapper = styled.View`
  padding: 0 5%;
`;
const InputContainer = styled.View``;
const Input = styled.TextInput`
  background-color: white;
  font-size: 15px;
  font-family: ${theme.pallete.fontFamily};
  border-radius: 4px;
  padding: 1%;
`;
