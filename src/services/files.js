import { apiUrl } from "../store/api";

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("files", file);
  try {
    const response = await fetch(`${apiUrl}/encrypt-file`, {
      method: "POST",
      body: formData,
    });
    console.log("filess", await response.json());

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Error al subir el archivo");
  }
};
export const getFilesByUser = async (filename) => {
  try {
    const response = await fetch(`${apiUrl}/get-files/${filename}`, {
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Error al traer  archivos");
  }
};
