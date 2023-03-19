import React from "react";
import styled from "styled-components/native";
import assets from "@/assets";
import Layout from "../layout";
import Header from "./header";
import LastPlaylistCard, { Playlist } from "./lastPlaylistCard";
import Filters from "./filters";

const data: Playlist[] = [
  {
    name: "Hip Hop",
    img: assets.images.lastPlaylists.hiphop,
  },
  {
    name: "This Is Drake",
    img: assets.images.lastPlaylists.thisisdrake,
  },
  {
    name: "On Repeat",
    img: assets.images.lastPlaylists.onrepeat,
  },
  {
    name: "Liked Songs",
    img: assets.images.lastPlaylists.liked,
  },
  {
    name: "Electronic",
    img: assets.images.lastPlaylists.eletronic,
  },
  {
    name: "Till We Drop",
    img: assets.images.lastPlaylists.tillwedrop,
  },
];

export default function Home() {
  return (
    <Layout>
      <LeftSpace>
        <Header />
        <Filters />
        <LastPlaylistsWrapper>
          {data.map((playlist, index) => (
            <LastPlaylistCard playlist={playlist} key={index} />
          ))}
        </LastPlaylistsWrapper>
      </LeftSpace>
    </Layout>
  );
}

const LastPlaylistsWrapper = styled.View`
  /* padding-left: 5px; */
  padding-right: 5px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LeftSpace = styled.View`
  padding-left: 5px;
`;
