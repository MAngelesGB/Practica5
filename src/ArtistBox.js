import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getMusicImage } from "./api-client";

export default class ArtistBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  componentDidMount() {
    const { name } = this.props.artist;
    getMusicImage(name, (image) => this.setState({ image: image }));
  }
  render() {
    const { name, image } = this.props.artist;
    return (
      <View style={styles.artistBox}>
        <Image
          style={styles.images}
          source={{ uri: this.state.image || image }}
          onError={(error) => console.error("Error al cargar la imagen", error)}
        />

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: "white",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  images: {
    width: 150,
    height: 150,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: "#333",
  },
});
