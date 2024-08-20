import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts as getPostsApi } from "../../services/ApiPosts";
import Explore from "../../pages/Explore";
function useGetPosts() {
  const queryClient = useQueryClient();

  const { data: getPosts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostsApi,
    onSuccess: (data) => {},
    onError: (error) => {
      throw new Error(error.message);
    },
  });
  return { getPosts, isLoading };
}
export default useGetPosts;
