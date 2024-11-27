import React from 'react'
import Header from '../Header'
import { Card, Container,CardHeader,CardBody,CardTitle,CardText } from "react-bootstrap"
import Footer from '../Footer'

const Contact = () => {
  return (
    <div>
        <Header />
        <Container>
            <div className='w-50 mx-auto my-5'></div>
            <Card>
            <CardHeader>
              <h1 className='text-center'>WE'D LOVE TO HEAR FROM YOU</h1>
              <h3 className='text-center'>Contact with us</h3>
            </CardHeader>
            <CardBody className='text-center'>
              <CardTitle>Your Message</CardTitle>
              <input type="text" />
              <button>Send</button>
              <CardTitle className='text-center mb-0'>Email</CardTitle>
              <CardText className='text-black'>smith@exapmle.com</CardText>
              <CardTitle className='text-center mb-0'>Call us</CardTitle>
              <CardText className='text-center mb-0 text-black'>****-***-****</CardText>
            </CardBody>
            </Card>
        </Container>
        <Footer />
    </div>
  )
}

export default Contact