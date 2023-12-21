"use client";
import { useCallback, useMemo, useState } from "react";

import Link from "next/link";

import { ImageWithLoading } from "@/components/common/imageWithLoading";
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

  const pathToDetail = useMemo(
    () => `/pokemon/${randomPokemonId}`,
    [randomPokemonId],
  );

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
      {imageLoaded ? (
        <Link className={styles["name"]} href={pathToDetail}>
          {data.name}
        </Link>
      ) : (
        <h1>&zwnj;</h1>
      )}
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
