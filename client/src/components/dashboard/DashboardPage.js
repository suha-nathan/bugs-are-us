import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import SearchBar from "../shared/SearchBar";
import { useHistory } from "react-router-dom";
import DataTable from "../shared/DataTable";

const DashboardPage = ({ user , loadProjectData, projectData, filteredData, setFilteredData }) => {


    const history = useHistory()



    useEffect(()=>{
        console.log(filteredData)
    },[])

    const handleCreateBug = () => {
        history.push('/bug/create')
    }

    function handleButtonFilter(e){

        if(e.target.name === "user"){
            const newData = projectData.filter( bug => bug.user._id === user._id )
            setFilteredData([...newData])
        }
        if(e.target.name === "all"){
            setFilteredData([...projectData])
        }
    }

    function handleSearch(e) {
        let filteredData = projectData.filter( bug => bug.title.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(filteredData)


        setFilteredData([...filteredData])

    }

    return (

        <Container>
            <div>
                <Button  variant="link" name="user" onClick={ e => handleButtonFilter(e) } >Reported by me</Button>
                <Button variant="link" name="all" onClick={ e => handleButtonFilter(e) } >All Bugs</Button>
            </div>


            <h1 className="text-left">Project Title / All Bugs Reported by Me</h1>
            <Row>
                <Col md={10}>
                    <SearchBar handleSearch={handleSearch}/>
                </Col>
                <Col md={2} className="d-flex mb-3">
                    <Button onClick={handleCreateBug}>+ Create New</Button>
                </Col>
            </Row>

                <DataTable data={filteredData} />


        </Container>


    )
}

export default DashboardPage