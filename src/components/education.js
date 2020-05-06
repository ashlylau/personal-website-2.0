import React from "react"
import {Row, Col, Container, Media } from 'react-bootstrap'
import style from "../styles/education.module.css"
import { Link } from "gatsby"

import icl from "../images/logos/iclcrest.png"
import ri from "../images/logos/ri.png"
import SectionHeader from "./section-header"


const educationInfo = [
    {
        image: icl,
        title: 'Imperial College London',
        path: 'imperial',
        course: 'Computing (Artificial Intelligence)',
        date: '2017 - 2021'
    },
    {
        image: ri,
        title: 'Raffles Institution',
        path: 'raffles',
        course: 'Cambridge-Singapore GCE-A Levels',
        date: '2015 - 2016'
    },
]

export default function EducationSection() {
    return (
        <div>
            <SectionHeader props={{title:'EDUCATION', color: '#215A75'}} />
            <Container>
                <Row>
                {educationInfo.map((item) => <EducationItem props={item}/>)}
                </Row>
            </Container>
        </div>
    );
}

const EducationItem = ({props}) => (
    <Col sm={6}>
        <Link className='my-link' to={props.path}>
            <Media style={{marginLeft: `3rem`, marginRight: `3rem`}}>
                <div className={style.imageContainer}><img className={style.logo}
                src={props.image}
                alt={props.title}/></div>
                <Media.Body className={style.container}>
                    <p className='my-h2'>{props.title}</p>
                    <p className='my-body'>{props.course}</p>
                    <p className='my-tag'>{props.date}</p>
                </Media.Body>
            </Media>
        </Link>
    </Col>
);
