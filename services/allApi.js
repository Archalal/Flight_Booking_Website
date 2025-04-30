import commonAPi from "./commonApi";


export const registerUser=async(requestBody,requestHeader)=>{
    return await commonAPi('post','/register',requestBody,requestHeader)

}

export const verifyUser=async(requestBody)=>{
    return await commonAPi("post","/login",requestBody)
}


export const getAllUser=async()=>{
    return await commonAPi("get","/getalluser","")

}

export const getSingleUserId=async(id)=>{
    return await commonAPi("get",`/${id}/getSingleUser`,"")
}

export const  getAllFlights=async()=>{
    return await commonAPi("get","/getallflights","")

}