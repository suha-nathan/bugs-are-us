import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import CommentInputRow from "./CommentInputRow";
import ProfilePic from "../shared/ProfilePic";
import {Row, Col, Container} from "react-bootstrap"
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";
import CommentCard from "./CommentCard";
import projectMockData from "../../lib/projectMockData"
import BugInfo from "./BugInfo"
import CommentList from "./CommentList";

const BugDetailsPage = ({ projectData, user, loadProjectData }) => {

    let { id } = useParams()

    const [bugDetails, setBugDetails] = useState({})


    useEffect(() => {
        loadBugDetails()
        console.log(bugDetails)
        console.log(user)
    },[projectData])

    function loadBugDetails() {
        const data = projectData.data.find( bug  => bug._id == id)
        setBugDetails(data)

    }



    return (
        <div>
            <Header user={user}/>

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>


                <Col>
                    <Container>
                        <h2>Bug Details Page</h2>
                        <p>ID: {id}</p>
                        <ProfilePic size={5}/>
                        <h4 className="text-left">{bugDetails?.title}</h4>
                        <Link to="/" exact>Back</Link>
                        <BugInfo bugDetails={bugDetails}/>

                        <CommentList
                            bugDetails={bugDetails}
                            user={user}
                            loadProjectData={loadProjectData}
                        />

                        <CommentInputRow
                            bugDetails={bugDetails}
                            user={user}
                            loadProjectData={loadProjectData}
                        />
                    </Container>

                </Col>
            </Row>


        </div>
    )
}

export default BugDetailsPage