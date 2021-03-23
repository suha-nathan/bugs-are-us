import React, {useEffect, useState} from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import CommentInputRow from "./CommentInputRow";
import ProfilePic from "../shared/ProfilePic";
import {Row, Col, Container, Button} from "react-bootstrap"
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";
import BugInfo from "./BugInfo"
import CommentList from "./CommentList";
import axios from "axios";

const BugDetailsPage = ({ projectData, user, loadProjectData, logOut }) => {

    const history = useHistory()
    let { id } = useParams()

    const [bugDetails, setBugDetails] = useState({})
    const [isEditModeOnArray, setIsEditModeOnArray] = useState([])

    useEffect(() => {
        loadBugDetails()
        console.log(bugDetails)
        console.log(user)
    },[projectData])

    function loadBugDetails() {
        const data = projectData.data.find( bug  => bug._id == id)
        setBugDetails(data)

    }

    async function handleDeleteBug() {

        try {
            await axios.delete(`http://localhost:8080/bug/delete/${bugDetails._id}`, {
                headers: {
                    'x-auth-token': `Bearer ${localStorage.getItem('token')}`
                }
            })
        } catch(e) {
            console.log(e)
        }

        loadProjectData()
        history.push('/')

    }

    return (
        <div>
            <Header user={user} logOut={logOut}/>

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>


                <Col>
                    <Container>
                        <Row>

                            <Col md={{ span: 4, offset: 4 }}>
                                <h2>Bug Details Page</h2>
                                <p>ID: {id}</p>
                            </Col>
                            <Col className="d-flex flex-column px-5">
                                <Button variant="success" className="my-3">Edit</Button>
                                <Button variant="danger" onClick={handleDeleteBug}>Delete</Button>
                            </Col>
                        </Row>

                        <Row className="px-4">
                            <ProfilePic size={5}/>
                        </Row>

                        <h4 className="text-left">{bugDetails?.title}</h4>
                        <Link to="/" exact>Back</Link>
                        <BugInfo bugDetails={bugDetails}/>

                        <CommentList
                            bugDetails={bugDetails}
                            user={user}
                            loadProjectData={loadProjectData}
                            isEditModeOnArray={isEditModeOnArray}
                            setIsEditModeOnArray={setIsEditModeOnArray}
                        />

                        <CommentInputRow
                            bugDetails={bugDetails}
                            user={user}
                            loadProjectData={loadProjectData}
                            isEditModeOnArray={isEditModeOnArray}
                            setIsEditModeOnArray={setIsEditModeOnArray}
                        />
                    </Container>

                </Col>
            </Row>


        </div>
    )
}

export default BugDetailsPage