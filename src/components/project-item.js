import React from "react"
import { Col } from "react-bootstrap"
import { Link } from "gatsby"

import Image from "./image"
import style from "../styles/projects.module.css"

const ProjectItem = ({props}) => (
    <Col md={4}>
        <Link className='my-link' to={props.path}>
            <Image props={props}/>
            <div className={style.container}>
                <p className='my-h2'>{props.title}</p>
                <p className='my-body'>{props.desc}</p>
            </div>
        </Link>
    </Col>
);

export default ProjectItem