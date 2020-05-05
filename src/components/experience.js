import React from "react"
import {Row, Col, Container } from 'react-bootstrap'

class ExperienceSection extends React.Component {
    render() {
        return (
            <div>
            <h2>EXPERIENCE</h2>
            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default ExperienceSection