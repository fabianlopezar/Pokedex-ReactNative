import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon.js";
import PokemonList from "../components/PokemonList";


export default function Pokedex() {
  //Creo un estado local
  const [pokemons, setPokemons] = useState([]);
  const[nextUrl,setNextUrl]=useState(null)

  useEffect(() => {
    // Funcion anonima auto ejecutable
    (async () => {
      await loadPokemons();
    })(); 
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons,...pokemonsArray]);
      setNextUrl(response.next)
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
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
