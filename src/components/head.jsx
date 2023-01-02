import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"


export const Head = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title,
                        favicon
                    }
                }
            }
        `
    )
    return (
  <>
    <title>{data.site.siteMetadata.title}</title>
    <link rel="icon" href={data.site.siteMetadata.favicon}></link>
  </>
)}