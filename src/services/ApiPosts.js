import supabase from "./supabase";

export async function createPost({ image, title, description, tags }) {
  const { data, error } = await supabase
    .from("posts")
    .insert([{ image, title, description, tags }])
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}
