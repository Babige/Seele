'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon, UserSecurityIcon } from '~/assets'
import { PeekabooLink } from '~/components/links/PeekabooLink'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180"
      >
        <path
          d="M3 12H4M12 3V4M20 12H21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3M9.70001 17H14.3M9 16C8.16047 15.3704 7.54033 14.4925 7.22743 13.4908C6.91453 12.4892 6.92473 11.4144 7.25658 10.4189C7.58844 9.4233 8.22512 8.55739 9.07645 7.94379C9.92778 7.33019 10.9506 7 12 7C13.0494 7 14.0722 7.33019 14.9236 7.94379C15.7749 8.55739 16.4116 9.4233 16.7434 10.4189C17.0753 11.4144 17.0855 12.4892 16.7726 13.4908C16.4597 14.4925 15.8395 15.3704 15 16C14.6096 16.3865 14.3156 16.8594 14.1419 17.3806C13.9681 17.9018 13.9195 18.4566 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10.0805 18.4566 10.0319 17.9018 9.85813 17.3806C9.6844 16.8594 9.39043 16.3865 9 16Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ml-1 mr-2">工程师</span>
    </span>
  )
}

function Designer() {
  return (
    <span className="group relative bg-black/5 p-1 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 border border-lime-700/90 opacity-70 group-hover:border-dashed group-hover:opacity-100 dark:border-lime-400/90">
        <span className="absolute -left-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -right-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -bottom-[3.5px] -left-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
        <span className="absolute -right-[3.5px] -top-[3.5px] size-1.5 border border-lime-700 bg-zinc-50 dark:border-lime-400" />
      </span>
      {/* 图标和文字一起显示 */}
      <span className="group">
        <svg
          className="mr-2 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.20001 13.2C9.21771 10.505 10.9441 8.13474 13.1971 6.33944C15.45 4.54414 18.1458 3.3904 21 3C20.6096 5.85418 19.4558 8.55002 17.6605 10.8029C15.8652 13.0559 13.495 14.7823 10.8 15.8M10.6 9C12.5431 9.89687 14.1031 11.4568 15 13.4M3 21V17C3 16.2089 3.2346 15.4355 3.67412 14.7777C4.11365 14.1199 4.73836 13.6072 5.46927 13.3045C6.20017 13.0017 7.00444 12.9225 7.78036 13.0769C8.55629 13.2312 9.26902 13.6122 9.82843 14.1716C10.3878 14.731 10.7688 15.4437 10.9231 16.2196C11.0775 16.9956 10.9983 17.7998 10.6955 18.5307C10.3928 19.2616 9.88008 19.8864 9.22228 20.3259C8.56448 20.7654 7.79113 21 7 21H3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-1 mr-2">设计师</span>
      </span>
    </span>
  );
}

function OCD() {
  return (
    <span className="group">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span className="ml-1 mr-2">细节控</span>
    </span>
  )
}

function Founder() {
  return (
    <span className="group ml-2">
      <UserSecurityIcon className="mr-1 inline-flex group-hover:fill-zinc-600/20 dark:group-hover:fill-zinc-200/20" />
      <span className="ml-1 mr-2">创始人</span>
    </span>
  )
}

export function Headline() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />，<Designer />
        <span className="block h-2" />
        <OCD />，<Founder />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          我是 Seele，一名照明设计师，
          <PeekabooLink href="https://onezi.de">Onezi</PeekabooLink>
          创始人，目前带领着Onezi致力于完成一项充满创造力的工作，同时鼓励团队创造影响世界的项目。
          我热爱设计，创新，享受生活，以及在未知领域中探索。
        </Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://seele.im/twitter"
          aria-label="我的推特"
          platform="twitter"
        />
        <SocialLink
          href="https://seele.im/youtube"
          aria-label="我的 YouTube"
          platform="youtube"
        />
        <SocialLink
          href="https://seele.im/bilibili"
          aria-label="我的 Bilibili"
          platform="bilibili"
        />
        <SocialLink
          href="https://seele.im/github"
          aria-label="我的 GitHub"
          platform="github"
        />
        <SocialLink
          href="https://seele.im/tg"
          aria-label="我的 Telegram"
          platform="telegram"
        />
        <SocialLink href="/feed.xml" platform="rss" aria-label="RSS 订阅" />
        <SocialLink
          href="mailto:yunzhi_hu@126.com"
          aria-label="我的邮箱"
          platform="mail"
        />
      </motion.div>
    </div>
  )
}
