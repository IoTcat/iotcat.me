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
    demoDelay: 12000,
    seo: {
      description: "Hi, I'm an Electrical and Computer Engineer skilled in full-stack dev, programming and system design, passionate about IoT, ML & distributed systems.",
      image: 'https://cdn.yimian.xyz/iotcat/iotcat.png',
      image_og: 'https://cdn.yimian.xyz/iotcat/iotcat_og.png',
      url: 'https://iotcat.me/',
      keywords: 'iotcat, IoT, ECE, ML, Machine Learning, Distributed, cornell, full-stack, engineer'
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
      title: 'ETH: 0x24e9b47D4d823956CcCcd55eda1471a47De215e4'
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
    subdescription: 'IoT / ML / Distributed / ECE / Cornell / 京アニ',
    buttons: [
      {
          name: 'Blog',
          href: 'https://www.eee.dog/'
      },
      {
          name: 'About',
          href: 'https://github.com/IoTcat'
      }
    ],
    socials: [
      {
        href: 'https://raw.githubusercontent.com/IoTcat/iotcat.me/gh-pages/iotcat.asc',
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-53QTMG4",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Defaults to false
        enableWebVitalsTracking: false,
      },
    },
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
