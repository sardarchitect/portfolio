import React from 'react'
import './_Error404.scss';

export const Error404 = () => {
    return(
        <div className="Error404">
            <h1>ERROR 404</h1>
            <p>THE PAGE YOU ARE LOOKING FOR NO LONGER EXISTS. BACK TO THE <a href='/'><b>HOMEPAGE</b></a></p>
        </div>
    )
}