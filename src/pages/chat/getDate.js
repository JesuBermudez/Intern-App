export default function getDateChat() {
  return new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    second: "2-digit",
    minute: "2-digit",
    timeZone: "America/Bogota",
  });
}
