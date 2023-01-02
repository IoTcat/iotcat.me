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
    seo: {
      description: 'Hey, I am IoTcat. A full-stack electrical and computer engineer, passionate about programming and system design..',
      image: 'https://cdn.yimian.xyz/iotcat/iotcat.png',
      url: 'https://iotcat.me/',
      keywords: 'iotcat, IoT, ECE, JSTS, cornell, liverpool, full-stack, engineer, 呓喵酱, 京アニ'
    },
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
    description: 'Hey, I am IoTcat. A full-stack IoT engineer..',
    subdescription: 'IoT / ECE / JSTS / Cornell / Liverpool / 京アニ',
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
        icon: 'key'
      },
      {
        href: 'https://t.me/iotcat',
        title: 'Telegram',
        icon: 'telegram'
      },
      {
        href: 'https://github.com/IoTcat',
        title: 'Github',
        icon: 'github'
      },
      {
        href: 'https://www.eee.dog/atom.xml',
        title: 'RSS',
        icon: 'rss'
      },
      {
        href: 'mailto:i@iotcat.me',
        title: 'Email: i@iotcat.me',
        icon: 'envelope'
      },
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IoTcat`,
        short_name: `IoTcat`,
        start_url: `/`,
        background_color: `#3b4154`,
        theme_color: `#3b4154`,
        display: `standalone`,
        icon: `static/img/iotcat.png`
      },
    },
    `gatsby-plugin-offline`
  ],
}
