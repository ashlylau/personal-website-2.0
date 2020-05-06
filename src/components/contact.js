import React from "react"
import { Container, Media } from 'react-bootstrap'
import style from "../styles/contact.module.css"
import SectionHeader from "./section-header"


import me from "../images/about/me.jpg"

export default function ContactSection() {
    return (
        <div>
            <SectionHeader props={{title:'CONTACT', color: '#D9A400'}} />
            <Container>
                <Media className={style.mediaContainer}>
                    <img className={style.image}
                    src={me}
                    alt='hey im ashly'/>
                    <Media.Body className={style.container}>
                        <p className='my-h3' style={{color: '#FFDA66'}}>Let's work together!</p>
                        <p className='my-h2'><a className='my-link' href='mailto: ashlylau@gmail.com'>EMAIL</a></p>
                        <p className='my-h2'><a className='my-link' href='https://www.linkedin.com/in/ashly-lau/'>LINKEDIN</a></p>
                        <p className='my-h2'><a className='my-link' href='https://github.com/ashlylau'>GITHUB</a></p>
                        <p className='my-h2'><a className='my-link' href="/components/AshlyResume.pdf" download="AshlyLauResume.pdf">RESUME</a></p>
                    </Media.Body>
                </Media>
            </Container>
        </div>
    );
}
