import React from 'react'
import {Col, Row} from "react-bootstrap";
import NotificationPopup from "./NotificationPopup";
import { Link } from 'react-router-dom'

const SidebarItemRow = ({iconName, title, notificationCount, url}) => {

    return (
        <Row>
            <Col md={2} className="d-flex justify-content-center my-2">

                {<i className={`bi bi-${iconName}`} ></i>}
            </Col>
            <Col md={8} className="sidebar__text text-left d-flex align-items-center">
                {url ?
                    <Link to={url}>{title}</Link>
                    :
                    title
                }
            </Col>

            {
                notificationCount ?
                    <NotificationPopup notificationCount={notificationCount} />
                    :
                    null
            }
        </Row>
    )
}

export default SidebarItemRow