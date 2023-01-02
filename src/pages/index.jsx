import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelope, faKey, faRss } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'


import Panel from "../components/panel"
import Logo from '../components/logo'
import Name from '../components/name'
import Hitokoto from "../components/hitokoto"
import Divider from "../components/divider"
import Description from "../components/description"
import Navi from "../components/navi"
import Navibuttons from "../components/navibuttons"
import Navisocials from "../components/navisocials"
import Navitem from "../components/navitem"
import Footer from "../components/footer"



import { shaky } from '../styles/shaky.module.css'

export { Head } from "../components/head"

const Page = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        background {
                            default,
                            refresh
                        },
                        logo {
                            src,
                            title,
                            alt,
                            nft,
                            luckyClickTimes
                        },
                        name {
                            name,
                            href,
                            title
                        },
                        hitokoto {
                            value
                        },
                        description,
                        subdescription,
                        buttons {
                            name,
                            href
                        },
                        socials {
                            href,
                            title,
                            icon
                        }
                    }
                }
            }
        `
    ).site.siteMetadata

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
                <Navibuttons>
                    {data.buttons.map((button, index)=><Navitem key={index} href={button.href}>{button.name}</Navitem>)}            
                </Navibuttons>
                <Navisocials>
                    {data.socials.map((social, index)=>(
                        <Navitem key={index} href={social.href} title={social.title} target="_blank" >
                            <FontAwesomeIcon icon={[faRss, faComment, faEnvelope, faKey, faGithub, faTelegram].find(fa=>fa.iconName === social.icon)} />
                        </Navitem>
                    ))}
                </Navisocials>
            </Navi>
            <Footer>
                <p>&copy; 2018-{new Date().getFullYear()} IoTcat | Powered By <a href="https://github.com/gatsbyjs/gatsby"><span>Gatsby</span></a> & <a href="https://ushio.yimian.xyz/" className={shaky}>Ushio</a></p>
            </Footer>
        </Panel>
    )
}
export default Page