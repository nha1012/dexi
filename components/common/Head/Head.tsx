import { FC } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'
const Head: FC = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="DEXI shop là nơi bán tất cả các sản phẩm local brand VIỆT NAM với thương hiệu DEXI."/>
        <meta name="google-site-verification" content="Ytgs3S2_9TvLIaoEYrnc4TEXb36YtYtFZtexy7JECVc"/>
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LB545D35PB"></script>
        <script src="/assets/analyst.js"></script>
      </NextHead>
    </>
  )
}

export default Head
