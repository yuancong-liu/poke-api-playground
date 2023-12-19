"use client";
import { POKEMON_TOTAL } from "@/constants/pokemon";
import { usePokemon } from "@/hooks/usePokemon";
import { getRandNum } from "@/utils/number";
import { useMemo } from "react";
import Image from "next/image";
import styles from "./index.module.scss";

export const RandomPokemon = () => {
  const randomPokemonId = useMemo(() => getRandNum(1, POKEMON_TOTAL), []);

  const { data, error, isLoading } = usePokemon(randomPokemonId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>No data!</div>;
  }

  return (
    <div className={styles["random-pokemon"]}>
      <h1>{data.name}</h1>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={150}
        height={150}
        priority={true}
      />
    </div>
  );
};
