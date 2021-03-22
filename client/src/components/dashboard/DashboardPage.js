import React, { useState, useEffect } from 'react'
import Header from "../shared/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import SearchBar from "../shared/SearchBar";
import BugList from "./BugList";
import { useHistory } from "react-router-dom";
import TempHeader from "../shared/TempHeader";
import Sidebar from "../sidebar/Sidebar";
import DataTable from "../shared/DataTable";
import axios from "axios";


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
        <>
            <Header user={user} />
            <TempHeader logOut={logOut} />

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>

                <Col>
                    <Container>
                        <SearchBar />
                        <div className="d-flex mb-3">
                            <Button onClick={handleCreateBug}>+ Create New</Button>
                        </div>

                        <DataTable projectData={projectData} />
                    </Container>
                </Col>

                {/*<BugList />*/}
            </Row>


        </>
    )
}

export default DashboardPage