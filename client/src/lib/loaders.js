import apiRequest from "../lib/apiRequest"

export const singlePageLoader = async ({request,params})=>{
    const res = await apiRequest("/posts/"+params.id)
    return res.data

}