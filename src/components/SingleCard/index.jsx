import React from 'react'
import { Card } from 'react-bootstrap'
import './style.css'

function SingleCard(prop) {

  return (
    <div>
      <Card className='card_container'>
        <div className='overlay'>
          <div className='film_title'>
            <Card.Title >{prop.data.title}</Card.Title>
            <p>{prop.data.description}</p>
          </div>
        </div>
        <Card.Img className='card_image' src={prop.data.image} alt={prop.data.description} />
      </Card>
    </div>
  )
}

export default SingleCard
