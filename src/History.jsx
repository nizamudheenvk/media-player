import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getallHistoryApi } from './services/allAPI'
Link

const History = () => {
  const [allVideohistory,setAllvideohistorry]=useState([])
  useEffect(()=>{
    getAllhistory()
  },[])
  console.log(allVideohistory);
  
  const getAllhistory= async()=>{
    try{
      const result =await getallHistoryApi()
      if(result.status>=200 && result.status<300){
        setAllvideohistorry(result.data)
      }

    }catch(err){
      console.log(err);
      
    }
  }

  const removeHistory = async (id)=>{
    try{
      await deleteHistoryApi(id)
      getAllhistory()

    }catch(err){
      console.log(err);
      
    }
  }


  return (
    <div style={{padding:"100px"}}>
      <div className='container d-flex justify-content-between'>
        <h3>watch history</h3>
        <Link to={'/home'}>Back to home</Link>
      </div>
      <table className='container my-5 table'>
        <thead>
          <tr>
          <th>#</th>
          <th>caption</th>
          <th> Link</th>
          <th>Time set up</th>
          <th>...</th>
          </tr>
        </thead>
        <tbody>{
       allVideohistory?.length>0?
       allVideohistory?.map((videoDetails,index)=>(
        <tr key={videoDetails?.id}>
        <td>{videoDetails?.index}</td>
        <td>{videoDetails?.caption}</td>
        <td><a target='_blank' href={videoDetails?.youtubeLink}>{videoDetails?.youtubeLink}</a></td>
        <td>{videoDetails?.timesTamp}</td>
        <td><button onClick={()=>removeHistory(videoDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
        </tr>
       ))
       :
       <div className='fw-bolder text-danger'>watch history not avalibale</div> 
       }
        </tbody>
      </table>
    </div>
  )
}

export default History