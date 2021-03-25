import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Image, Button, Container} from "react-bootstrap";
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Formik, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const EditBugPage = ({ user, loadProjectData }) => {
    const location = useLocation()
    const history = useHistory()
    const [bugDetails, setBugDetails] = useState({
        title: "",
        description:  "",
        type:  "",
        status:  "",
        priority:  ""})

    useEffect(()=>{
        // console.log(location)
        //location.state
        setBugDetails(location.state)
    },[location])

    const handleEdit = async (values) => {
        const token = localStorage.getItem('token')
        const res = await axios.put(`http://localhost:8080/bug/update/${bugDetails._id}`, values, {
            headers: {
                "x-auth-token": `Bearer ${token}`
            }
        })
        loadProjectData()
        // console.log(res)
        history.push('/')
    }

    const BugSchema = Yup.object().shape({
        title: Yup.string().required('Required')
    })

    console.log(bugDetails)

    return (

        <Container>
            <h2>Edit Bug</h2>
            <Formik
                enableReinitialize={true}
                initialValues={
                        {
                            title: bugDetails.title,
                            description: bugDetails.description,
                            type: bugDetails.type,
                            status: bugDetails.status,
                            priority: bugDetails.priority
                        }
                }
                validationSchema={BugSchema}
                onSubmit={  values =>  handleEdit(values)}
            >
                { ( { errors, touched, handleSubmit, handleChange, handleBlur, values } ) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col>
                                <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                    <Image src="https://www.placehold.it/130x130"></Image>
                                    <Button className="primary">Upload</Button>
                                </Row>
                            </Col>

                            <Col md={4} className="d-flex align-items-center">
                                <Form.Control name="title" placeholder="Title" value={values.title} onChange={handleChange} />
                                {errors.title && touched.title ? (
                                    <div className="text-danger">{errors.title}</div>
                                ) : null}

                            </Col>

                            <Col md={4} className="d-flex align-items-center justify-content-center">

                                <Form.Control
                                    name="type"
                                    as="select"
                                    value={values.type}
                                    onChange={handleChange}
                                    className="my-1 mr-sm-2"
                                    id="inlineFormCustomSelectPref"
                                    custom
                                >
                                    <option>Type</option>
                                    <option value="userInterface">User Interface</option>
                                    <option value="server">Server</option>
                                    <option value="functionalities">Functionalities Issue</option>
                                </Form.Control>

                                {/*<Field component="select" name="type">*/}
                                {/*    <option>Type</option>*/}
                                {/*    <option value="userInterface">User Interface</option>*/}
                                {/*    <option value="server">Server</option>*/}
                                {/*    <option value="functionalities">Functionalities Issue</option>*/}
                                {/*</Field>*/}
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={8}>
                                <Form.Control
                                    as="textarea"
                                    value={values.description}
                                    rows={5}
                                    name="description"
                                    placeholder="Write a short description of your bug here"
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col className="d-flex flex-column justify-content-around">
                                {/*<Field component="select" name="status">*/}
                                {/*    <option>Status</option>*/}
                                {/*    <option value="notStarted">Not Started</option>*/}
                                {/*    <option value="ongoing">Ongoing</option>*/}
                                {/*    <option value="underReview">Under Review</option>*/}
                                {/*    <option value="completed">Completed</option>*/}
                                {/*</Field>*/}
                                {/*<Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">*/}
                                {/*    Status*/}
                                {/*</Form.Label>*/}
                                <Form.Control
                                    name="status"
                                    as="select"
                                    value={values.status}
                                    onChange={handleChange}
                                    className="my-1 mr-sm-2"
                                    id="inlineFormCustomSelectPref"
                                    custom
                                >
                                    <option>Status</option>
                                    <option value="notStarted">Not Started</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="underReview">Under Review</option>
                                    <option value="completed">Completed</option>
                                </Form.Control>


                                {/*<Field component="select" name="priority">*/}
                                {/*    <option>Priority</option>*/}
                                {/*    <option value="low">Low</option>*/}
                                {/*    <option value="medium">Medium</option>*/}
                                {/*    <option value="high">High</option>*/}
                                {/*</Field>*/}

                                {/*<Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">*/}
                                {/*    Status*/}
                                {/*</Form.Label>*/}
                                <Form.Control
                                    name="priority"
                                    as="select"
                                    value={values.priority}
                                    onChange={handleChange}
                                    className="my-1 mr-sm-2"
                                    id="inlineFormCustomSelectPref"
                                    custom
                                >
                                        <option>Priority</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                </Form.Control>

                            </Col>
                        </Row>

                        <Button type="submit" >Edit</Button>
                    </Form>
                )}

            </Formik>
            <Link to="/">Back</Link>
        </Container>
    )
}

export default EditBugPage