import { IPokemon } from "@/types/Pokemon/Pokemon";
import { axiosInstance } from "@/utils/axios";
import useSWR from "swr";

export const usePokemon = (id: number) => {
  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}/`,
    fetcher,
  );
  return { data, error, isLoading };
};
