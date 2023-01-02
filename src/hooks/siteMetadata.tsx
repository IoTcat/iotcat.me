import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => (useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title,
                        favicon,
                        seo {
                            description,
                            image,
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
    ).site.siteMetadata)