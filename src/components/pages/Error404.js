import React from 'react'
import './_Error404.scss';

export const Error404 = () => {
    return(
        <div className="Error404">
            <h1>ERROR 404</h1>
            <p>The page you are looking for no longer exists. Back to the <a href='/'><b>Homepage</b></a></p>
        </div>
    )
}