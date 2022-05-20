import axios from "axios";
const token = "AIzaSyCvpIb-SzGWGXSyigwr3SDi-4MMIv1s6Zo";
export default axios.create({
    baseURL: "https://www.googleapis.com/auth/books",
    headers: {
        Authorization: `Bearer ${token}`
    }
})