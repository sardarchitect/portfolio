import React, { useState } from 'react'
import './_Nav.scss';
import './_nav_icon.scss';
import { useTrail, a, useSpring } from 'react-spring';

export const Nav = () => {
    const [showNav, setShowNav] = useState(false)
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: showNav ? 1 : 0
        },
        config: {
            duration: 1
        }
    })

    return (
        <nav>
            <div
                id="nav_icon"
                className={showNav ? "open" : null}
                onClick={() => setShowNav(!showNav)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="nav_title">
                ARVINDER SINGH
            </div>
            <div className="nav__wrapper" style={showNav ? { opacity: '100%' } : { opacity: '0%' }}>
                <div className="nav__main">
                    <Trail open={showNav}>
                        <div className="nav__item">Home</div>
                        <div className="nav__item">Architecture</div>
                        <div className="nav__item">Bio</div>
                        <div className="nav__item">Contact</div>
                    </Trail>
                </div>
                <a.div className="nav__footer" style={props}>
                    <img src="/icons/linkedin.png" alt="linkedin" />
                    <img src="/icons/instagram.png" alt="instagram" />
                    <img src="/icons/email.png" alt="email" />
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