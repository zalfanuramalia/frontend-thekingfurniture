import axios from "axios";

const {FRONTEND_URL} = process.env


const http = (token) =>{
    console.log(FRONTEND_URL)
    const headers = {}
    if(token){
        headers["Authorization"] = `Bearer ${token}`
    }

    return axios.create({
        baseURL : 'http://localhost:5000',
        headers
    })
}

export default http