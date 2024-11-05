import React from 'react'
import { Link } from 'react-router-dom'
import LandingImage from '../src/assets/music.gif'
import feature1 from '../src/assets/music1.jpg'
import feature2 from '../src/assets/music2.jpg'
import { Card } from 'react-bootstrap'



const Landing = () => {
  return (
    <div style={{padding:"100px"}} className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media player</span></h3>
          <p style={{textAlign:"justify"}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'./home'} className='btn btn-info'>Get start</Link>
        </div>
        <div className='col-lg-6'>
          <img className='img-fluid ms-5' src={LandingImage} alt="landing image" />
        </div>
      </div>
      {/* features part */}
      <div className='my-5'>
        <h3 className='text-center'>Features</h3>
        <div className='row mt-5'>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={"250px"} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos
        </Card.Title>
        <Card.Text>
        Users can upload, view and remove the videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={"250px"} variant="top" src={feature2} />
      <Card.Body>
        <Card.Title>Categorise Videos
        </Card.Title>
        <Card.Text>
        Users can categorise the videos by drag and drop feature.


        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
      <Card.Img height={"250px"} variant="top" src={feature1} />
      <Card.Body>
        <Card.Title>Managing Videos
        </Card.Title>
        <Card.Text>
        Users can manage the watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

        </div>
      </div>
      {/* final part */}
      <div className='row my-5 border rounded align-items-center p-5'>
        <div className='col-lg-5'>
          <h4 className='text-warning'>Simple, Fast and powerful</h4>
          <p style={{textAlign:"justify"}}> <span className='fs-5 fw-bolder'> Playe Everything </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quia consequatur odit tempore sequi? Impedit in neque </p>
          <p style={{textAlign:"justify"}}> <span className='fs-5 fw-bolder'> Playe Everything </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quia consequatur odit tempore sequi? Impedit in neque </p>
          <p style={{textAlign:"justify"}}> <span className='fs-5 fw-bolder'> Playe Everything </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quia consequatur odit tempore sequi? Impedit in neque </p>


        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <iframe width="100%" height="360"  src="https://www.youtube.com/embed/IYLEGOWdJY0" title="King Liar Malayalam Movie | Madonna discovers the truth about Dileep&#39;s lies | Dileep | Madonna | Lal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing