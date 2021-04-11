// MODULE IMPORTS
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useTrail, a, useSpring } from 'react-spring';
// COMPONENT IMPORTS
// STYLE IMPORTS
import './_Nav.scss';
import './_nav_icon.scss';

export const Nav = () => {
    const [showNav, setShowNav] = useState(false)
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: showNav ? 1 : 0
        }
    })

    return (
        <nav>
            <div className="nav__header">
                <div
                    id="nav_icon"
                    className={showNav ? "open" : null}
                    onClick={() => setShowNav(!showNav)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a className="nav_title">
                    ARVINDER SINGH
            </a>
            </div>
            <div className={showNav ? "nav__content" : "nav__content__hidden"}>
                <div className="nav__main">
                    <Trail open={showNav}>
                        <Link to="/" className="nav__item"><h1 onClick={() => setShowNav(false)}>HOME</h1></Link>
                        <Link to="/" className="nav__item"><h1 onClick={() => setShowNav(false)}>WORK</h1></Link>
                        <Link to="/bio" className="nav__item"><h1 onClick={() => setShowNav(false)}>BIO</h1></Link>
                        <Link to="/" className="nav__item"><h1 onClick={() => setShowNav(false)}>CONTACT</h1></Link>
                    </Trail>
                </div>
                <a.div className="nav__footer" style={props}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
                </a.div>
            </div>
        </nav>
    )
}

function Trail({ open, children, ...props }) {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 10, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 70 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        <div {...props}>
            <div>
                {trail.map(({ x, height, ...rest }, index) => (
                    <a.div
                        key={items[index]}
                        className="trails-text"
                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                        <a.div style={{ height }}>{items[index]}</a.div>
                    </a.div>
                ))}
            </div>
        </div>
    )
}