import axios from "axios";

const BASE_URL = `https://fs8backendshop.herokuapp.com/api/v1/`;
// const BASE_URL = `http://localhost:5000/api/v1/`;

const jsonString: any | null = localStorage.getItem("persist:root");

var user = JSON.parse(jsonString)?.user;


// const user= JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;
console.log(TOKEN)
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
        "Authorization": `bearer ${TOKEN}`
    },
});
