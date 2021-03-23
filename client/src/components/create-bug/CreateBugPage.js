import React, { useState } from 'react'
import { Form, Row, Col, Image, Button, Container} from "react-bootstrap";
import Header from "../shared/Header";
import Sidebar from "../sidebar/Sidebar";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const CreateBugPage = ({ user, loadProjectData }) => {

    const history = useHistory()
    const handleCreateBug = async (values) => {
        const token = localStorage.getItem('token')

        const res = await axios.post('http://localhost:8080/bug/create', {...values, user: user._id}, {
            headers: {
                "x-auth-token": `Bearer ${token}`
            }
        })
        loadProjectData()
        console.log(res)
        history.push('/')
    }

    const BugSchema = Yup.object().shape({
        title: Yup.string().required('Required')
    })

    return (
        <div>
            <Header />

            <Row>
                <Col md={2}>
                    <Sidebar />
                </Col>
                <Col>
                    <Container>
                        <h2>Create Bug</h2>
                        <Formik
                            enableReinitialize={true}
                            initialValues={
                                    {
                                        title: '',
                                        description: '',
                                        type: '',
                                        status: '',
                                        priority: ''
                                    }

                            }
                            validationSchema={BugSchema}
                            onSubmit={  values =>  handleCreateBug(values)}
                        >

                            { ( { errors, touched, handleSubmit, handleChange, handleBlur } ) => (
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Col>
                                            <Row className="d-flex justify-content-between align-items-center px-5 h-100">
                                                <Image src="https://www.placehold.it/130x130"></Image>
                                                <Button className="primary">Upload</Button>
                                            </Row>
                                        </Col>

                                        <Col md={4} className="d-flex align-items-center">
                                            <Form.Control name="title" placeholder="Title" onChange={handleChange} />
                                            {errors.title && touched.title ? (
                                                <div className="text-danger">{errors.title}</div>
                                            ) : null}

                                        </Col>

                                        <Col md={4} className="d-flex align-items-center justify-content-center">
                                            <Field component="select" name="type">
                                                <option>Type</option>
                                                <option value="userInterface">User Interface</option>
                                                <option value="server">Server</option>
                                                <option value="functionalities">Functionalities Issue</option>
                                            </Field>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col md={8}>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="description"
                                                placeholder="Write a short description of your bug here"
                                                onChange={handleChange}
                                            />
                                        </Col>

                                        <Col className="d-flex flex-column justify-content-around">
                                            <Field component="select" name="status">
                                                <option>Status</option>
                                                <option value="notStarted">Not Started</option>
                                                <option value="ongoing">Ongoing</option>
                                                <option value="underReview">Under Review</option>
                                                <option value="completed">Completed</option>
                                            </Field>


                                            <Field component="select" name="priority">
                                                <option>Priority</option>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </Field>
                                        </Col>
                                    </Row>

                                    <Button type="submit" >Create</Button>
                                </Form>
                            )}

                        </Formik>
                        <Link to="/">Back</Link>
                    </Container>
                </Col>
            </Row>

        </div>
    )
}

export default CreateBugPage