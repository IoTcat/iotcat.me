import * as React from "react"

import { useSiteMetadata } from '../hooks/siteMetadata'

export const Head = () => {

    const data = useSiteMetadata()

    return (
  <>
    <title>{data.title}</title>
    <meta name="description" content={data.seo.description} />
    <meta name="keywords" content={data.seo.keywords} />
    <meta name="author" content="IoTcat" />
    <meta name="image" content={data.seo.image} />
    <meta name="og:title" content={data.title} />
    <meta property="og:type" content={"website"} />
    <meta name="og:url" content={data.seo.url} />
    <meta name="og:description" content={data.description} />
    <meta name="og:image" content={data.seo.image} />
    <link rel="icon" href={data.favicon}></link>

  </>
)}