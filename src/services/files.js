import { apiUrl } from "../store/api";

export const uploadFile = async (file) => {
  console.log("ENTREEE");
  const formData = new FormData();
  formData.append("files", file);
  try {
    const response = await fetch(`${apiUrl}/encrypt-file`, {
      method: "POST",
      body: formData,
    });
    console.log("filess",await response.json());

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Error al subir el archivo");
  }
};
