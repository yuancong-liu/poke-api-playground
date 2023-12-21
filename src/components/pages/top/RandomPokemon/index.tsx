"use client";
import { useCallback, useMemo, useState } from "react";

import { useRouter } from "next/navigation";

import { ImageWithLoading } from "@/components/common/imageWithLoading";
import { POKEMON_TOTAL } from "@/constants/pokemon";
import { usePokemon } from "@/hooks/usePokemon";
import { getRandNum } from "@/utils/number";

import styles from "./index.module.scss";

export const RandomPokemon = () => {
  const router = useRouter();

  const [imageLoaded, setImageLoaded] = useState(false);

  const imageLoadedHandler = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const { randomPokemonId, shinyPokemon } = useMemo(() => {
    return {
      randomPokemonId: getRandNum(1, POKEMON_TOTAL),
      shinyPokemon: getRandNum(0, 1000) <= 50,
    };
  }, []);

  const goToDetail = useCallback(() => {
    router.push(`/pokemon/${randomPokemonId}`);
  }, [randomPokemonId, router]);

  const { data: pokemon, error, isLoading } = usePokemon(randomPokemonId);

  if (isLoading) return <div>Random Pokémon fetching...</div>;
  if (error) return <div>Error!</div>;
  if (!pokemon) return <div>No data!</div>;

  return (
    <div className={styles["random-pokemon"]}>
      {imageLoaded ? (
        <button className={styles["name"]} onClick={goToDetail}>
          {pokemon.name}
        </button>
      ) : (
        <h1>&zwnj;</h1>
      )}
      <div className={styles["pokemon-sprite"]}>
        <ImageWithLoading
          src={
            shinyPokemon
              ? pokemon.sprites.front_shiny
              : pokemon.sprites.front_default
          }
          alt={pokemon.name}
          loadedCompleteHandler={imageLoadedHandler}
        />
      </div>
      {imageLoaded && shinyPokemon ? <p>Shiny! ✨</p> : <p>&zwnj;</p>}
    </div>
  );
};
