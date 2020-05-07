import React from "react"
import {Row, Col, Container } from 'react-bootstrap'
import { Link } from "gatsby"

import style from "../../styles/experience.module.css"
import SectionHeader from "../section-header"

import googleLogo from "../../images/logos/googlelogo.png"
import imperialLogo from "../../images/logos/imperial.jpg"
import hpLogo from "../../images/logos/hplogo.png"

const experienceInfo = [
    {
        image: googleLogo,
        title: 'STEP Intern',
        path: 'google-step',
        company: 'Google',
        date: 'JUL 2019 - SEP 2019'
    },
    {
        image: imperialLogo,
        title: 'Teaching Assistant',
        path: 'imperial-ta',
        company: 'Imperial College',
        date: 'OCT 2019 - MAR 2020'
    },
    {
        image: hpLogo,
        title: 'Software R&D Intern',
        path: 'hp',
        company: 'HP Inc.',
        date: 'JUL 2018 - SEP 2018'
    }
]

export default function ExperienceSection() {
    return (
        <div>
            <SectionHeader props={{title:'EXPERIENCE', color: '#92BAAA'}} />
            <Container>
                <Row>
                {experienceInfo.map((item) => <LogoItem props={item}/>)}
                </Row>
            </Container>
        </div>
    );
}

const LogoItem = ({props}) => (
    <Col sm={4}>
        <Link className='my-link' to={props.path}>
            <div className={style.imageContainer}>
                <img className={style.logo}
                src={props.image}
                alt={props.title}/>
            </div>
            <div className={style.container}>
                <p className='my-h2'>{props.title}</p>
                <p className='my-body'>{props.company}</p>
                <p className='my-tag'>{props.date}</p>
            </div>
        </Link>
    </Col>
);
