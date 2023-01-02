import * as React from "react"

import { 
panel_cover, 
panel_cover__overlay,
panel_main,
panel_main__inner,
panel_main__content,
} from '../styles/panel.module.scss'


const Panel = ({ children, background, opacity }) => (
    <div className={panel_cover} style={{ backgroundImage: `url(${background})`}}>
        <div className={panel_main}>
            <div className={panel_main__inner}>
                <div className={panel_main__content}>{children}</div>
            </div>
        </div>
        <div className={panel_cover__overlay} style={{ opacity: typeof opacity === "number" ? opacity : 1 }}></div>
    </div>
)
export default Panel