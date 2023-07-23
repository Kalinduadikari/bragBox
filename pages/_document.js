import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import theme from '../lib/theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="icon" href="/images/navt.png" type="image/png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
