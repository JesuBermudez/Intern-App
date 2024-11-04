import { useEffect, useState } from "react";
import fileIcon from "../../assets/file.svg";
import file from "../../assets/fileload.svg";
import { useNavigate } from "react-router-dom";
import { getFilesByUser, uploadFile } from "../../services/files";
import { ModalFile } from "../../components/ui/ModalFiles";

export default function FilePages() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [fileNameSelected, setFileNameSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const [files, setFile] = useState([]);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setSelectedFile(file);
    }
  };
  useEffect(() => {
    async function getFile() {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      const res = await getFilesByUser(user.userId);
      console.log("RES FILES", res);

      setFile(res);
    }
    getFile();
  }, []);

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const result = await uploadFile(selectedFile);
        setUploadStatus(`Archivo "${fileName}" subido exitosamente: ${result}`);
      } catch (error) {
        setUploadStatus(`Error: ${error.message}`);
      }
    } else {
      setUploadStatus("Por favor selecciona un archivo para subir.");
    }
  };

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center p-2 lg:w-[50vw] w-[95vw] gap-2">
          <h2 className="text-center font-bold text-[2rem]">
            Lista de archivos
          </h2>

          <div className="flex justify-between w-full items-center">
            <span
              onClick={() => navigate("/main")}
              className="hover:text-primary cursor-pointer"
            >
              Volver
            </span>
            <button
              onClick={handleUpload}
              className="border border-primary text-primary p-2 rounded-lg"
            >
              Subir archivo
            </button>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <main className="flex items-center justify-center font-sans">
              <label
                htmlFor="dropzone-file"
                className="mx-auto cursor-pointer flex w-full flex-col items-center rounded-xl border-2 border-dashed border-primary p-6 text-center"
              >
                <img src={file} className="size-16" alt="" />

                <h2 className="mt-4 text-xl font-medium text-white tracking-wide">
                  File
                </h2>

                <p className="mt-2 text-gray-500 tracking-wide">
                  Upload or drag & drop your file SVG, PNG, JPG, GIF, or PDF.
                </p>

                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {selectedFile && (
                  <div className="mt-4 flex flex-col items-center">
                    <h3 className="text-center text-white text-sm">
                      Nombre: {fileName}
                    </h3>
                    {fileName.endsWith(".pdf") ? (
                      <iframe
                        src={URL.createObjectURL(selectedFile)}
                        title="Vista previa del archivo PDF"
                        className="w-32 h-32 mt-2"
                      />
                    ) : (
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Vista previa del archivo"
                        className="w-32 h-auto mt-2"
                      />
                    )}
                  </div>
                )}
              </label>
            </main>

            {uploadStatus && <p className="mt-2 text-white">{uploadStatus}</p>}
          </div>

          <div className="w-full flex flex-wrap gap-2 mt-4">
            {files.map((f, i) => (
              <div
                key={i}
                onClick={() => {
                  setOpenModal(true);
                  setFileNameSelected(f.nameFile);
                }}
                className="bg-white bg-opacity-10 cursor-pointer p-4 lg:w-40 flex flex-col items-center rounded-lg"
              >
                <span className="text-primary">
                  {f.nameFile.length > 10
                    ? `${f.nameFile.slice(0, 10)}...`
                    : f.nameFile}
                </span>
                <img src={fileIcon} alt="icono" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {openModal ? (
        <ModalFile
          filename={fileNameSelected}
          closeModal={() => setOpenModal(false)}
        ></ModalFile>
      ) : (
        ""
      )}
    </>
  );
}
