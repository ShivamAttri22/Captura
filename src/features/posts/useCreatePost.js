import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost as createPostApi } from "../../services/ApiPosts";
import toast from "react-hot-toast";

export function useCreatePost() {
  const queryClient = useQueryClient();
  const { mutate: createPost, isLoading } = useMutation({
    mutationFn: ({ image, title, description, tags }) =>
      createPostApi({
        image,
        title,
        description,
        tags,
      }),
    onSuccess: (post) => {
      console.log(post);
      toast.success("Post created successfully!");
    },
    onError: () => {
      toast.error("Post not created due to some Error!");
    },
  });
  return { createPost, isLoading };
}
