import { apiUrl } from "../store/api";

export default async function getMessageService(chat) {
  try {
    const response = await fetch(`${apiUrl}/chats/${chat}`, {
      method: "GET",
    });

    const res = await response.json();

    if (!Array.isArray(res.msg)) {
      return { error: res.msg };
    }

    return res.msg;
  } catch (error) {
    console.log(error);
  }
}
