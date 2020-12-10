import React from 'react'
import { useParams } from 'react-router-dom'

export const WorkPage = () => {

    let {id} = useParams();

    return(
        <div>
            {id}
            Title
            Year
            Text
            Images
            Images
            Projects
        </div>
    )
}