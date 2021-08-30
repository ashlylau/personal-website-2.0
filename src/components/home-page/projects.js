import React from "react"
import {Row, Container } from 'react-bootstrap'

import SectionHeader from "../section-header"
import ProjectItem from "../project-item"

import cinect from "../../images/projects/cinect.png"
import charje from "../../images/projects/charje.png"
import stitchcall from "../../images/projects/stitch-call.png"


const projectInfo = [
    {
        image: cinect,
        title: 'Cinect',
        path: '/projects/cinect',
        desc: 'Social film discovery',
    },
    {
        image: charje,
        title: 'CHARJE',
        path: '/projects/charje',
        desc: 'An agent-based prediction marketplace implemented on a blockchain',
    },
    {
        image: stitchcall,
        title: 'Stitch Call',
        path: '/projects/stitch-call',
        desc: 'A non-conventional video call platform',
    }
]

export default function ProjectsSection() {
    return (
        <div>
            <SectionHeader props={{title:'PROJECTS', color: '#30838D', url: '/projects'}} />
            <Container>
                <Row>
                {projectInfo.map((item) => <ProjectItem props={item}/>)}
                </Row>
            </Container>
        </div>
    );
}
