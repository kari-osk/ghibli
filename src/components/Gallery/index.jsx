import { useState } from 'react';
import { useQuery } from 'react-query'
import axios from 'axios'
import Loading from '../Loading';
import { Container, Row, Col } from 'react-bootstrap'
import SingleCard from '../SingleCard';
import { GrLinkUp } from "react-icons/gr";
import './style.css'
import { useEffect } from 'react';

const fetchData = () => {
  return axios.get(`https://ghibliapi.herokuapp.com/films`);
}


function Gallery() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [])

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  const { isLoading, data, error } = useQuery('ghibliApi', fetchData)

  if (isLoading) {
    return <Loading />
  }

  if (error) return 'An error has occurred: ' + error.message



  return (
    <Container className='gallery_container'>

      <h1 id='films' className='gallery_title'>Films</h1>
      <Row mb={2}>
        {
          data?.data.map((film) => (
            <Col sm={12} md={6} lg={3} xl={3} key={film.title} className='mb-3'>
              <SingleCard data={film} />
            </Col>
          ))}
      </Row>
      {
        showButton
          ?
          <button className='show_btn' onClick={scrollToTop}><GrLinkUp /></button>
          : ''
      }
    </Container>

  )
}

export default Gallery
