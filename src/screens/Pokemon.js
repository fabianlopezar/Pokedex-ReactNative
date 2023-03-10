import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/pokemon.js";
import Header from "../components/Pokemon/Header.js";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;
  //---> Renderizado <---
  return (
    <ScrollView>
      <Header name={pokemon.name} order={pokemon.order} image={pokemon.sprites.other["official-artwork"].front_default} type={pokemon.types[0].type.name}/>
    </ScrollView>
  );
}
