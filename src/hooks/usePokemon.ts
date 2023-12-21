import useSWR from "swr";

import { IPokemon } from "@/types/Pokemon/Pokemon";
import { axiosInstance } from "@/utils/axios";

export const usePokemon = (id: number) => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    fetcher,
  );
  return { data, error, isLoading };
};
