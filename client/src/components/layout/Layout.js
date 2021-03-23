import React from 'react'
import Header from "../shared/Header";
import TempHeader from "../shared/TempHeader";
import {Button, Col, Container, Row} from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import SearchBar from "../shared/SearchBar";
import DataTable from "../shared/DataTable";

const Layout = ({ user, logOut, children }) => {

    return (
        <>
            <Header user={user} logOut={logOut} />
            <TempHeader logOut={logOut} />

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>

               <Col>{children}</Col>

                {/*<BugList />*/}
            </Row>


        </>
    )
}

export default Layout