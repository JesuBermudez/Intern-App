import { apiUrl } from "../store/api";

export default async function getMessageService(chat) {
  try {
    const response = await fetch(`${apiUrl}/chats/${chat}`, {
      method: "GET",
    });

    const res = await response.json();
    console.log(res);

    if (!Array.isArray(res)) {
      return { error: res.msg };
    }

    return res;
  } catch (error) {
    console.log(error);
  }
}
