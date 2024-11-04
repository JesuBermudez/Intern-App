import { apiUrl } from "../store/api";

export const uploadFile = async (file, userId) => {
  const formData = new FormData();
  formData.append("files", file);
  try {
    const response = await fetch(`${apiUrl}/encrypt-file/${userId}`, {
      method: "POST",
      body: formData,
    });
    const res = await response.json();

    return res;
  } catch (error) {
    throw new Error(error.message || "Error al subir el archivo");
  }
};

export const getFilesByUser = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/get-files/${userId}`, {
      method: "GET",
    });

    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Error al traer  archivos");
  }
};
