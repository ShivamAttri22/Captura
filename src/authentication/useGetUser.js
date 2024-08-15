import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser as getUserApi } from "../services/ApiAuth";

export function useGetUser() {
  const queryClient = useQueryClient();

  const { data: getUser, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserApi,
    onSuccess: (data) => {},
    onError: (error) => {
      console.error("Error fetching user:", error.message); // Handle the error
    },
  });

  return {
    getUser,
    isLoading,
  };
}
