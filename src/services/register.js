import { data } from "autoprefixer";
import { apiUrl } from "../store/api";

export default async function registerService(user) {
  try {
    console.log("DATA",user);
    
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res = await response.json();
    

    if (!res.msg.userId) {
      return {
        error: res.msg,
      };
    }
    

    return {
      user: res.msg,
      msg: "usuario creado",
    };
  } catch (error) {
    console.log("ERROR EN PETICION", error);
  }
}
