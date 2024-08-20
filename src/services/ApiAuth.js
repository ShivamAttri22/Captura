import supabase from "./supabase";

export async function signUp({ email, password, username }) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) throw new Error(error.message);

    return data;
  } catch (error) {
    console.error("Error during sign-up:", error.message);
    throw error;
  }
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateUser({ username, password }) {
  if (!password) {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        username,
      },
    });
    if (error) {
      throw new Error(error.message);
    }

    return data;
  } else {
    const { data, error } = await supabase.auth.updateUser({
      password,
      data: {
        username,
      },
    });
    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
