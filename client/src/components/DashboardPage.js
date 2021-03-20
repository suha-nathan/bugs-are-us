import React from 'react'
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";
import SearchBar from "./SearchBar";
import BugList from "./BugList";
import {Route} from "react-router-dom";
import TempHeader from "./TempHeader";
import Sidebar from "./Sidebar";

const DashboardPage = (props) => {

    return (
        <>

            <Header />
            <TempHeader />
            <SearchBar />
            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <BugList />
            </Row>


        </>
    )
}

export default DashboardPage