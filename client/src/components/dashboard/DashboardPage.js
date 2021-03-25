import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import SearchBar from "../shared/SearchBar";
import { useHistory } from "react-router-dom";
import DataTable from "../shared/DataTable";

const DashboardPage = ({ isAuth, logOut, user , projectData }) => {
    // if(isAuth===true){

    //     return <Redirect to={"/"} />
    // }

    const history = useHistory()

    const handleCreateBug = () => {
        console.log(history)
        history.push('/bug/create')
    }


    return (

        <Container>
            <h1 className="text-left">Project Title / All Bugs Reported by Me</h1>
            <Row>
                <Col md={10}>
                    <SearchBar />
                </Col>
                <Col md={2} className="d-flex mb-3">
                    <Button onClick={handleCreateBug}>+ Create New</Button>
                </Col>
            </Row>

            <DataTable projectData={projectData} />
        </Container>


    )
}

export default DashboardPage