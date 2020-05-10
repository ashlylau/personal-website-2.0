import React from "react"
import {Row, Container } from 'react-bootstrap'

import SectionHeader from "../section-header"
import AboutItem from "../about-item"

import gymnastics from "../../images/about/ashly-getty.jpg"
import movies from "../../images/about/movies.jpg"
import doodles from "../../images/about/doodles.jpg"

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
        desc: 'A form of escapism perhaps?',
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
