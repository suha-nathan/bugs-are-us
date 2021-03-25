import React, { useState, useEffect } from 'react'
import {Field, Formik} from "formik";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

const CreateProjectPage = ({ user, loadProjectData}) => {

    const history = useHistory()

    const [users, setUsers] = useState([])
    const [teamLeads, setTeamLeads] = useState([])

    const handleCreateProject = async (values) => {
        const token = localStorage.getItem('token')
        console.log(values)
        const res = await axios.post('http://localhost:8080/project/create', {...values, createdBy: user._id}, {
            headers: {
                "x-auth-token": `Bearer ${token}`
            }
        })

        console.log(res)
        history.push('/projects')
    }

    useEffect(() => {
        loadAllUsers()

    },[])
    async function loadAllUsers() {
        const res = await axios.get('http://localhost:8080/user/all', {
            headers: {
                'x-auth-token': `Bearer ${localStorage.getItem('token')}`
            }
        })

        const users = res.data.data

        setUsers(users)
        setTeamLeads(users.filter( user => user.role === 'teamLead'))
    }

    const projectSchema = Yup.object().shape({
        title: Yup.string().required('Required')
    })

    return (
        <Container>
            <h2>Create Project</h2>
            <Formik
                enableReinitialize={true}
                initialValues={
                    {
                        title: '',
                        description: '',
                        categories: '',
                        teamLead: '',
                        members: ''
                    }

                }
                validationSchema={projectSchema}
                onSubmit={  values =>  handleCreateProject(values)}
            >

                { ( { errors, touched, handleSubmit, handleChange, handleBlur } ) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">


                            <Col md={4} className="d-flex align-items-center">
                                <Form.Control name="title" placeholder="Title" onChange={handleChange} />
                                {errors.title && touched.title ? (
                                    <div className="text-danger">{errors.title}</div>
                                ) : null}

                            </Col>



                            <Col md={4} className="d-flex align-items-center justify-content-center">
                                <Field component="select" name="categories">
                                    <option>Categories</option>
                                    <option value="notStarted">Not Started</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="underReview">Under Review</option>
                                    <option value="completed">Completed</option>
                                </Field>
                            </Col>

                            <Col md={4} className="d-flex align-items-center">
                                <Field component="select" name="teamLead">
                                    <option>Team Lead</option>
                                    { teamLeads?.map( teamLead => (
                                        <option value={`${teamLead._id}`}>{teamLead.firstName}</option>
                                    ))}
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



                                <Field component="select" name="members">
                                    <option>Team Members</option>
                                    { users?.map( user => (
                                        <option value={`${user._id}`}>{user.firstName}</option>
                                    ))}

                                </Field>
                            </Col>
                        </Row>

                        <Button type="submit" >Create</Button>
                    </Form>
                )}

            </Formik>
            <Link to="/">Back</Link>
        </Container>
    )
}

export default CreateProjectPage