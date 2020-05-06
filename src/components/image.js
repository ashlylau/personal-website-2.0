import React from "react"
import style from "../styles/image-thumbnail.module.css"

const Image = ({props}) => {
  return (
  <div className={style.imageContainer}>
    <img className={style.image}
    src={props.image}
    alt={props.title}/>
  </div>)
}

export default Image