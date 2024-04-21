import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { GetResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<GetResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: Infinity,
    initialData: { count: genres.length, results: genres },
  });
}
