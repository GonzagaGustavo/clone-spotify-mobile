import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import theme from "../../styles/theme";

export type Playlist = {
  name: string;
  img: ImageSourcePropType;
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
            source={playlist.img}
            style={{
              height: "100%",
              width: "100%",
              borderBottomLeftRadius: 4,
              borderTopLeftRadius: 4,
            }}
          />
        ) : null}
      </ImageWrapper>
      <TextWrapper>
        <Text>{playlist.name}</Text>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  height: 50px;
  width: 47%;
  background-color: ${theme.pallete.main};
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.View`
  width: 25%;
  height: 100%;
`;

const TextWrapper = styled.View`
  width: 75%;
  height: 100%;
  justify-content: center;
`;

const Text = styled.Text`
  padding-left: 10px;
  color: ${theme.pallete.color};
  font-family: "CircularStd-Black";
`;
