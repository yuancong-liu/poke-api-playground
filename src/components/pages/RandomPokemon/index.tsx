"use client";
import { useCallback, useMemo, useState } from "react";

import { ImageWithLoading } from "@/components/common/ImageWithLoading";
import { POKEMON_TOTAL } from "@/constants/pokemon";
import { usePokemon } from "@/hooks/usePokemon";
import { getRandNum } from "@/utils/number";

import styles from "./index.module.scss";

export const RandomPokemon = () => {
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

  const { data, error, isLoading } = usePokemon(randomPokemonId);

  if (isLoading) {
    return <div>Random Pokémon fetching...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>No data!</div>;
  }

  return (
    <div className={styles["random-pokemon"]}>
      {imageLoaded ? <h1>{data.name.toUpperCase()}</h1> : <h1>&zwnj;</h1>}
      <div className={styles["pokemon-sprite"]}>
        <ImageWithLoading
          src={
            shinyPokemon ? data.sprites.front_shiny : data.sprites.front_default
          }
          alt={data.name}
          loadedCompleteHandler={imageLoadedHandler}
        />
      </div>
      {imageLoaded && shinyPokemon ? <p>Shiny! ✨</p> : <p>&zwnj;</p>}
    </div>
  );
};
