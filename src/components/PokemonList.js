import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PokemonCard from "./PokemonCard.js";

export default function PokemonList(props) {
  const { pokemons } = props;
  
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
});
