import React, { useState } from 'react'
import Add from './components/Add'
import View from './components/View'
import Category from './components/Category'
import { Link } from 'react-router-dom'


const Home = () => {

  const [deleteRsponseFromCategory,setdeleteRsponseFromCategory]=useState("")
  const [addresponseFromHome,setAddresponseFromHome]=useState("")
  return (
    <div style={{paddingTop:'100px'}}>
      <div className="container mb-5 d-flex justify-content-between">
        <Add setAddresponseFromHome={setAddresponseFromHome}/>
        <Link to={'/history'}>watch history</Link>
      </div>
      <div className='container-fluid row my-5'>
        <div className='col-lg-6'>
          <h3>All videos</h3>
          <View deleteRsponseFromCategory={deleteRsponseFromCategory} addresponseFromHome={addresponseFromHome}/>
        </div>
<div className='col-lg-6'>
<Category setdeleteRsponseFromCategory={setdeleteRsponseFromCategory}/>
</div>
      </div>
    </div>
  )
}

export default Home