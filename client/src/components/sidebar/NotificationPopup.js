import React from 'react'
import { Col } from "react-bootstrap";

const NotificationPopup = ({ notificationCount }) => {

    return (
        <Col md={2}>
            <div className="notification-popup__container">
                {notificationCount}
            </div>

        </Col>
    )
}

export default NotificationPopup