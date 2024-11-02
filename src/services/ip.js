export const getClientIp = async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  return (await response.json()).ip;
};
