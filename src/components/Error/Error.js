import React from "react"
import css from './Error.module.css'

export const Error = () =>{
    return (
        <div className={css.errorContainer}>
            <h1 className={css.title}>Ooops! Something went wrong ...</h1>
            <h2>Try again later</h2>
            <img src="https://t3.ftcdn.net/jpg/00/17/33/48/240_F_17334844_6HZ38InmFwJMeimVpHtZmih2XWKvBhC8.jpg" alt="error" width={700}/>
        </div>)
}
