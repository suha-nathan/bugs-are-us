import React from 'react'
import {Col, Row} from "react-bootstrap";

const SidebarTitleRow = ({title}) => {

    return (
        <Row className="my-2">
            <Col className="sidebar__title text-left">
                {title}
            </Col>
            <Col md={1}>
                <i className="bi bi-three-dots-vertical"></i>
            </Col>
        </Row>
    )
}

export default SidebarTitleRow