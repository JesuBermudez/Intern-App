import { apiUrl } from "../store/api";

export default async function registerService(user) {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = await response.json();

    if ("msg" in res) {
      return { error: res.msg, user: null };
    }

    return {
      user: res.message,
      msg: "usuario creado",
    };
  } catch (error) {
    console.log(error);
  }
}
