import axios from "axios";

const pinata = axios.create({
  baseURL: "https://gateway.pinata.cloud/ipfs",
});

const PINATA_GET_URLS = Object.freeze({
  USERS: "/bafkreia2tigtk5kv5x6mptrscob7rwyvooyzte2j7luimkfssvm3m2zf54",
});

export { pinata, PINATA_GET_URLS };
