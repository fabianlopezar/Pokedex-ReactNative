import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite.js";

export default function Favorite() {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites}></Button>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});
