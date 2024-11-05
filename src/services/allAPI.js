

import commonApi from "./commonApi"
import SERVERURL from "./serverURL"

//  saveVideoAPI -  post http reqst called add component

 export const saveVideoAPI = async (videDetails)=>{
  return await commonApi("POST",`${SERVERURL}/uploadVideo`,videDetails)
}

// getAllVideApi - get http reqst called view component when component displayed in browser isider it useffect hook

export const getAllVideApi = async ()=>{
  return await commonApi("GET",`${SERVERURL}/uploadVideo`,{})
}
// post http req to
export const SaveHistoryApi = async (historydetails)=>{
  return await commonApi("POST",`${SERVERURL}/history`,historydetails)
}



export const getallHistoryApi = async ()=>{
  return await commonApi("GET",`${SERVERURL}/history`,{})
}

// delete  history details 

export const deleteHistoryApi = async (id)=>{
  return await commonApi("DELETE",`${SERVERURL}/history/${id}`,{})
}

// delete card details
export const deletevideoCardApi = async (id)=>{
  return await commonApi("DELETE",`${SERVERURL}/uploadVideo/${id}`,{})
}

export const saveCategoryAPI = async (CategoryDetails)=>{
  return await commonApi("POST",`${SERVERURL}/categories/`,CategoryDetails)
}

export const getallCategoryApi = async ()=>{
  return await commonApi("GET",`${SERVERURL}/categories`,{})
}

export const deleteCategoryApi = async (id)=>{
  return await commonApi("DELETE",`${SERVERURL}/categories/${id}`,{})
}

// update categroy put http request to all category url called by category component when video drop overthe category

export const updateCategoryApi = async (categoryDetails)=>{
  return await commonApi("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}








