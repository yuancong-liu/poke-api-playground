import useSWR from "swr";

import { IPokemon } from "@/types/Pokemon/Pokemon";
import { axiosInstance } from "@/utils/axios";

type Id = number | string;

export const usePokemon = (id: Id) => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  const {
    data: pokemon,
    error,
    isLoading,
  } = useSWR<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}/`, fetcher);

  return { pokemon, error, isLoading };
};
