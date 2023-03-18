import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => (useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title,
                        demoDelay,
                        seo {
                            description,
                            image,
                            image_og,
                            url,
                            keywords
                        },
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
    ).site.siteMetadata)
