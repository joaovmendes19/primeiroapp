import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const houses = [
  {
    name: "Grifinória",
    nameToApi: "gryffindor",
    color: "#740001",
    image: require("../assets/gryffindor.png"),
  },
  {
    name: "Corvinal",
    nameToApi: "ravenclaw",
    color: "#005a9e",
    image: require("../assets/ravenclaw.png"),
  },
  {
    name: "Sonserina",
    nameToApi: "slytherin",
    color: "#1d7b34",
    image: require("../assets/slytherin.png"),
  },
  {
    name: "Lufa Lufa",
    nameToApi: "hufflepuff",
    color: "#f0c75e",
    image: require("../assets/hufflepuff.png"),
  },
];

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>
        Casas
      </Text>
      {houses.map((house, index) => (
        <TouchableOpacity
        key={index}
          style={[styles.houseContainer, { backgroundColor: house.color }]}
          onPress={() =>
            navigation.navigate("Details", { house: house.nameToApi })
          }
        >
          <View>
            <Image
              source={house.image}
              style={styles.houseImage}
            />
            <Text style={styles.houseText}>{house.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  houseContainer: {
    width: "80%",
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  houseImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  houseText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
