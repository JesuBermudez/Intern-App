import { io } from "socket.io-client";

const socket = io("http://192.168.10.39:3000");

export default socket;