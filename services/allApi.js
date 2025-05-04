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

export const  getSearchedFlights=async(query)=>{
    return await commonAPi("get", `/searchFlight${query}`, "")

}

export const getSingleFlight=async(id)=>{
    return await commonAPi("get",`/getsingleflight/${id}`,"")
}

export const userbookedFlights=async(id,reuestBody,reqHeaders)=>{
    return await commonAPi("post",`/bookedflights/${id}`,reuestBody,reqHeaders)
}


export const getNotification=async()=>{
    return await commonAPi('get','/getallnotification',"")
}

export const singleNotification=async(id)=>{
    return await commonAPi("get",`/${id}/getSinglenotification`,"")

}

export const deleteNotification=async(id)=>{
    return await commonAPi("delete",`/${id}/deletenotification`,{})

}

export const flightBooked=async()=>{
    return await commonAPi("get",`/flightbooked`,"")

}

export const singleBooking=async(id)=>{
    return await commonAPi("get",`/${id}/singlebooking`,"")

}

export const bookedTicket=async(reqheaders)=>{
    return await commonAPi("get",`/ticketbooking`,"",reqheaders)

}


export  const statusChange=async(id,requestBody,reqHeaders)=>{
    return await commonAPi("patch",`/bookingstatus/${id}`,{status:requestBody},reqHeaders)
}
export  const cancelTicket=async(id,requestBody,reqHeaders)=>{
    return await commonAPi("patch",`/cancelTicket/${id}`,{status:requestBody},reqHeaders)
}


export const approvedByAdmin=async(id,requestBody,reqHeaders)=>{
    return await commonAPi("patch",`/approved/${id}`,{status:requestBody},reqHeaders)
}
export const rejectByAdmin=async(id,requestBody,reqHeaders)=>{
    return await commonAPi("patch",`/reject/${id}`,{status:requestBody},reqHeaders)
    
}
export const getMonthlyStats = async (reqHeaders) => {
    return await commonAPi("get", "/monthlyBooking", "",reqHeaders);
  };
  