import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../services/ApiAuth";
import toast from "react-hot-toast";
import { useContext } from "react";
import { useUser } from "../context/UserContext";

export function useLogout() {
  const queryClient = useQueryClient();
  const { setIsLoggedin } = useUser();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("Logout Successful!");
      setIsLoggedin((val) => !val);
    },
    onError: () => {
      toast.error("Logout Failed!");
    },
  });

  return { logout, isLoading };
}
