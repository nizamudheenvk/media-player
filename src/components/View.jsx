import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCards from './VideoCards'
import { getAllVideApi } from '../services/allAPI'

const View = ({addresponseFromHome,deleteRsponseFromCategory}) => {

const [deletcardResponsefromvideocaed,setdeletcardResponsefromvideocaed] = useState("")

  const [allVideos,setAllvideos]= useState([])
  useEffect(()=>{
getAllVideos()
  },[addresponseFromHome,deletcardResponsefromvideocaed,deleteRsponseFromCategory])
  console.log(allVideos);
const getAllVideos = async ()=>{
  try{
    const result = await getAllVideApi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllvideos(result.data);
      
    }
  }catch(err){
    console.log(err);
    
  }
}
  return (
    <>
    <Row>
      {
        allVideos?.length>0?
        allVideos?.map(videos=>(
          <Col key={videos?.id} className='mb-2' sm={12} md={6} lg={4}>
      <VideoCards displayData={videos} setdeletcardResponsefromvideocaed={setdeletcardResponsefromvideocaed}/>
      </Col>
        ))
        :
        <div className='fw-bolder text-danger fs-5'>No videos are uploaded yet</div>
      }
    </Row>
    </>
  )
}

export default View