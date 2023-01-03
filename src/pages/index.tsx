import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Panel from "../components/panel"
import Logo from '../components/logo'
import Name from '../components/name'
import Hitokoto from "../components/hitokoto"
import Divider from "../components/divider"
import Description from "../components/description"
import Navi from "../components/navi"
import Naviblock from "../components/naviblock"
import Navitem from "../components/navitem"
import Footer from "../components/footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faKey, faRss } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { shaky } from '../styles/shaky.module.scss'

import { useSiteMetadata } from '../hooks/siteMetadata'

export { Head } from "../components/seo"

const Page = () => {

    const data = useSiteMetadata()
    const [backgroundImage, setBackGroundImage] = React.useState(data.background.default)
    const [leftLuckyClickTimes, setLeftLuckyClickTimes] = React.useState(data.logo.luckyClickTimes)


    const logoOnclick = ()=>{
        setBackGroundImage(data.background.refresh + '&t=' + new Date().valueOf())
        setLeftLuckyClickTimes(leftLuckyClickTimes-1)
    }
    return (
        <Panel background={backgroundImage} opacity={(leftLuckyClickTimes / data.logo.luckyClickTimes)} >
            <Logo src={data.logo.src} title={data.logo.title} onClick={logoOnclick} alt={data.logo.alt} />
            <Name href={data.name.href} title={data.name.title}>{data.name.name}</Name>
            <Hitokoto>{data.hitokoto[Math.floor(Math.random()*data.hitokoto.length)].value}</Hitokoto>
            <Divider/>
            <Description>{data.description}</Description>
            <Description type="sub">{data.subdescription}</Description>
            <Navi>
                <Naviblock type="button">
                    {data.buttons.map((button, index)=><Navitem key={index} href={button.href}>{button.name}</Navitem>)}            
                </Naviblock>
                <Naviblock type="social">
                    {data.socials.map((social, index)=>(
                        <Navitem key={index} href={social.href} title={social.title} target="_blank" >
                            <FontAwesomeIcon icon={[faRss, faComment, faEnvelope, faKey, faGithub, faTelegram].find(fa=>fa.iconName === social.icon)} />
                        </Navitem>
                    ))}
                </Naviblock>
            </Navi>
            <Footer>
                <p><OutboundLink target="_blank" title="Click to see Source Code!" href="https://github.com/IoTcat/iotcat.me">&copy; 2018-{new Date().getFullYear()} IoTcat</OutboundLink> | Powered By <OutboundLink target="_blank" href="https://github.com/gatsbyjs/gatsby">Gatsby</OutboundLink> & <OutboundLink href="https://ushio.yimian.xyz/" className={shaky}>Ushio</OutboundLink></p>
            </Footer>
        </Panel>
    )
}
export default Page