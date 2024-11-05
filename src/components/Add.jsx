import React,{useState }from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI'




const Add = ({setAddresponseFromHome}) => {
  const [invalidyoutubelink,setinvalidyoutubelink]=useState(false)

const [VideoDetails,setVideoDetails] = useState({
  caption:"",imgUrl:"",youtubeLink:""
})
console.log(VideoDetails);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractembedlinkfromuoutubelink = (userinputyoutubelink)=>{
    // steps creating embedlink from youtubrlink
    if(userinputyoutubelink.includes("https://www.youtube.com/watch?v=")){
console.log(userinputyoutubelink.split("v=")[1].slice(0,11));
const videId= userinputyoutubelink.split("v=")[1].slice(0,11)
setinvalidyoutubelink(false)
setVideoDetails({...VideoDetails,youtubeLink:`https://www.youtube.com/embed/${videId}`})

    }else{
      setinvalidyoutubelink(true)
      setVideoDetails({...VideoDetails,youtubeLink:""})
    }
  }

  const handleuploadvideo= async()=>{
    // object destructure : const {key1,key2....} = object-name
    const {caption,imgUrl,youtubeLink} = VideoDetails
    if(caption && imgUrl && youtubeLink){
      // store video details permenently
      try{
        const result = await saveVideoAPI(VideoDetails) 
        console.log(result);
        if(result.status>=200 && result.status<=300){
          // alert("Video uploaded successfully")
          handleClose()
          // pass result to view component
          setAddresponseFromHome(result)
        }else{
          console.log(result);
        }
        
      }catch(err){
        console.log(err);
        
      }


    }else{
      alert("please fill the form")
    }
  }



  return (
   <>
   <div className='d-flex align-items-center'>
    <h5>Upload New Video</h5>
    <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
   </div>
   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>update video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded'>
          <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setVideoDetails({...VideoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingCaption" label="Video Image URL">
        <Form.Control onChange={e=>setVideoDetails({...VideoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingCaption" label="Video Youtube Link">
        <Form.Control onChange={e=>extractembedlinkfromuoutubelink(e.target.value)} type="text" placeholder="Video Youtube Link" />
      </FloatingLabel>
{
      invalidyoutubelink &&
       <div className="text-danger fw-bolder">invalid youtube link....please try with other!!!</div>
}

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleuploadvideo} variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Add