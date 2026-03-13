import React, { ComponentType } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      /* Critical Path Generator */
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: ComponentType) => (props: any) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheet.getStyleElement()
        ] /* (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ) */
      };
    } finally {
      sheet.seal();
    }
  }

  render() {

    // Static font-loading script (no user input) – safe to inject as-is
    const fontScript = `
      document.fonts.ready.then(function () {
        document.documentElement.classList.add('fonts-loaded');
      });
    `;

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.cdnfonts.com" />
          <link
            href="https://fonts.cdnfonts.com/css/euclid-circular-b"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Times+New+Roman:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
          {/* to prevent underlining of email in IOS browser */}
          <meta name="format-detection" content="email=no" />
        </Head>
        <body>
          {/* wait for the fonts to be laoded before rendering the doc */}
          <script
            dangerouslySetInnerHTML={{
              __html: fontScript
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
