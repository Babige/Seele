export const seo = {
  title: 'Seele Hu | 工程师、设计师、细节控、创始人',
  description:
    '我叫 Seele，一名工程师，设计师，细节控，同时也是Pimpi创始人，目前带领着Pimpi致力于完成一项充满创造力的工作，同时鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://seele.vercel.app'
      : 'http://localhost:3000'
  ),
} as const
