import React,{useEffect, useState} from 'react'
import { Modal,Form,FloatingLabel,Button } from 'react-bootstrap'
import { deleteCategoryApi,deletevideoCardApi, getallCategoryApi, saveCategoryAPI, updateCategoryApi } from '../services/allAPI';
import VideoCards from './VideoCards';

const Category = ({setdeleteRsponseFromCategory}) => {
  const [addResponseFromCategory,setaddResponseFromCategroy]=useState([])

  useEffect(()=>{
    getAllcategories()
  },[])
  console.log(addResponseFromCategory);
  

  
     const getAllcategories= async()=>{
      try{
        const result = await getallCategoryApi()
        console.log(result);
        
        if(result.status>=200 && result.status<300){
          setaddResponseFromCategroy(result.data)
        }

      }catch(err){
        console.log(err);
        
      }
     }
     console.log(addResponseFromCategory);

const [categoryName,setCategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlesaveCategory = async()=>{
    if(categoryName){

      const categorydetails ={categoryName,allVideos:[]}
      try{
        const result=await saveCategoryAPI(categorydetails)
        if(result.status>=200&&result.status<300){
          alert("categroy created")
          getAllcategories()
          handleClose()
        }

      }catch(er){
        console.log(err);
        
      }

    }else{
      alert("please provide a name to you category")
    }
  }

  const removeCategory = async (id)=>{
    try{
      await deleteCategoryApi(id)
      getAllcategories()

    }catch(arr){
      console.log(arr);
      
    }

  }
  const onDragOverCategory =(e)=>{
    e.preventDefault()
  }

  const videocardDropedOverCategory = async (e,categorydetails)=>{
    
    console.log("inside videocardDropedOverCategory ");
    const VideoDetails = JSON.parse(e.dataTransfer.getData("VideoDetails"))
    console.log(VideoDetails);
    // update category by add video to its allvideos
    categorydetails.allVideos.push(VideoDetails)
    console.log(categorydetails);
    // api call TO make update the category
    await updateCategoryApi(categorydetails)
    getAllcategories()
    const result = await deletevideoCardApi(VideoDetails.id)
    setdeleteRsponseFromCategory(result)


    
    

  }



  return (
    <>
    <div className="d-flex justify-content-around">
      <h3>All Categories</h3>
      <button onClick={handleShow} className=' btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
    </div>
    {/* display category */}
    <div className="container-fluid mt-2">
      {/* single category view */}
{         
            addResponseFromCategory?.length>0?
            addResponseFromCategory?.map(categorydetails=>(
              <div droppable="true" onDragOver={onDragOverCategory} onDrop={e=>videocardDropedOverCategory(e,categorydetails)} key={categorydetails?.id} className="border rounded p-3 mb-3">
              <div className="d-flex justify-content-between">
                <h5>{categorydetails?.categoryName}</h5>
                <button onClick={()=>removeCategory(categorydetails?.id)}  className='btn'><i className='fa-solid fa-trash text-warning'></i></button>
              </div>
      
              {/*display cateorey videos  */}
      
              <div className='row mt-2'>
                {
                  categorydetails?.allVideos?.length>0 &&
                  categorydetails?.allVideos?.map(video=>(
                    <div key={video} className='col-lg-4'>
                    {/* video card */}
                    <VideoCards insideCategory={true} displayData={video}/>
                  </div>
  
                  ))
                }


              </div>
            </div>
  
            ))
            
          :
          <div className='text-danger fw-bolder fs-5'>No CATEGORIES ARE ADDED YET</div>
  
}  
      </div>
    
    <Modal  centered  show={show}   onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Add category details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel controlId="floatingCategory" label="Category name">
        <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category name" />
      </FloatingLabel>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handlesaveCategory} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Category