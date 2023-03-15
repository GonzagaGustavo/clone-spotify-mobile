import React from "react";
import styled from "styled-components/native";
import Layout from "../layout";
import theme from "../styles/theme";
import Header from "./header";
import LastPlaylistCard, { Playlist } from "./lastPlaylistCard";

const data: Playlist[] = [
  {
    name: "Hip Hop",
    img: "hiphop.jpeg",
  },
  {
    name: "This Is Drake",
    img: "thisisdrake.jpeg",
  },
  {
    name: "On Repeat",
    img: "onrepeat.jpg",
  },
  {
    name: "Liked Songs",
    img: "liked.png",
  },
  {
    name: "Electronic",
    img: "eletronic.jpeg",
  },
  {
    name: "Till We Drop",
    img: "tillwedrop.jpeg",
  },
];

export default function Home() {
  return (
    <Layout>
      <Header />
      <LastPlaylistsWrapper>
        {data.map((playlist, index) => (
          <LastPlaylistCard playlist={playlist} key={index} />
        ))}
      </LastPlaylistsWrapper>
    </Layout>
  );
}

const LastPlaylistsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
