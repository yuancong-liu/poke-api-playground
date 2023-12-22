"use client";
import { ImageWithLoading } from "@/components/common/imageWithLoading";
import { usePokemon } from "@/hooks/usePokemon";

import styles from "./index.module.scss";

type Props = {
  id: string;
};

export const PokemonDetailPanel = ({ id }: Props) => {
  const { pokemon, error, isLoading } = usePokemon(id);

  if (isLoading) return <div>Random Pokémon fetching...</div>;
  if (error) return <div>Error!</div>;
  if (!pokemon) return <div>No data!</div>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <h2>No. {pokemon.id}</h2>
      <div className={styles["pokemon-sprite"]}>
        <ImageWithLoading
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>
    </div>
  );
};
