import theme from "@/app/styles/theme";
import React from "react";
import styled from "styled-components/native";
import PlaylistCard from "./playlistCard";

export default function Content() {
  return (
    <Wrapper>
      <Title>Jump back in</Title>
      <ScrollView horizontal={true}>
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </ScrollView>
    </Wrapper>
  );
}

const Wrapper = styled.View``;

const ScrollView = styled.ScrollView`
  min-width: 100%;
  flex-direction: row;
  padding-left: 5px;
`;

const Title = styled.Text`
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 5px;
  color: ${theme.pallete.color};
  font-family: ${theme.pallete.fontFamily};
  font-size: 22px;
`;
