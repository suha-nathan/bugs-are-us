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

const BugDetailsPage = (props) => {

    let { id } = useParams()

    const [bugDetails, setBugDetails] = useState({})

    useEffect(() => {
        loadBugDetails()
        console.log(bugDetails)
    })

    const loadBugDetails = () => {
        const data = projectMockData[0].bugs.find( bug  => bug.id == id)
        setBugDetails(data)
    }

    return (
        <div>
            <Header />

            <ProfilePic />


            <Row>


                <Col md={2}>
                    <Sidebar />
                </Col>

                <Col>
                    <Container>
                        <h2>Bug Details Page</h2>
                        <p>ID: {id}</p>
                        <h4 className="text-left">{bugDetails?.title}</h4>
                        <Link to="/" exact>Back</Link>
                        <BugInfo bugDetails={bugDetails}/>

                        <CommentList comments={bugDetails?.comments}/>

                        <CommentInputRow />
                    </Container>

                </Col>
            </Row>


        </div>
    )
}

export default BugDetailsPage