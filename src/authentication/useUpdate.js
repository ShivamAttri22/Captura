import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser as updateApi } from "../services/ApiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useUpdate() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: ({ username, password }) =>
      updateApi({
        username,
        password,
      }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Update Successful!");

      navigate("/");
    },
    onError: (error) => {
      toast.error("Update Failed!");
    },
  });
  return { updateUser, isLoading };
}
