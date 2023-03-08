import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { getPokemonsApi } from "../api/pokemon.js";

export default function Pokedex() {
  useEffect(() => {
    //funcion anonima auto ejecutable
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Pokedex</Text>
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
