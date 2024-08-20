import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostApi } from "../../services/ApiPosts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useCreatePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: ({ image, title, description, tags, createdBy }) =>
      createPostApi({
        image,
        title,
        description,
        tags,
        createdBy,
      }),
    onSuccess: (post) => {
      toast.success("Post created successfully!");
      navigate("/explore");
    },
    onError: (error) => {
      toast.error("Post not created due to some Error!");
      console.log(error.message);
    },
  });
  return { createPost, isLoading };
}
