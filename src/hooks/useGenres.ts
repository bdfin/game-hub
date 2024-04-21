import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import genres from "../data/genres";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenres() {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });
}
