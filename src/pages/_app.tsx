import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return  (
    <div>
      <Head>
        <title> Mengxue Xu's Portfolio Page</title>
        <meta name="description" content="created by Mengxue Xu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="mainTag" className="bg-slate-800 min-h-screen text-slate-100">
        {/* ------ ❄️ nav bar ------- */}
        <NavBar/>

        {/* ------ ❄️ about me ------- */}
        <Component {...pageProps} />

        {/* ------ ❄️ footer ------- */}
        {/* ❄️ TODO: footer not rendering❌ */}
        <Footer />

      </main>
    </div>
  );
}
