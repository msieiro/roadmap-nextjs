import { Head, Html, Main, NextScript } from 'next/document'
import Footer from '../components/footer'

export default function Document() {
    return (
        <Html lang='es'>
            <Head />
            <body>
                <Main />
                <NextScript />
                <Footer />
            </body>
        </Html>
    )
}
