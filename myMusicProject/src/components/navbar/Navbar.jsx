import React from "react"
import Logo1 from '/images/logo1.png'

export default function NavBar() {
    return (
        <nav>
            <img
                className="nav-logo"
                src={Logo1}
                alt=""
            />
        </nav>
    )
}