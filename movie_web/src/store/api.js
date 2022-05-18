import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmVjYWZjZmEwYzY5MWRmZjAwZDYzNmQ4ZjEyMGIyMiIsInN1YiI6IjYyNmM5MjYwZWVjNGYzMDBhZTc1MWUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f2igPG1w2A7YPWLqBVt8TcR-uUDXA9RHPrJb-suVdCA";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})