import React from 'react'
import './_Footer.scss';

export const Footer = () => {
    return (
        <footer>
            <div className="footer__content">
                <div className="footer__text">
                    <h2>THANKS FOR CHECKING OUT MY WORK. 
                        I AM CURRENTLY OPEN FOR FULL-TIME WORK IN ARCHITECTURE 
                        AND TECHNOLOGY AROUND THE BOSTON AREA. FEEL FREE TO 
                        CHECK OUT MY <a href="#">LINKEDIN</a>, AND <a href="#">INSTAGRAM</a>. 
                        OR SIMPLY REACH ME VIA <a href="#">EMAIL</a>.</h2>
                </div>
                <div className="footer__form">
                    <h2>SEND AN INQUIRY</h2>
                    <form>
                        <label>NAME</label>
                        <input />
                        <label>EMAIL</label>
                        <input />
                        <label>MESSAGE</label>
                        <textarea />
                        <button>SEND</button>
                    </form>
                </div>
            </div>
            <div className="footer__copyright">
                SARDARCHITECT - 2021
            </div>
        </footer>
    )
}