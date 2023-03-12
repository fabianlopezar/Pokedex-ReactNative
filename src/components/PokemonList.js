import React from "react";
import { StyleSheet, FlatList, ActivityIndicator,Platform } from "react-native";
import PokemonCard from "./PokemonCard.js";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;
  const LoadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={isNext && LoadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
    marginTop:Platform.OS==="android"?30:0,
  },
  spinner: { marginTop: 20,
     marginBottom: Platform.OS==="android"?90:60, },
});
