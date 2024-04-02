import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const fetchCharacter = async (house) => {
  const result = await fetch(
    `https://hp-api.onrender.com/api/characters/house/${house}`
  );
  return result.json();
};

export function Details({ route, navigation }) {
  const [characters, setCharacters] = useState([]);
  const { house } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCharacters = await fetchCharacter(house);
      setCharacters(fetchedCharacters.slice(0, 5));
    };
    fetchData();
  }, [house]);

  return (
    <View style={styles.container}>
      <View style={styles.characterList}>
        {characters.map((character, index) => (
          <View key={index} style={styles.characterContainer}>
            {character.image ? (
              <Image
                source={{ uri: character.image }}
                style={styles.characterImage}
              />
            ) : (
                <Image
                source={require("../assets/not.png")}
                style={styles.characterImage}
              />
            )}
            <View style={styles.characterInfo}>
              <Text style={styles.characterName}>{character.name}</Text>
              <Text style={styles.characterDetail}>
                Gender: {character.gender}
              </Text>
              <Text style={styles.characterDetail}>
                Date of Birth: {character.dateOfBirth}
              </Text>
              <Text style={styles.characterDetail}>
                Ancestry: {character.ancestry}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.backButton}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 20,
  },
  footer: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    textAlign: "center",
    color: "#000",
    fontSize: 18,
  },
  characterList: {
    flex: 1,
    padding: 20,
  },
  characterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  characterImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  characterInfo: {
    flex: 1,
  },
  characterName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  characterDetail: {
    fontSize: 16,
    color: "#fff",
  },
});
