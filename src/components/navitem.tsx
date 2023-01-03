import * as React from 'react'
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Navitem = ({ children, ...others }) => (
    <li>
        <OutboundLink {...others}>
            {children}
        </OutboundLink>
    </li>
)

export default Navitem