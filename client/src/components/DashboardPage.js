import React from 'react'
import Header from "./Header";
import {Col, Container, Row} from "react-bootstrap";
import SearchBar from "./SearchBar";
import BugList from "./BugList";
import {Route} from "react-router-dom";
import TempHeader from "./TempHeader";

const DashboardPage = (props) => {

    return (
        <>


            <TempHeader />
            <SearchBar />
            <Row>
                <Col md={2}>
                    A sidebar or something
                </Col>
                <BugList />
            </Row>


        </>
    )
}

export default DashboardPage