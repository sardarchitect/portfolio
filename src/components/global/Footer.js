import React from 'react'
import './_Footer.scss';

export const Footer = () => {
    return (
        <footer>
            <div className="footer__content">
                <div className="footer__text">
                    <h2>Thanks for checking out my work. I am currently open for full-time work within architecture and technology.
            Feel free to check out my LinkedIn, and Instagram. Or simply reach me via Email.</h2>
                </div>
                <div className="footer__form">
                    <h2>Contact Me</h2>
                    <form>
                        <input placeholder="Your Name" />
                        <input placeholder="Your Email" />
                        <textarea placeholder="Your Message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <div className="footer__copyright">
                Sardarchitect - 2021
            </div>
        </footer>
    )
}