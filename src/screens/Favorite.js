import React, { useState, useCallback } from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";
import { getPokemonsFavoriteApi } from "../api/favorite.js";
import useAuth from "../hooks/useAuth.js";
import { getPokemonDetailsApi } from "../api/pokemon.js";
import PokemonList from "../components/PokemonList.js";
import { useFocusEffect } from "@react-navigation/native";
import NoLogged from "../components/NoLogged.js";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  console.log(pokemons);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);
            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }
          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return (
    <SafeAreaView style={styles.container}>
      {!auth ? (
<NoLogged/>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
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
