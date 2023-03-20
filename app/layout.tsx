import React from "react";
import styled from "styled-components/native";
import theme from "./styles/theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Body>{children}</Body>;
}

const Body = styled.View`
  padding-top: 15%;
  padding-bottom: 330px;
  height: 1000px;
  background-color: ${theme.pallete.background};
  font-family: "CircularStd-Medium";
`;
