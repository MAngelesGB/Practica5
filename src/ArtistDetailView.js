import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getMusicImage } from "./api-client";


export default class ArtistDetailView extends Component {
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
    const { name, image, listeners, id, streamable } = this.props.artist;
    return (
      <View style={styles.artistBox}>
      
        <View style={styles.info}>
          <Image
              style={styles.images}
              source={{ uri: this.state.image || image }}
              onError={(error) => console.error("Error al cargar la imagen", error)}
            />
            <View style={styles.data}>
              <Text style={styles.name}>{name}</Text>
              <Text>
                <Text style={styles.label}>Mbid:</Text> {id}
              </Text>
              <Text>
                <Text style={styles.label}>Listeners: </Text> {listeners}
              </Text>
              <Text>
                <Text style={styles.label}>Streamable: </Text> {streamable}
              </Text>
            </View> 
        
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox:{
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  info: {
    marginRight: 'auto',
    marginLeft:'auto',
    width: "90%",
    height:"55%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  images: {
    width: "85%",
    height: "55%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  data: {
    marginTop: 20,
  },
  name:{
    marginBottom:10,
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  label:{
    fontWeight: "bold",
    fontSize: 16,
  }
});
