import Head from 'next/head'
import Input from '../components/Input'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import seller from '../public/images/seller.png'
import empty from '../public/images/empty-input-image.png'
import Image from 'next/image'
import NavbarProfile from '../components/NavbarProfile'
import styles from "../styles/profile-seller.module.scss"

const SellingProduct = () => {
  return (
    <Layout>
        <Head>
            <title>The King | Selling Product</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={`${styles.containers} `}>
            <div className={`${styles.profiles} `}>
                <div className="d-flex flex-column justify-content-center vh-50">
                    <div className={`${styles.content} text-center mt-4`}>Selling Product</div>
                    <div className={`${styles.contents} text-center mb-5`}>See your notifications for the latest updates</div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center px-5 mx-5">                    
                <NavbarProfile />    
            </div>         
        <Container className='mb-5'>
        <Row>
          <Col xs={12} md={3}>
          </Col>
          <Col xs={12} md={6}>
            <h4>Inventory</h4>
            <Input
              type="text"
              id="goods"
              name="goods"
              aria-describedby="goods"
              className='me-5 py-3 mt-5'
              placeholder='Name of goods *'
            />
            <Input
              type="text"
              id="description"
              as="textarea"
              name="description"
              aria-describedby="description"
              className='me-5 py-3 mt-5'
              placeholder='Description Product *'
            />
            <h4 className='mt-5'>Item Details</h4>
            <Input
              type="number"
              id="price"
              name="price"
              aria-describedby="price"
              className='me-5 py-3 mt-5'
              placeholder='Unit price *'
            />
            <Input
              type="number"
              id="stock"
              name="stock"
              aria-describedby="stock"
              className='me-5 py-3 mt-5'
              placeholder='Unit Stock *'
            />
            <Row className='mt-3'>
              <div className='my-4'>Stock Condition</div>
              <Col>
                <Form.Check
                  inline
                  label="New Product"
                  name="group1"
                />
              </Col>
              <Col>
                <Form.Check
                  inline
                  label="Second Product"
                  name="group1"
                />
              </Col>
            </Row>
            <h4 className='mt-5'>Photo of Goods</h4>
            <Row className='my-5'>
              <Col xs={12} md={4}>
                <div height={30} className="my-3">
                  <Image
                    src={seller}
                    width="500px"
                    height="500px"
                    className="img-thumbnail"
                    alt="..." />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div height={30} className="my-3">
                  <Image
                    src={empty}
                    width="500px"
                    height="500px"
                    className="img-thumbnail"
                    alt="..." />
                </div>
              </Col>
              <Col xs={12} md={4}>

              </Col>
            </Row>
            <Button className='mt-4 px-4' variant="color2" size="lg" active>
              Sell Product
            </Button>{' '}
          </Col>
          <Col xs={12} md={3}>

          </Col>
        </Row>
      </Container>
      </div>
    </Layout >
  )
}
export default SellingProduct