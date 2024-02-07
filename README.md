# shenlu.me

Shen Lu's Blog, inspired by [leerob.io](https://leerob.io/).

## Features

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Content**: [Contentlayer](https://contentlayer.dev/)
- **Analytics**: [Google Analytics](https://analytics.google.com/)
- **Comment**: [Giscus](https://giscus.app)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PlanetScale](https://planetscale.com/)
- **Deployment**: [Vercel](https://vercel.com)

## Overview

- `app/components/*` - The components defined as functions provide more features for all pages.
- `app/data/*` - All private information (mata, headers, articles, etc.) about the pages.
- `app/lib/*` - A collection of helpful utilities or functions for external services.
- `app/api/*` - [API Routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) powering post views.
- `app/blog/*` - Static pre-rendered posts using `Contentlayer`.
- `app/db/*` - The [Prisma](https://www.prisma.io/) schema and client, which uses a [PlanetScale](https://planetscale.com/) MySQL database.
- `content/*` - All the MDX files for blog posts.
- `public/*` - Static public assets including fonts and images.

## Install and Run Locally

This application requires Node.js v18.17+.

```js
git clone git@github.com:shenlu89/shenlu.me.git
cd shenlu.me

// development mode
pnpm install
pnpm dev

// production mode
// pnpm build
```

## Deployment

Create a `.env` file similar to [`.env.example`](/.env.example).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shenlu89/shenlu.me)

## License

This repository is licensed under [MIT](https://github.com/shenlu89/shenlu89.github.io/blob/main/LICENSE), and the content of all pages is licensed under [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/).
