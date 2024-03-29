import React from "react"

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

import { useSiteMetadata } from '../hooks/useSiteMetadata'

export { Head } from "../components/seo"

const Page = () => {

    const data = useSiteMetadata()
    const [backgroundImage, setBackGroundImage] = React.useState(data.background.default)
    const [logoClickedTimes, setLogoClickedTimes] = React.useState(0)
    const [hitokoto, setHitokoto] = React.useState(data.hitokoto[Math.floor(Math.random()*data.hitokoto.length)].value)

    const logoOnclick = ({ autoClick = false })=>{
        setBackGroundImage(data.background.refresh + '&t=' + new Date().valueOf())
        setLogoClickedTimes(logoClickedTimes+1)
            console.log(autoClick)
        if(!autoClick){
            typeof window !== "undefined" && window.hasOwnProperty('dataLayer') && window.dataLayer.push({
                event: 'logo-click',
                logoClickedTimes: logoClickedTimes + 1
            })
            setHitokoto(data.hitokoto[Math.floor(Math.random()*data.hitokoto.length)].value)
        }else{
            setHitokoto('👆 Click Me!!')
        }
    }

    React.useEffect(()=>{

        let timer = null;
        if(!logoClickedTimes) timer = setTimeout(()=>{
            logoOnclick({ autoClick: true })
        }, data.demoDelay);
        return ()=>clearTimeout(timer)
    }, [logoClickedTimes])

    return (
        <Panel background={backgroundImage} opacity={((data.logo.luckyClickTimes - logoClickedTimes) / data.logo.luckyClickTimes)} >
            <Logo src={data.logo.src} title={data.logo.title} onClick={logoOnclick} alt={data.logo.alt} rotateCoefficient={logoClickedTimes} />
            <Name title={data.name.title} onClick={logoOnclick}>{data.name.name}</Name>
            <Hitokoto>{hitokoto}</Hitokoto>
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
                <p><a target="_blank" title="Click to see Source Code!" href="https://github.com/IoTcat/iotcat.me">&copy; 2018-{new Date().getFullYear()} IoTcat</a> | Powered By <a target="_blank" href="https://github.com/gatsbyjs/gatsby">Gatsby</a> & <a href="https://ushio.yimian.xyz/" className={shaky}>Ushio</a></p>
            </Footer>
        </Panel>
    )
}
export default Page