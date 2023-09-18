// React Component
import React from 'react';

// Next Components
import Document, { Head, Html, Main, NextScript } from 'next/document';

// Material UI Components
import { ServerStyleSheets } from '@material-ui/core/styles';

// Feward Components
import GoogleAnalytics from 'components/fundamentals/googleAnalytics';

// Json file
import SEO from 'config/seo.json';

export default class MyDocument extends Document {

    render(): JSX.Element {
        // const gtmId = "GTM-"

        return (
            <Html lang={SEO.HtmlLanguage}>
                <Head>
                    <title>Feward GmbH</title>
                    <link rel="icon" href="/assets/favicon/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="57x57" href="assets/favicon/apple-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="assets/favicon/apple-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="assets/favicon/apple-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="assets/favicon/apple-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="assets/favicon/apple-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="assets/favicon/apple-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="assets/favicon/apple-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="assets/favicon/apple-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/apple-icon-180x180.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="assets/favicon/android-icon-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="assets/favicon/favicon-96x96.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/assets/favicon/manifest.json" />
                    {/* Google Tag Manager */}
                    {/* <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','${gtmId}');`,
                        }}
                    /> */}
                    {/* End Google Tag Manager */}
                    {/* Cookies Consent */}
                    <link
                        rel="stylesheet"
                        href="/assets/cookies/cookieconsent.css"
                    />
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Feward Website" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
                    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin="anonymous"></script>
                    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous"></script>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <GoogleAnalytics />
                    <NextScript />
                    <script defer src="/assets/cookies/cookieconsent.js"></script>
                    <script defer src="/assets/cookies/cookieconsent-init.js"></script>
                    {/* <script type="text/plain" data-cookiecategory="analytics">
                        Google Tag Manager script will be here
                    </script> */}
                    {/* <script type="text/plain" data-cookiecategory="ads">
                        Ads Script will be here
                    </script> */}
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
    };
};