import NodeRSA from "node-rsa";
import crypto from "node:crypto";
export const generateRsaKeyPair = () => {
  const key = new NodeRSA({ b: 2048 }); 

  const publicKey = key.exportKey("public");
  const privateKey = key.exportKey("private");

  return { publicKey, privateKey };
};

export const encryptMessage = (message, recipientPublicKey) => {
  const aesKey = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-gcm", aesKey, iv);
  let encryptedMessage = cipher.update(message, "utf-8", "hex");
  encryptedMessage += cipher.final("hex");
  const authTag = cipher.getAuthTag().toString("hex");
  const rsaKey = new NodeRSA(recipientPublicKey);
  const encryptedAesKey = rsaKey.encrypt(aesKey, "base64");
  return {
    encryptedAesKey,
    iv: iv.toString("hex"),
    authTag,
    encryptedMessage,
  };
};

export const decryptMessage = (encryptedData, recipientPrivateKey) => {
  const { encryptedAesKey, iv, authTag, encryptedMessage } = encryptedData;
  const rsaKey = new NodeRSA(recipientPrivateKey);
  const aesKey = rsaKey.decrypt(encryptedAesKey, "buffer");
  console.log("AES Key length:", aesKey.length);
  if (aesKey.length !== 32) {
    throw new Error(
      "Decrypted AES key does not have the correct length of 32 bytes"
    );
  }
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    aesKey,
    Buffer.from(iv, "hex")
  );
  decipher.setAuthTag(Buffer.from(authTag, "hex"));
  let decryptedMessage = decipher.update(encryptedMessage, "hex", "utf-8");
  decryptedMessage += decipher.final("utf-8");
  return decryptedMessage;
};
