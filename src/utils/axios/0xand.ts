import axios from "axios"

const zeroxand = axios.create({
    baseURL: "https://api.0xand.com"
});

export {
    zeroxand,
}
