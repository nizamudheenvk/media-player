import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { deletevideoCardApi, SaveHistoryApi } from '../services/allAPI';


const VideoCards = ({displayData,setdeletcardResponsefromvideocaed,insideCategory}) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =  async () => {
    // display modal
    setShow(true);
    // store history in json file
 

    const {caption,youtubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime.toLocaleDateString('en-US',{timeZoneName:'short'}));
    const timesTamp = sysDateTime.toLocaleDateString('en-US',{timeZoneName:'short'})
    const historyDetails ={caption,youtubeLink,timesTamp}

    try{
     await SaveHistoryApi(historyDetails)

    }catch (err){
      console.log(err);
      
    }
    
    
  }

  const removeVideo =async (id)=>{
    try{
      const result=await deletevideoCardApi(id)
      setdeletcardResponsefromvideocaed(result)


    }catch(err){
      console.log(err);
      
    }
  }

  const videoCarddragStrted=(e,dragvideoDetails)=>{
    console.log("inside videocard drag started with video id :"+dragvideoDetails?.id);
      // share data using event drag start
    e.dataTransfer.setData("VideoDetails",JSON.stringify(dragvideoDetails))

  }
  
  return (
    <>
    <Card draggable={true} onDragStart={e=>videoCarddragStrted(e,displayData)} style={{ height:"250px" }}>
      <Card.Img onClick={handleShow} variant="top" height={"150px"} src={displayData?.imgUrl}  />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
         <p>{displayData?.caption}</p>
         {
        !insideCategory &&<button onClick={()=>removeVideo(displayData?.id)}  className='btn'><i className='fa-solid fa-trash text-danger'></i></button>

         }
         
        </Card.Text>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360"  src={`${displayData.youtubeLink}?autoplay=1`} title="caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Modal.Body>
      </Modal>
    </>
  )
}
export default VideoCards