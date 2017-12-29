import React from "react";
import { Text } from "react-native";
import Card from "./CardComponent";
import CardSection from "./CardSectionComponent";

const AlbumDetails = props => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetails;
