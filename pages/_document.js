import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        );

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/react-s-alert@1.4.1/dist/s-alert-default.css"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/react-s-alert@1.4.1/dist/s-alert-css-effects/jelly.css"
                    />

                    <link
                        rel="shortcut icon"
                        type="image/png"
                        href="/static/favicon/favicon.png"
                    />
                    <script src="https://chat-assets.frontapp.com/v1/chat.bundle.js" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
export default MyDocument;
