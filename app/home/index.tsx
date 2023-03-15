import React from "react";
import styled from "styled-components/native";
import lastPlaylists from "../../assets/images/lastPlaylists";
import Layout from "../layout";
import theme from "../styles/theme";
import Header from "./header";
import LastPlaylistCard, { Playlist } from "./lastPlaylistCard";

const data: Playlist[] = [
  {
    name: "Hip Hop",
    img: lastPlaylists.hiphop,
  },
  {
    name: "This Is Drake",
    img: lastPlaylists.thisisdrake,
  },
  {
    name: "On Repeat",
    img: lastPlaylists.onrepeat,
  },
  {
    name: "Liked Songs",
    img: lastPlaylists.liked,
  },
  {
    name: "Electronic",
    img: lastPlaylists.eletronic,
  },
  {
    name: "Till We Drop",
    img: lastPlaylists.tillwedrop,
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
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
