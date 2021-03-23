import React from 'react'
import '../../scss/_ProfilePic.scss'
import {Col, Row} from "react-bootstrap";

const ProfilePic = ({size, imageSource, isShowName}) => {

    return (
        <Row className="justify-content-center">
            <Col md={2} className="d-flex flex-column justify-content-center align-items-center">
                {/*<div className="profile-pic profile-pic-sm " style={{width: `${size}rem`, height: `${size}rem`, borderRadius: `${size/2}rem`}}>*/}
                    <img className="profile-pic profile-pic-sm " style={{width: `${size}rem`, height: `${size}rem`, borderRadius: `${size/2}rem`}} src={imageSource} alt=""/>
                {/*</div>*/}
                { isShowName && <div>Isaac</div> }
            </Col>

        </Row>
    )
}

export default ProfilePic