import { apiUrl } from "../store/api";

export default async function getContactService(userId) {
  try {
    const response = await fetch(`${apiUrl}/chats/${userId}`, {
      method: "GET",
    });
    const res = await response.json();

    if (res.msg) {
      return { error: res.msg };
    }

    return res.chats.msg;
  } catch (error) {
    console.log(error);
  }
}
