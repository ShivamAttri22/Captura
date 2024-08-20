import supabase, { supabaseUrl } from "./supabase";

export async function createPost({
  image,
  title,
  description,
  tags,
  createdBy,
}) {
  const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/user-bucket/${imageName}`;

  const { data, error } = await supabase
    .from("posts")
    .insert([
      { image: imagePath, title, description, tags, created_by: createdBy },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  const { error: storageError } = await supabase.storage
    .from("user-bucket")
    .upload(imageName, image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("posts").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Post image could not be uploaded and the Post was not created"
    );
  }

  return data;
}
export async function getPosts() {
  const { data: posts, error } = await supabase.from("posts").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return posts;
}
