import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  library.add(fab, fas, far);
  return (
    <>
    <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
    <link rel="shortcut icon" href="/favicons/favicon.ico"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
    <meta name="theme-color" content="#ffffff"/>
    <link rel="manifest" href="/manifest.json" />

    </Head>
    <DefaultSeo {...SEO} />
    <div className="flex flex-col justify-between min-h-screen h-full">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
    </>
  )
}
export default MyApp
