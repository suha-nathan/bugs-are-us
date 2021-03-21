import React from 'react'
import Header from "./Header";
import {Button, Col, Container, Row} from "react-bootstrap";
import SearchBar from "./SearchBar";
import BugList from "./BugList";
import {Redirect, Route, useHistory } from "react-router-dom";
import TempHeader from "./TempHeader";
import Sidebar from "./Sidebar";
import DataTable from "./DataTable";


const DashboardPage = ({ isAuth, logOut }) => {
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
            <Header />
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

                        <DataTable />
                    </Container>
                </Col>

                {/*<BugList />*/}
            </Row>


        </>
    )
}

export default DashboardPage