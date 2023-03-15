import React from "react";
import styled from "styled-components/native";
import theme from "./styles/theme";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Body>{children}</Body>;
}

const Body = styled.View`
  padding-top: 15%;
  flex: 1;
  background-color: ${theme.pallete.background};
  font-family: "CircularStd-Medium";
`;
