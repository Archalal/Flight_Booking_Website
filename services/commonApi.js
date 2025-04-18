import baseURL from "./baseURL";
import axios from "axios";

const commonAPi=async(httpMethod,endpoints,requestBody,requestHeaders)=>{

    const requestedConfig={
        method:httpMethod,
        url:baseURL+endpoints,
        data:requestBody,
        headers:requestHeaders?requestHeaders:{"Content-Type":"application/json"}
    }

    return await axios(requestedConfig)
    .then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })

}

export default commonAPi