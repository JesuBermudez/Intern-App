import { apiUrl } from "../store/api";

export default async function loginService(user) {
  try {
    
    const response = await fetch(
      `${apiUrl}/users/auth/login/${user.username}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          recoveryKey: user.recoveryKey,
          ip: user.ip,

        }),
      }
    );
    

    const res = await response.json();
    console.log("res",res);

    return {
      user: res.msg,
      msg: "informacion de usuario ok",
    };
    
  } catch (error) {
    console.log("error login",error);
  }
}
