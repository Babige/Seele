import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'
import ThankYouLetterScreenshot1 from './Arc aagD26w9@2x.png'
import ThankYouLetterScreenshot2 from './Arc ynleUdHy@2x.png'

const title = 'AMA 一对一咨询'
const description =
  '  提供一对一的咨询服务（Ask Me Anything）。我有各业态（办公、酒店、景观、商业综合体等）的室内外照明设计、家庭智能照明设计、HomeLAB部署、内容创作等经验，可以为你解答相关的问题，我仅支持普通话沟通。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>咨询内容</h2>
        <p>我可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>照明设计</b>
            ：对灯光氛围的需求提升？想改善照明环境，对功能、美感。舒适度的需求？希望在灯光体验上获得观感和情感共鸣？
          </li>
          <li>
            <b>HomeLAB规划</b>：想改善家网络环境，不想为昂贵的视频站会员付费，不知道如何开始。
          </li>
          <li>
            <b>个人产品建设</b>
            ：我是
            <RichLink href="https://Pimpi.im" target="_blank">
              PImpi
            </RichLink>
            的创始人，现在帮助客户改善灯光氛围，打造智慧家庭。
          </li>
        </ul>

        <h2>定价</h2>
        <p>我的一对一咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥328 - 30分钟</strong>
          </li>
          <li>
            <strong>¥648 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>
        <p>
          一旦你完成支付，通过{' '}
          <RichLink
            href="https://cal.com/seele/ask-me-anything"
            target="_blank"
          >
            这个链接
          </RichLink>
          来跟我预约一个合适你的时间。
        </p>

        <h2>感谢信</h2>
        <p>
          下面两个截图摘选自两名朋友的改造，能够帮助到更多的人一直是我的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={ThankYouLetterScreenshot1}
            alt=""
            className="max-w-full"
          />
          <Image
            src={ThankYouLetterScreenshot2}
            alt=""
            className="max-w-full"
          />
        </p>
      </article>
    </Container>
  )
}
