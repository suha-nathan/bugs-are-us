import React from 'react'
import {Col, Row} from "react-bootstrap";

const SidebarItemRow = ({iconName, title, notificationCount}) => {

    return (
        <Row>
            <Col md={2} className="d-flex justify-content-center my-1">

                {<i className={`bi bi-${iconName}`} ></i>}
            </Col>
            <Col md={8} className="text-left">
                {title}
            </Col>
            <Col md={2}>
                <div>{notificationCount}</div>
            </Col>
        </Row>
    )
}

export default SidebarItemRow