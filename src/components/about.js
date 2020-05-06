import React from "react"
import {Row, Col, Container } from 'react-bootstrap'
import style from "../styles/about.module.css"
import SectionHeader from "./section-header"
import { Link } from "gatsby"

import gymnastics from "../images/about/ashly-getty.jpg"
import movies from "../images/about/movies.jpg"
import doodles from "../images/about/doodles.jpg"



const aboutInfo = [
    {
        image: gymnastics,
        title: 'Gymnastics',
        path: 'about/gymnastics',
        desc: 'Another life',
    },
    {
        image: movies,
        title: 'Movies',
        path: 'about/movies',
        desc: 'I\'m a bit of a film buff',
    },
    {
        image: doodles,
        title: 'Doodles',
        path: 'about/doodles',
        desc: 'I get bored easily',
    }
]

export default function AboutSection() {
    return (
    <div>
        <SectionHeader props={{title:'ABOUT', color: '#3598C1'}} />
        <Container>
            <Row>
            {aboutInfo.map((item) => <AboutItem props={item}/>)}
            </Row>
        </Container>
    </div>
    );
}

const AboutItem = ({props}) => (
    <Col sm={4} >
        <Link className='my-link' to={props.path}>
            <img className={style.about}
            src={props.image}
            alt={props.title}/>
            <div className={style.container}>
                <p className='my-h2'>{props.title}</p>
                <p className='my-body'>{props.desc}</p>
            </div>
        </Link>
    </Col>
);
