# shenlu.me

Shen Lu's Blog, inspired by [leerob.io](https://leerob.io/).

## Features

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content Management**: [Contentlayer](https://www.contentlayer.dev/)
- **Analytics**: [Google Analytics](https://analytics.google.com/)
- **Comment**: [Giscus](https://giscus.app/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: [PlanetScale](https://planetscale.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Overview

- `components/*` - The components defined as functions provide more features for all pages.
- `data/*` - All other unpublic information (mata, headers, articles, etc.) about the pages.
- `lib/*` - A collection of helpful utilities or functions for external services.
- `app/api/*` - [API Routes](https://nextjs.org/docs/app/building-your-application/routing/router-handlers) powering post views.
- `app/blog/*` - Static pre-rendered posts using Contentlayer.
- `posts/*` - All the content of posts.
- `db/*` - The [Prisma](https://www.prisma.io/) schema and client, which uses a [PlanetScale](https://planetscale.com/) MySQL database.
- `public/*` - Static public assets including fonts and images.

## Running Locally

This application requires Node.js v16.13+.

```js
git clone git@github.com:shenlu89/shenlu.me.git
cd shenlu.me
pnpm install
pnpm dev
```

Create a `.env` file similar to [`.env.example`](/.env.example).

## License

This repository is licensed under [MIT](https://github.com/shenlu89/shenlu89.github.io/blob/main/LICENSE), and the content of all pages is licensed under [CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/).
