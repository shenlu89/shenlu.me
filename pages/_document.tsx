import { Html, Head, Main, NextScript } from 'next/document'

import meta from 'data/metadata'

export default function Document () {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href={meta.favicon} as="image" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
