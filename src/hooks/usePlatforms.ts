import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export default function usePlatforms() {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
}
