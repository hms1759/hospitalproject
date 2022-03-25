import axios from "axios"

const url ="https://jsonplaceholder.typicode.com/posts";
const uurl = "https://localhost:44382/api/Auth/Register"
export const fetchData = async () => {
    try{
        const response = await  axios.get(url)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}

export const PostProduct =async(data)=>{
    try{
        await axios.post(url, data)
        .then(response=>{
            console.log(response)
        })

    }
    catch(error){
        console.log(error)
    }

}