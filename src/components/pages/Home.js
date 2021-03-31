import React from 'react'
import './_Home.scss';

export const Home = () => {
    return (
        <div className="Home">
            <div className="Home__title">
                <h1>ARCHITECTURE</h1>
                <h1>+</h1>
                <h1>ARTIFICIAL INTELLIGENCE</h1>
            </div>
            <div className="Home__subtitle">
                <h2>PORTFOLIO - 21</h2>
            </div>
            <div className="Home__text">
                {
                (`Artificial Intelligence and Architecture are seeing an interplay akin to the advancements of computer modeling in the 80s. We are currently at an early stage but this time, the technology is moving at neck-breaking speeds. AI's role in architecture is inevitable, and my current research deals with how to make sure architects are the ones steering this revolution.
                    Please feel free to check out my current project and CV to know more.`).toUpperCase()
                }
            </div>
        </div>
    )
}