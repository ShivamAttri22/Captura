import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login as LoginApi } from "../services/ApiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { useUser } from "../context/UserContext";

export function useLogin() {
  const { setIsLoggedin } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      LoginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Login Successful!");

      navigate("/");
    },
    onError: (error) => {
      toast.error("Email or Password do not match!");
    },
  });
  return { login, isLoading };
}
