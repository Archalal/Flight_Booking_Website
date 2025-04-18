import commonAPi from "./commonApi";


export const registerUser=async(requestBody,requestHeader)=>{
    return await commonAPi('post','/register',requestBody,requestHeader)

}