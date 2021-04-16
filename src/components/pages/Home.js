import React from 'react'
import { Link } from 'react-router-dom';
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
                ARTIFICIAL INTELLIGENCE AND ARCHITECTURE ARE SEEING AN INTERPLAY AKIN TO THE
                ADVANCEMENTS OF COMPUTER MODELING IN THE 80S. WE ARE CURRENTLY AT AN EARLY 
                STAGE BUT THIS TIME, THE TECHNOLOGY IS MOVING AT NECK-BREAKING SPEEDS. 
                AI'S ROLE IN ARCHITECTURE IS INEVITABLE, AND MY CURRENT RESEARCH DEALS 
                WITH HOW TO MAKE SURE ARCHITECTS ARE THE ONES STEERING THIS REVOLUTION.
                PLEASE FEEL FREE TO CHECK OUT MY <Link to="#">CURRENT RESEARCH</Link> AND MY <Link to="/bio">BIO</Link> TO KNOW MORE.
            </div>
        </div>
    )
}