/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: 'IoTcat',
    favicon: 'https://cdn.yimian.xyz/iotcat/iotcat.ico',
    background: {
      default: '/img/background.jpg',
      refresh: 'https://api.yimian.xyz/img/?type=wallpaper',
    },
    logo: {
      src: 'https://cdn.yimian.xyz/iotcat/iotcat.png',
      title: 'Click Me!!',
      alt: "IoTcat's Logo",
      luckyClickTimes: 7,
      nft: 'https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/24781504910812061012422952521196788119650821291466949788480637814428762374145'
    },
    name: {
      name: 'IoTcat',
      href: '#',
      title: 'hahahahahah'
    },
    hitokoto: [
      {
        value: '『!!!∑(ﾟДﾟノ)』'
      },
      {
        value: '٩(๑´0`๑)۶'
      },
      {
        value: '╭(●｀∀´●)╯'
      },
      {
        value: '(｢･ω･)｢'
      },
      {
        value: '( ¯▽¯；) '
      },
      {
        value: '=≡Σ((( つ•̀ω•́)つ'
      },
      {
        value: '╭(′▽`)╭(′▽`)╯'
      },
      {
        value: '( ´◔ ‸◔`)'
      },
      {
        value: ' ╮(～▽～)╭'
      },
      {
        value: ' (●’◡’●)ﾉ '
      },
      {
        value: '♪（＾∀＾●）ﾉｼ '
      }
    ],
    description: 'Hey, I am IoTcat. A full stack IoT engineer..',
    subdescription: 'IoT / ACG / JSTS / Cornell / Liverpool / 京アニ',
    buttons: [
      {
          name: 'Blog',
          href: 'https://www.eee.dog/'
      },
      {
          name: 'About',
          href: 'https://yimian.xyz/'
      }
    ],
    socials: [
      {
        href: 'https://keys.openpgp.org/vks/v1/by-fingerprint/C0D87F01EE765A2287531F2FDBD73FCA75D4768B',
        title: 'PGP Public Key',
        icon: 'faKey'
      },
      {
        href: 'https://t.me/iotcat',
        title: 'Telegram',
        icon: 'faTelegram'
      },
      {
        href: 'https://github.com/IoTcat',
        title: 'Github',
        icon: 'faGithub'
      },
      {
        href: 'https://www.eee.dog/atom.xml',
        title: 'RSS',
        icon: 'faRss'
      },
      {
        href: 'mailto:i@iotcat.me',
        title: 'Email: i@iotcat.me',
        icon: 'faEnvelope'
      },
    ]
  },
  plugins: [],
}
