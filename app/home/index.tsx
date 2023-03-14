import React from "react";
import styled from "styled-components/native";
import Layout from "../layout";
import theme from "../styles/theme";

export default function Home() {
  return (
    <Layout>
      <HeaderText>Good afternoon</HeaderText>
    </Layout>
  );
}

const HeaderText = styled.Text`
  color: ${theme.pallete.color};
  font-family: "CircularStd-Medium";
  font-size: 25px;
`;
