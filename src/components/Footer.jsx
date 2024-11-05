import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:"300px"}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{width:"400px"}}>
          <h5><i className='fa-solid fa-music me-2'></i>Media Player</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link  to={'/'} style={{textDecoration:"none",color:"white"}}>Landing page</Link>
          <Link  to={'/home'} style={{textDecoration:"none",color:"white"}}>Home page</Link>
          <Link  to={'/history'} style={{textDecoration:"none",color:"white"}}>History page</Link>
        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5>guids</h5>
          <a  style={{textDecoration:"none",color:"white"}} href="https://react.dev/"target='-blank'>React</a>
          <a  style={{textDecoration:"none",color:"white"}} href="https://www.npmjs.com/package/react-router-dom"target='-blank'>React Router</a>
          <a  style={{textDecoration:"none",color:"white"}} href="https://react-bootstrap.netlify.app/"target='-blank'>React Bootstrap</a>


        </div>
        {/* contact */}
        <div className='d-flex flex-column'>
        <h5>Contact</h5>
        <div className='d-flex'>
          <input placeholder='enter your email here' type="text" className='form-control me-2' />
          <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className="d-flex justify-content-between mt-5" >
        <a  style={{textDecoration:"none",color:"white"}} href="https://x.com/?lang=en"target='-blank'><i className='fa-brands fa-twitter'></i></a>
        <a  style={{textDecoration:"none",color:"white"}} href="https://www.instagram.com/"target='-blank'><i className='fa-brands fa-instagram'></i></a>
        <a  style={{textDecoration:"none",color:"white"}} href="https://www.facebook.com/"target='-blank'><i className='fa-brands fa-facebook'></i></a>
        <a  style={{textDecoration:"none",color:"white"}} href="https://in.search.yahoo.com/?fr2=inr"target='-blank'><i className='fa-brands fa-yahoo'></i></a>
        <a  style={{textDecoration:"none",color:"white"}} href="https://www.google.com/"target='-blank'><i className='fa-brands fa-google'></i></a>

        </div>

        </div>
      </div>
      <p className='text-center mt-3'>Copyright © 2024 React Bootstrap. Built with Docusaurus.</p>
    </div>
  )
}

export default Footer