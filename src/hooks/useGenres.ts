import { useQuery } from "@tanstack/react-query";
import apiClient, { GetResponse } from "../services/apiClient";
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
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
}
