import React from 'react'
import {Form, Button, InputGroup, Container} from "react-bootstrap";

const SearchBar = (props) => {

    return (
        <Container className="mb-3">
            <InputGroup>

                <InputGroup.Prepend>
                    <Button variant="light" className="border border-match-input"><i className="bi bi-search"></i></Button>
                </InputGroup.Prepend>
                <Form.Control name="searchTerm" placeholder="Search bugs by keyword" />

            </InputGroup>

        </Container>
    )
}

export default SearchBar