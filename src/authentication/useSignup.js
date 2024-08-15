import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as SignupApi } from "../services/ApiAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, username }) =>
      SignupApi({
        email,
        password,
        username,
      }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Account successfully created!");
      navigate("/");
    },
    onError: (error) => {
      toast.error("Failed to create an account!");
    },
  });
  return { signup, isLoading };
}
