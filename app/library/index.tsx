import React from "react";
import styled from "styled-components/native";
import Layout from "../layout";
import theme from "../styles/theme";

export default function Library() {
  return (
    <Layout>
      <Text>Your Library</Text>
    </Layout>
  );
}

const Text = styled.Text`
  font-family: "CircularStd-Medium";
  font-size: 25px;
  color: ${theme.pallete.color};
`;
