import axios from "axios";

const BaseUrl="http://127.0.0.1:3002"

//add about in home page
export const getAbout=async()=>{
    try {
        return await axios.get(`${BaseUrl}/about`)
    }
    catch (error) {
        console.log("Error while fetching data from the Api", error.message);
    }
}

//Add User Data
export const addUser = async (data) => {
    try {
        return await axios.post(`${BaseUrl}/contact`, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}

//add trainer
export const getTrainerDetails= async()=>{
    try{
        return await axios.get(`${BaseUrl}/users`)
    }
    catch(error){
        console.log("error while calling data",error.message);
    }
}