import { Container, Row, Col, Card, Button } from "react-bootstrap"
import styles from "../styles/profile.module.scss"
import Image from "next/image"
import people from "../public/images/people.png"
import { HiOutlinePencil } from "react-icons/hi"
import {MdLogout} from "react-icons/md"

const Profile = () => {
    return (
        <>
            <div className={`${styles.containers} `}>
                <div className={`${styles.profiles} `}>
                    <div className="d-flex flex-column justify-content-center vh-50">
                        <div className={`${styles.content} text-center mt-4`}>Profile</div>
                        <div className={`${styles.contents} text-center mb-5`}>See your notifications for the latest updates</div>
                    </div>
                </div>                      
                <div className="mt-5 pt-5 mx-5 px-5">
                    <div className="d-flex flex-row align-items-center">
                        <Image src={people} width={70} height={70} alt="profile" className=" rounded-circle" />
                        <div className="mx-5">
                            <div>Syifa <HiOutlinePencil /></div>
                            <div>as Customer</div>
                        </div>                        
                    </div>
                </div>
                <div>
                    <Row className={`${styles.row} mt-4`}>
                        <Col xl={12}>
                            <div className="mx-5 px-5 mt-4">
                                <Card className={`${styles.cards} d-flex flex-row justify-content-between align-items-center `}>
                                    <div className="px-5 py-4">                                           
                                        <Card.Text>Gender</Card.Text>
                                        <Card.Title>Card Title</Card.Title>
                                    </div>                                            
                                    <div className=" px-5">Edit <HiOutlinePencil /></div>
                                </Card>                               
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className="mx-5 px-5">
                                <Card className={`${styles.cards} d-flex flex-row justify-content-between align-items-center `}>
                                    <div className="px-5 py-4">                                           
                                        <Card.Text>Your Email</Card.Text>
                                        <Card.Title>syifa@gamil.com</Card.Title>
                                    </div>                                            
                                    <div className=" px-5">Edit <HiOutlinePencil /></div>
                                </Card>                               
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className="mx-5 px-5">
                                <Card className={`${styles.cards} d-flex flex-row justify-content-between align-items-center `}>
                                    <div className="px-5 py-4">                                           
                                        <Card.Text>Store Description</Card.Text>
                                        <Card.Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Title>
                                    </div>                                            
                                    <div className=" px-5">Edit <HiOutlinePencil /></div>
                                </Card>                               
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="mt-4 mx-5 px-5 mb-5">
                    <Button className={`${styles.button} d-flex py-2`}>
                        <div className="px-2"><MdLogout /></div>
                        <span className="px-3">Logout</span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Profile