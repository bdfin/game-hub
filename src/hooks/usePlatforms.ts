import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { GetResponse } from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<GetResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });
}
