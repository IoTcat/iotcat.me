import * as React from "react"

import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const Head = () => {

    const data = useSiteMetadata()

    return (
  <>
    <title>{data.title}</title>
    <meta name="description" content={data.seo.description} />
    <meta name="keywords" content={data.seo.keywords} />
    <meta name="author" content="IoTcat" />
    <meta name="image" content={data.seo.image} />
    <meta property="og:title" content={data.title} />
    <meta property="og:type" content={"website"} />
    <meta property="og:url" content={data.seo.url} />
    <meta property="og:description" content={data.description} />
    <meta property="og:image" content={data.seo.image} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content={data.seo.url.split('/')[2]} />
    <meta property="twitter:url" content={data.seo.url} />
    <meta name="twitter:title" content={data.title} />
    <meta name="twitter:description" content={data.description} />
    <meta name="twitter:image" content={data.seo.image_og} />

  </>
)}
