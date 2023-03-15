import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export type Playlist = {
  name: string;
  img: string;
};

type Props = {
  playlist: Playlist;
};

export default function LastPlaylistCard({ playlist }: Props) {
  return (
    <Wrapper>
      <ImageWrapper>
        {playlist.img ? (
          <Image
            source={require(`../../../assets/images/lastPlaylists/${playlist.img}`)}
            style={{ height: "100%", width: "100%" }}
          />
        ) : null}
      </ImageWrapper>
      <Text>{playlist.name}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  height: 60px;
  width: 50%;
`;

const ImageWrapper = styled.View`
  width: 25%;
  height: 100%;
`;
const Text = styled.Text`
  color: ${theme.pallete.color};
`;
