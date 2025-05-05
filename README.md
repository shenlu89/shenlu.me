# shenlu.me

My portfolio built with Next.js, Tailwind, Giscus, Umami, Upstash, MDX, Content Collections, Bun, and Vercel.

## Features

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: [MDX](https://mdxjs.com/) + [Content Collections](https://www.content-collections.dev/)
- **Analytics**: [Umami](https://umami.is/)
- **Comment**: [Giscus](https://giscus.app)
- **Database**: [Redis](https://redis.io/) + [Upstash](https://upstash.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Manager**: [Bun](https://bun.sh/)

## Overview

- `components/*` - The components defined as functions provide more features for all pages.
- `data/*` - All private information (matadata, headers, articles, etc.) about the pages.
- `lib/*` - A collection of helpful utilities or functions for external services.
- `app/api/*` - [API Routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) and Serverless KV with Redis API powered by [Upstash](https://upstash.com/) for post views.
- `app/blog/*` - Static pre-rendered posts using `next-mdx-remote`.
- `content/*` - All the MDX files for blog posts.
- `public/*` - Static public assets including fonts and images.

## Install and Run Locally

This application requires:

- Bun v1.0+ (compatibility with Node.js v20).
- Create a `.env` file similar to [`.env.example`](/.env.example).

```js
git clone git@github.com:shenlu89/shenlu.me.git
cd shenlu.me

// create .env file similar to .env.example

// development mode
bun install
bun dev

// production mode
// bun run build
```

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shenlu89/shenlu.me)

## License

This repository is licensed under [MIT](https://github.com/shenlu89/shenlu89.github.io/blob/main/LICENSE), and the content of all pages is licensed under [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/).
