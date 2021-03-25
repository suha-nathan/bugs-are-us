import React from 'react'
import Header from "../shared/Header";
import { Col, Row} from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";


const Layout = ({ user, logOut, children, projectData, allProjects }) => {

    return (
        <>
            <Header user={user} logOut={logOut} />
            {/*<TempHeader logOut={logOut} />*/}

            <Row>
                <Col md={2}>
                    <Sidebar projectData={projectData} allProjects={allProjects}/>
                </Col>

               <Col className="m-3">
                   {children}
               </Col>

            </Row>


        </>
    )
}

export default Layout